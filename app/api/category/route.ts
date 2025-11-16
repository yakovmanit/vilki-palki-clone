import { prisma } from '@prisma/prisma-client';
import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const categories = await prisma.category.findMany({
			include: {
				parent: true,
				children: {
					include: {
						products: {
							include: {
								categoryFilters: true,
							}
						},
						categoryFilters: true,
					}
				},
				products: {
					include: {
						categoryFilters: true,
					}
				},
				categoryFilters: true,
			}
		});

		return NextResponse.json(categories);
	} catch (err) {
		console.log('[CATEGORY_GET] Server error', err);
		return NextResponse.json(
			{ message: 'Failed to get categories' },
			{ status: 500 },
		);
	}
}
