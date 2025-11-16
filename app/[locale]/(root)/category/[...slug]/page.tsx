import { CategoryPage } from '@pages/category';
import { prisma } from '@prisma/prisma-client';

export default async function Category({ params }: { params: Promise<{ slug: string[] }> }) {
	const { slug } = await params;
	const [parentCategorySlug, childCategorySlug] = slug;

	const currentCategorySlug = childCategorySlug ? childCategorySlug : parentCategorySlug;

	const category = await prisma.category.findFirst({
		where: {
			slug: currentCategorySlug,
		},
		include: {
			parent: {
				include: {
					children: true,
				}
			},
			children: true,
			categoryFilters: true,
		}
	});

	const childrenCategories = category?.parent?.children ?? category?.children;
	const parentSlug = category?.parent?.slug ?? parentCategorySlug;

	return <CategoryPage
		slug={currentCategorySlug}
		categoryTitle={category?.titleUK || 'Category'}
		filters={category?.categoryFilters ?? []}
		childrenCategories={childrenCategories}
		childCategorySlug={childCategorySlug}
		parentSlug={parentSlug}
	/>;
}
