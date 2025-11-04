import { Check } from 'lucide-react';
import React from 'react';

import { Ingredient } from '@prisma/client';
import Image from 'next/image';

import { cn } from '@shared/lib';
import { Title } from '@shared/ui';

interface Props {
	title?: string;
	ingredients: Ingredient[];
	handleSelectedIngredients: (id: number) => void;
	selectedIngredients: number[];
	className?: string;
}

export const Option: React.FC<Props> = ({
	className,
	title,
	ingredients,
	handleSelectedIngredients,
	selectedIngredients,
}) => {
	return (
		<div className='mb-8'>
			<Title
				className='text-custom-gray mt-4 mb-6'
				size='xs'
				text={title ?? 'Оберіть опцію'}
			/>

			<ul className={cn('grid grid-cols-3 gap-2', className)}>
				{ingredients.map((ingredient) => (
					<li
						onClick={() => handleSelectedIngredients(ingredient.id)}
						key={ingredient.id}
					>
						<button
							className={cn(
								'bg-blue-50 p-3 rounded-lg border border-blue-100 relative',
								{
									'border-blue-50': selectedIngredients.includes(ingredient.id),
								},
							)}
						>
							{selectedIngredients.includes(ingredient.id) && (
								<div className='p-1 rounded-full bg-custom-blue w-fit absolute -top-2 -right-2'>
									<Check className='text-white w-4 h-4' strokeWidth='3' />
								</div>
							)}

							<Image
								src={ingredient.imageUrl}
								alt={ingredient.titleUK}
								width={500}
								height={500}
								className='mb-1'
							/>

							<p className='text-xs text-custom-gray'>{ingredient.titleUK}</p>
						</button>

						<p className='mt-1.5 text-xs font-medium text-center'>
							<span>{ingredient.price} UAH</span> /{' '}
							<span>{ingredient.weight} g</span>
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};
