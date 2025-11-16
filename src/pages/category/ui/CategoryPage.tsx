'use client';

import { Filters } from '@features/filters';
import { ProductCardList } from '@entities/product-card-list';
import { CategoryFilter } from '@prisma/client';
import { Container } from '@shared/ui';
import { Category } from '@prisma/client';
import { Link } from '@shared/lib/i18n';
import { useGetProductQuery } from '@shared/redux';
import { useState } from 'react';

interface Props {
	parentSlug?: string;
	childCategorySlug: string;
	slug: string;
	categoryTitle: string;
	childrenCategories?: Category[];
	filters: CategoryFilter[];
}

export const CategoryPage = ({ categoryTitle, filters, childrenCategories, slug, childCategorySlug, parentSlug }: Props) => {
	const [filterId, setFilterId] = useState(0);

	const { data: categoryProducts, isFetching: isCategoryProductsFetching } = useGetProductQuery({ categorySlug: slug, filterId: filterId });

	return (
		<Container>
			<Filters
				filterId={filterId}
				setFilterId={setFilterId}
				filters={filters}
				title={categoryTitle}
			/>

			{/* Subcategories */}
			{/* TODO: add styling */}
			{
				childrenCategories?.map(cat => (
					<div key={cat.id} className='mt-4'>
						<Link href={`/category/${parentSlug}/${cat.slug}`} className={childCategorySlug === cat.slug ? 'pointer-events-none' : ''}>
							{cat.titleUK}
						</Link>
					</div>
				))
			}

			<ProductCardList
				categoryProducts={categoryProducts}
				isCategoryProductsFetching={isCategoryProductsFetching}
				className='mt-11'
			/>
		</Container>
	);
};

