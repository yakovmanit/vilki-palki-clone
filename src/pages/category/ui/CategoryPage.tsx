'use client';

import { Filters } from '@features/filters';
import { ProductCardList } from '@entities/product-card-list';
import { CategoryFilter } from '@prisma/client';
import { Container } from '@shared/ui';
import { Category } from '@prisma/client';
import { Link } from '@shared/lib/i18n';

interface Props {
	slug: string;
	categoryTitle: string;
	childrenCategories?: Category[];
	filters: CategoryFilter[];
}

export const CategoryPage = ({ categoryTitle, filters, childrenCategories, slug }: Props) => {
	return (
		<Container>
			<Filters
				filters={filters}
				title={categoryTitle}
			/>

			{/* Subcategories */}
			{/* TODO: add styling */}
			{
				childrenCategories?.map(cat => (
					<div key={cat.id} className='mt-4'>
						<Link href={`/category/${slug}/${cat.slug}`}>
							{cat.titleUK}
						</Link>
					</div>
				))
			}

			<ProductCardList className='mt-11' />
		</Container>
	);
};

