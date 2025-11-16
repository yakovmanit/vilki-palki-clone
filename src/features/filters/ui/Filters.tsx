'use client';

import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';

import { useCategoryItems } from '@shared/hooks';
import { cn } from '@shared/lib';
import { setCategoryId } from '@shared/redux/slices/categorySlice';
import { RootState } from '@shared/redux/store';
import { Button, Container, Title } from '@shared/ui';
import { CategoryFilter } from '@prisma/client';

interface Props {
	filters: CategoryFilter[];
	title: string;
}

export const Filters: React.FC<Props> = ({ title, filters }) => {
	// const { isCategoriesLoading, parentCategories } = useCategoryItems();
	//
	// const activeCategoryId = useSelector(
	// 	(state: RootState) => state.categories.activeCategoryId,
	// );

	// const dispatch = useDispatch();

	const [activeFilterId, setActiveFilterId] = React.useState(1);

	return (
		<section>
			<Container>
				<Title size='xl' text={title} />

				<ul className='flex gap-2 flex-wrap'>
					<li>
						<Button
							size='rounded'
							variant='plain'
							className={cn({
								'bg-custom-pink text-custom-blue border-custom-pink':
									activeFilterId === 0,
							})}
							onClick={() => setActiveFilterId(0)}
						>
							Всі
						</Button>
					</li>
					{
						filters?.map((filter) => (
							<li key={filter.id}>
								<Button
									size='rounded'
									variant='plain'
									className={cn({
										'bg-custom-pink text-custom-blue border-custom-pink':
											activeFilterId === filter.id,
									})}
									onClick={() => setActiveFilterId(filter.id)}
								>
									{filter.titleUK}
								</Button>
							</li>
						))
					}
				</ul>
			</Container>
		</section>
	);
};
