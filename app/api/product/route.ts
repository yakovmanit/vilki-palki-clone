import { prisma } from '@prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
	try {
		// Example:
		// /api/product?categorySlug=sushi&filterId=1
		const categorySlug = req.nextUrl.searchParams.get('categorySlug');
		const filterId = req.nextUrl.searchParams.get('filterId');

		const products = await prisma.product.findMany({
			where: {
				...(categorySlug && {
					category: {
						some: {
							slug: categorySlug,
						}
					}
				}),
				...(filterId && {
					categoryFilters: {
						some: {
							id: parseInt(filterId),
						}
					}
				})
			},
			include: {
				ingredients: true,
				categoryFilters: true,
				options: {
					include: {
						ingredients: true,
					}
				}
			}
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
