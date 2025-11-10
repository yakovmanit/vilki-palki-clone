import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { prisma } from '@prisma/prisma-client';
import { updateCartTotalAmount } from '@prisma/lib/update-cart-total-amount';

export async function PATCH(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> },
) {
	try {
		const cookieStore = await cookies();
		const userToken = cookieStore.get('userToken')?.value;

		const { id } = await params;

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

		await updateCartTotalAmount(userToken);

		return NextResponse.json(updatedCartItem);

	} catch (err) {
		console.log('[CART_ITEM_PATCH] Server error', err);
		return NextResponse.json(
			{ message: 'Failed to update cart item' },
			{ status: 500 },
		);
	}
}


export async function DELETE(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> },
) {
	try {
		const cookieStore = await cookies();
		const userToken = cookieStore.get('userToken')?.value;

		if (!userToken) {
			return NextResponse.json({ cartItems: [], totalAmount: 0 }, { status: 400 });
		}

		const { id } = await params;

		await prisma.cartItem.delete({
			where: {
				id: Number(id),
			},
		});

		await updateCartTotalAmount(userToken);

		return NextResponse.json({ message: 'Cart item deleted successfully' });

	} catch (err) {
		console.log('[CART_ITEM_DELETE] Server error', err);
		return NextResponse.json(
			{ message: 'Failed to delete cart item' },
			{ status: 500 },
		);
	}
}