'use client';

import React from 'react';

import Link from 'next/link';

import { cn } from '@shared/lib';

import { CategoryListSkeleton } from './CategoryListSkeleton';
import { useGetCategoryQuery } from '@shared/redux/api/categoryApi';

interface Props {
	className?: string;
}

export const CategoryList: React.FC<Props> = ({ className }) => {
	const { data: categories, isLoading: isCategoriesLoading } = useGetCategoryQuery();

	console.log('categories redux: ', categories);

	if (isCategoriesLoading) {
		return <CategoryListSkeleton />
	}

	return (
		<ul className={cn('grid grid-cols-3 gap-2', className)}>
			{categories?.map(category => (
				<li key={category.id}>
					<Link href={`/category/${category.slug}`}>
						<div className='flex flex-col items-center'>
							<div>
								{
									category.imageUrl && (
										<img src={category.imageUrl} alt={category.titleUK} />
									)
								}
							</div>
							<p className='p-4 block text-black text-center'>
								{category?.titleUK}
							</p>
						</div>
					</Link>
				</li>
			))}
		</ul>
	);
};
