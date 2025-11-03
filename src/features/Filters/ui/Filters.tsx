'use client';

import React, { useState } from 'react';

import { cn } from '@shared/lib';
import { Button, Container, Title } from '@shared/ui';
import { useCategoryItems } from '@shared/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@shared/redux/store';
import { setCategoryId } from '@shared/redux/slices/categorySlice';
import Skeleton from 'react-loading-skeleton';

export const Filters: React.FC = () => {
	const { isCategoriesLoading, parentCategories } = useCategoryItems();

	const activeCategoryId = useSelector((state: RootState) => state.categories.activeCategoryId);

	const dispatch = useDispatch();

	return (
		<section>
			<Container>
				<Title size='xl' text='Доставка їжі' />
				<Title size='lg' text='Категорії' className='mb-5' />

				<ul className='flex gap-2 flex-wrap'>
					{
						// TODO: remove skeleton to a separate file
						isCategoriesLoading ? (
							[...new Array(5)].map((_, i) => (
								<Skeleton key={i} width={70} height={40} />
							))
						) : (
							parentCategories?.map(category => (
								<li key={category.id}>
									<Button
										size='rounded'
										variant='plain'
										className={cn({
											'bg-custom-pink text-custom-blue border-custom-pink':
												activeCategoryId === category.id,
										})}
										onClick={() => dispatch(setCategoryId(category.id))}
									>
										{category.titleUK}
									</Button>
								</li>
							))
						)
					}
				</ul>
			</Container>
		</section>
	);
};
