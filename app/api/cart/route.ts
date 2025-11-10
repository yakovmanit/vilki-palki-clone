import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@prisma/prisma-client';
import { cookies } from 'next/headers'

export async function GET(req: NextRequest) {
	try {
		const cookieStore = await cookies();
		const userToken = cookieStore.get('userToken')?.value;

		if (!userToken) {
			return NextResponse.json({ cartItems: [], totalAmount: 0 }, { status: 400 });
		}

		const cart = await prisma.cart.findFirst({
			where: {
				token: userToken
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
							}
						},
						ingredients: true,
					}
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