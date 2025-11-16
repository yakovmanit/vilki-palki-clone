import { prisma } from '@prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ slug: string }> },
) {
	try {
		const { slug } = await params;

		const category = await prisma.category.findFirst({
			where: {
				slug: slug,
			},
			include: {
				parent: true,
				children: true,
				products: {
					include: {
						ingredients: true,
						categoryFilters: true,
						options: {
							include: {
								ingredients: true,
							}
						}
					}
				},
				categoryFilters: true,
			}
		});

		return NextResponse.json(category);
	} catch (err) {
		console.log('[CATEGORY_ID_GET] Server error', err);
		return NextResponse.json(
			{ message: 'Failed to get category' },
			{ status: 500 },
		);
	}
}
