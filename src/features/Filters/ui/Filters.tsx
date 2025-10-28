'use client';

import React, { useState } from 'react';
import { Button, Container, Title } from '@shared/ui';
import { cn } from '@shared/lib';

const cats = [
	'Все',
	'Піца',
	'Суші',
	'Бургери',
]

export const Filters: React.FC = () => {
	const [activeCat, setActiveCat] = useState(0);

  return (
		<section>
			<Container>
				<Title size='xl' text='Доставка їжі' />
				<Title size='lg' text='Категорії' className='mb-5' />

				<ul className='flex gap-2 flex-wrap'>
					{cats.map((cat, i) => (
						<li key={i}>
							<Button
								size='rounded'
								variant='plain'
								className={cn({
									'bg-custom-pink text-custom-blue border-custom-pink': activeCat === i,
								})}
								onClick={() => setActiveCat(i)}
							>
								{cat}
							</Button>
						</li>
					))}
				</ul>
			</Container>
		</section>
  );
};
