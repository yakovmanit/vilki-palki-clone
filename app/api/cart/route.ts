import { prisma } from '@prisma/prisma-client';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { findOrCreateCart } from '@prisma/lib/find-or-create-cart';
import { updateCartTotalAmount } from '@prisma/lib/update-cart-total-amount';
import { CartItemDTO } from '@shared/model/types';

export async function GET(req: NextRequest) {
	try {
		const cookieStore = await cookies();
		const userToken = cookieStore.get('userToken')?.value;

		if (!userToken) {
			return NextResponse.json(
				{ cartItems: [], totalAmount: 0 },
				{ status: 400 },
			);
		}

		const cart = await prisma.cart.findFirst({
			where: {
				token: userToken,
			},
			include: {
				cartItems: {
					include: {
						product: {
							include: {
								category: {
									select: {
										titleUK: true,
										titleEN: true,
									},
								},
							},
						},
						ingredients: true,
					},
				},
			},
		});

		return NextResponse.json(cart);
	} catch (err) {
		console.log('[CART_GET] Server error', err);
		return NextResponse.json(
			{ message: 'Failed to get cart' },
			{ status: 500 },
		);
	}
}

export async function POST(req: NextRequest) {
	try {
		const cookieStore = await cookies();
		let userToken = cookieStore.get('userToken')?.value;

		if (!userToken) {
			userToken = crypto.randomBytes(32).toString('hex');
		}

		const cart = await findOrCreateCart(userToken);

		const reqBody = (await req.json()) as CartItemDTO;

		const cartItem = await prisma.cartItem.findFirst({
			where: {
				productId: reqBody.productId,
				ingredients: {
					every: {
						id: {
							in: reqBody.ingredients,
						},
					},
				},
			},
		});

		if (!cartItem) {
			await prisma.cartItem.create({
				data: {
					quantity: reqBody.quantity,
					cartId: cart.id,
					productId: reqBody.productId,
					ingredients: {
						connect: reqBody.ingredients.map(id => ({ id }))
					},
				},
			});
		} else {
			await prisma.cartItem.update({
				where: {
					id: cartItem.id,
				},
				data: {
					quantity: cartItem.quantity + reqBody.quantity,
				},
			});
		}

		await updateCartTotalAmount(userToken);

		const res = NextResponse.json({ message: 'Cart item created successfully' });

		res.cookies.set({
			name: 'userToken',
			value: userToken,
			maxAge: 60 * 60 * 24 * 7,
		});

		return res;

	} catch(err) {
		console.log('[CART_POST] Server error', err);
		return NextResponse.json(
			{ message: 'Failed to create cart item' },
			{ status: 500 },
		);
	}
}