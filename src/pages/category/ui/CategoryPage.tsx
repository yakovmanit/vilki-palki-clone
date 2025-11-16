'use client';

import { Filters } from '@features/filters';
import { ProductCardList } from '@entities/product-card-list';
import { CategoryFilter } from '@prisma/client';
import { Container } from '@shared/ui';
import { Category } from '@prisma/client';
import { Link } from '@shared/lib/i18n';
import { useGetProductQuery } from '@shared/redux';
import { useState } from 'react';
import Image from 'next/image';

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
			<ul className='grid grid-cols-2 gap-2.5 mt-10'>
				{
					childrenCategories?.map(cat => (
						<li key={cat.id} className='p-1 pt- pl-2 border border-gray-200 relative rounded-sm'>
							<Link href={`/category/${parentSlug}/${cat.slug}`} className={childCategorySlug === cat.slug ? 'pointer-events-none' : ''}>
								{cat.titleUK}
								{
									cat.imageUrl && (
										<div className='flex justify-end h-12'>
											<Image
												className='object-cover rounded-sm'
												alt={cat.titleUK}
												src={cat.imageUrl}
												width={64}
												height={64}
											/>
										</div>
									)
								}
							</Link>
						</li>
					))
				}
			</ul>


			<ProductCardList
				categoryProducts={categoryProducts}
				isCategoryProductsFetching={isCategoryProductsFetching}
				className='mt-11'
			/>
		</Container>
	);
};

