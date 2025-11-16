'use client';

import React from 'react';
import { cn } from '@shared/lib';
import { Button, Container, Title } from '@shared/ui';
import { CategoryFilter } from '@prisma/client';

interface Props {
	filters: CategoryFilter[];
	title: string;
}

export const Filters: React.FC<Props> = ({ title, filters }) => {
	const [activeFilterId, setActiveFilterId] = React.useState(1);

	return (
		<section>
			<Title size='xl' text={title} />

			<ul className='flex gap-2 flex-wrap'>
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
		</section>
	);
};
