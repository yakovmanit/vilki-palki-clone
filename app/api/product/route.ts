import { prisma } from '@prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
	try {
		const categoryId = req.nextUrl.searchParams.get('categoryId');

		const products = await prisma.product.findMany({
			where: {
				category: {
					some: {
						id: Number(categoryId)
					}
				},
			},
			include: {
				ingredients: true,
				category: true,
				options: {
					include: {
						ingredients: true,
					},
				},
			},
		});

		return NextResponse.json(products);
	} catch (err) {
		console.log('[PRODUCT_GET] Server error', err);
		return NextResponse.json(
			{ message: 'Failed to get categories' },
			{ status: 500 },
		);
	}
}
