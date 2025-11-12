'use client';

import React, { useRef, useState } from 'react';

import { Ingredient } from '@prisma/client';
import { disableBodyScroll } from 'body-scroll-lock';
import Image from 'next/image';

import { cn } from '@shared/lib';
import { OptionWithIngredients } from '@shared/model/types';
import { Title } from '@shared/ui';

import { Counter } from './Counter';
import { ProductOptionsPopup } from './ProductOptionsPopup';

interface Props {
	className?: string;
	id: number;
	titleUK: string;
	titleEN: string;
	price: number;
	slug: string;
	weight: number;
	imageUrl: string;
	ingredients: Ingredient[];
	options: OptionWithIngredients[];
}

export const ProductCard: React.FC<Props> = ({
	className,
	id,
	titleUK,
	titleEN,
	price,
	slug,
	weight,
	imageUrl,
	ingredients,
	options,
}) => {
	const [count, setCount] = useState(1);
	const [isProductPopupOpen, setIsProductPopupOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	const allOptionsIngredients = options.flatMap((option) => option.ingredients);

	const handleProductPopupOpen = () => {
		if (!ref.current) return;

		setIsProductPopupOpen(true);
		disableBodyScroll(ref.current);
	};

	return (
		<div
			ref={ref}
			className={cn(
				'rounded-md overflow-hidden border border-gray-200',
				className,
			)}
		>
			<ProductOptionsPopup
				productId={id}
				title={titleUK}
				options={options}
				isOpen={isProductPopupOpen}
				closePopup={setIsProductPopupOpen}
				count={count}
				setCount={setCount}
				productPrice={price}
				allOptionsIngredients={allOptionsIngredients}
			/>

			<div className='h-40'>
				<Image
					className='h-full object-cover'
					src={imageUrl}
					width={500}
					height={500}
					alt='Picture of the author'
				/>
			</div>

			<div className='p-2'>
				<Title
					className='font-semibold text-ellipsis whitespace-nowrap overflow-hidden'
					size='xs'
					text={titleUK}
				/>

				<p className='text-custom-gray text-sm mb-10'>Вага: {weight}г</p>

				<div className='flex justify-between items-center'>
					<span className='font-semibold'>{price} UAH</span>

					{/* Counter */}
					<Counter count={count} setCount={setCount} />
				</div>
			</div>

			<button
				onClick={() => handleProductPopupOpen()}
				className='flex justify-center items-center p-2 bg-custom-blue w-full cursor-pointer'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='#fff'
					strokeWidth='1'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='lucide lucide-shopping-basket-icon lucide-shopping-basket'
				>
					<path d='m15 11-1 9' />
					<path d='m19 11-4-7' />
					<path d='M2 11h20' />
					<path d='m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4' />
					<path d='M4.5 15.5h15' />
					<path d='m5 11 4-7' />
					<path d='m9 11 1 9' />
				</svg>
			</button>
		</div>
	);
};
