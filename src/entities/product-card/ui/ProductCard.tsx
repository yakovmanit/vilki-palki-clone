'use client';

import React, { useRef, useState } from 'react';

import { Ingredient } from '@prisma/client';
import { disableBodyScroll } from 'body-scroll-lock';
import Image from 'next/image';

import { cn } from '@shared/lib';
import { OptionWithIngredients } from '@shared/model/types';
import { Button, Title } from '@shared/ui';

import { Counter } from './Counter';
import { ProductOptionsPopup } from './ProductOptionsPopup';
import { useAddCartItemMutation } from '@shared/redux';
import { ShoppingBasket } from 'lucide-react';

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
	const [addCartItem, { isLoading: isCartItemLoading }] = useAddCartItemMutation();

	const handleAddCartItem = async () => {
		await addCartItem({
			productId: id,
			quantity: count,
			ingredients: [],
		});

		setIsProductPopupOpen(false);
	};

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
				addCartItem={addCartItem}
				isCartItemLoading={isCartItemLoading}
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

			<Button
				onClick={() => allOptionsIngredients.length > 0 ? handleProductPopupOpen() : handleAddCartItem()}
				loading={isCartItemLoading}
				className='flex justify-center items-center bg-custom-blue w-full rounded-none'
				size='icon'
			>
				<ShoppingBasket strokeWidth={1.5} />
			</Button>
		</div>
	);
};
