'use client';

import React from 'react';
import { cn } from '@shared/lib';
import { Button, Title } from '@shared/ui';
import { CategoryFilter } from '@prisma/client';

interface Props {
	filterId: number;
	setFilterId: React.Dispatch<React.SetStateAction<number>>;
	filters: CategoryFilter[];
	title: string;
}

export const Filters: React.FC<Props> = ({ title, filters, filterId, setFilterId }) => {
	return (
		<section>
			<Title size='xl' text={title} />

			<ul className='flex gap-2 flex-wrap'>
				{
					filters.length !== 0 && (
						<li>
							<Button
								size='rounded'
								variant='plain'
								className={cn({
									'bg-custom-pink text-custom-blue border-custom-pink': filterId === 0,
								})}
								onClick={() => setFilterId(0)}
							>
								Всі
							</Button>
						</li>
					)
				}
				{
					filters?.map((filter) => (
						<li key={filter.id}>
							<Button
								size='rounded'
								variant='plain'
								className={cn({
									'bg-custom-pink text-custom-blue border-custom-pink':
										filterId === filter.id,
								})}
								onClick={() => setFilterId(filter.id)}
							>
								{filter.titleUK}
							</Button>
						</li>
					))
				}
			</ul>
		</section>
	);
};
