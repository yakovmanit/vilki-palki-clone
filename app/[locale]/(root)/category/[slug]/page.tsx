import { CategoryPage } from '@pages/category';
import { prisma } from '@prisma/prisma-client';
import { ProductWithRelations } from '@shared/model/types';

export default async function Category({ params }: { params: { slug: string } }) {
	const slug = await params.slug;

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

	console.log(category);

	return <CategoryPage
		categoryTitle={category?.titleUK || 'Category'}
		allCategoryProducts={category?.products as ProductWithRelations[]}
	/>;
}
