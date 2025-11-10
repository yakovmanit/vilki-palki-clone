import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { prisma } from '@prisma/prisma-client';

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
	try {
		const cookieStore = await cookies();
		const userToken = cookieStore.get('userToken')?.value;

		const { id } = params;

		if (!userToken) {
			return NextResponse.json({ cartItems: [], totalAmount: 0 }, { status: 400 });
		}

		const { quantity } = await req.json();

		const updatedCartItem = await prisma.cartItem.update({
			where: { id: Number(id) },
			data: {
				quantity: quantity,
			},
		});

		const cartItems = await prisma.cartItem.findMany({
			where: {
				cart: {
					token: userToken,
				},
			},
			include: {
				product: true,
				ingredients: true
			}
		});

		const totalAmount = cartItems.reduce((total, item) => {
			const ingredientsTotal = item.ingredients.reduce((ingTotal, ingredient) => ingTotal + ingredient.price, 0);
			const itemTotal = (item.product.price + ingredientsTotal) * item.quantity;
			return total + itemTotal;
		}, 0);

		await prisma.cart.updateMany({
			where: {
				token: userToken,
			},
			data: {
				totalAmount: totalAmount,
			}
		});

		return NextResponse.json(updatedCartItem);

	} catch (err) {
		console.log('[CART_ITEM_PATCH] Server error', err);
		return NextResponse.json(
			{ message: 'Failed to update cart item' },
			{ status: 500 },
		);
	}
}