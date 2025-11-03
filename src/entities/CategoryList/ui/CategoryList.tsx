'use client';

import React from 'react';

import Link from 'next/link';

import { useCategoryItems } from '@shared/hooks';
import { cn } from '@shared/lib';
import { useGetCategoryQuery } from '@shared/redux/api/categoryApi';

import { CategoryListSkeleton } from './CategoryListSkeleton';

interface Props {
	className?: string;
}

export const CategoryList: React.FC<Props> = ({ className }) => {
	const { isCategoriesLoading, parentCategories } = useCategoryItems();

	if (isCategoriesLoading) {
		return <CategoryListSkeleton />;
	}

	return (
		<ul className={cn('grid grid-cols-3 gap-2', className)}>
			{parentCategories?.map((category) => (
				<li key={category.id}>
					<Link href={`/category/${category.slug}`}>
						<div className='flex flex-col items-center'>
							<div className='w-12 h-12'>
								{category.imageUrl && (
									<img
										className='w-full h-full'
										src={category.imageUrl}
										alt={category.titleUK}
									/>
								)}
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
