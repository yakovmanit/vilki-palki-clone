import { Check } from 'lucide-react';
import React, { useState } from 'react';

import Image from 'next/image';

import { cn } from '@shared/lib';
import { Title } from '@shared/ui';

interface Props {
	title?: string
  className?: string;
}

const options = [
	{
		id: 1,
		imageIrl: 'https://vilki-palki.od.ua/storage/img-cache/1756373540куркаааа.png.webp',
		name: 'Подвійна курка 1',
		price: 100,
		weight: 75,
	},
	{
		id: 2,
		imageIrl: 'https://vilki-palki.od.ua/storage/img-cache/1756373540куркаааа.png.webp',
		name: 'Подвійна курка 2',
		price: 100,
		weight: 75,
	},
	{
		id: 3,
		imageIrl: 'https://vilki-palki.od.ua/storage/img-cache/1756373540куркаааа.png.webp',
		name: 'Подвійна курка 3',
		price: 100,
		weight: 75,
	},
];

export const Options: React.FC<Props> = ({ className, title }) => {
	const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

	const handleSelectedOptions = (id: number) => {
		if (!selectedOptions.includes(id)) {
			setSelectedOptions([...selectedOptions, id])
		} else {
			const filteredOptions = selectedOptions.filter(_id => _id !== id);

			setSelectedOptions(filteredOptions);
		}
	}
	
  return (
		<div className='mb-8'>
			<Title
				className='text-custom-gray mt-4 mb-6'
				size='xs'
				text={title ?? 'Оберіть опцію'}
			/>

			<ul className={cn('grid grid-cols-3 gap-2', className)}>
				{options.map(option => (
					<li onClick={() => handleSelectedOptions(option.id)} key={option.id}>
						<button
							className={cn(
								'bg-blue-50 p-3 rounded-lg border border-blue-100 relative',
								{
									'border-blue-50': selectedOptions.includes(option.id),
								},
							)}
						>
							{selectedOptions.includes(option.id) && (
								<div className='p-1 rounded-full bg-custom-blue w-fit absolute -top-2 -right-2'>
									<Check className='text-white w-4 h-4' strokeWidth='3' />
								</div>
							)}

							<Image
								src={option.imageIrl}
								alt={option.name}
								width={500}
								height={500}
								className='mb-1'
							/>

							<p className='text-xs text-custom-gray'>{option.name}</p>
						</button>

						<p className='mt-1.5 text-xs font-medium text-center'>
							<span>{option.price} UAH</span> / <span>{option.weight} g</span>
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};
