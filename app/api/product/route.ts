import { prisma } from '@prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest & { categorySlug?: string; filterId?: string; price?: 'asc' | 'desc' }) {
	try {
		// Example:
		// /api/product?categorySlug=sushi&filterId=1&price=desc
		const categorySlug = req.nextUrl.searchParams.get('categorySlug');
		const filterId = req.nextUrl.searchParams.get('filterId');
		const price = req.nextUrl.searchParams.get('price') as 'asc' | 'desc' || 'asc';

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
			orderBy: {
				price: price,
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
