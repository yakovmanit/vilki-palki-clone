import { HomePage } from '@pages/home';
import { prisma } from '@prisma/prisma-client';

export default async function Home() {
	const homeCategorySlug = 'popular';

	const category = await prisma.category.findFirst({
		where: {
			slug: homeCategorySlug,
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

	return <HomePage
		categoryTitle={category?.titleUK || ''}
		filters={category?.categoryFilters || []}
	/>;
}
