import { CategoryPage } from '@pages/category';
import { prisma } from '@prisma/prisma-client';

export default async function Category({ params }: { params: { slug: string } }) {
	const slug = await params.slug;

	const category = await prisma.category.findFirst({
		where: {
			slug: slug,
		},
		include: {
			parent: true,
			children: true,
			categoryFilters: true,
		}
	});

	console.log(category);

	return <CategoryPage
		slug={slug}
		categoryTitle={category?.titleUK || 'Category'}
		filters={category?.categoryFilters ?? []}
		childrenCategories={category?.children || []}
	/>;
}
