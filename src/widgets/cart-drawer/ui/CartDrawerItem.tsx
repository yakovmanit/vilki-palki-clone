'use client';

import { X } from 'lucide-react';
import React, { useState } from 'react';

import { Ingredient } from '@prisma/client';
import Image from 'next/image';

import { Counter } from '@entities/product-card/ui/Counter';
import { Title } from '@shared/ui';
import { useDeleteCartItemMutation, useUpdateCartItemMutation } from '@shared/redux';

interface Props {
	cartItemId: number;
	categoryName: string;
	productName: string;
	price: number;
	weight: number;
	ingredients?: Ingredient[];
	imageUrl?: string;
	quantity: number;
}

export const CartDrawerItem: React.FC<Props> = ({
	categoryName,
	productName,
	price,
	weight,
	ingredients,
	imageUrl,
	cartItemId,
	quantity,
}) => {
	const [counterValue, setCounterValue] = useState(quantity);

	const [updateCartItem] = useUpdateCartItemMutation();
	const [deleteCartItem] = useDeleteCartItemMutation();

	const handleUpdateCartItem = async (type: 'minus' | 'plus') => {
		if (!cartItemId) return;

		if (type === 'minus') {
			if (counterValue - 1 === 0) {
				await deleteCartItem({ id: cartItemId });
				return;
			}

			setCounterValue((prev) => (prev > 1 ? prev - 1 : 1))

			await updateCartItem({
				id: cartItemId,
				quantity: counterValue - 1
			});
		} else {
			setCounterValue((prev) => prev + 1)

			await updateCartItem({
				id: cartItemId,
				quantity: counterValue + 1
			});
		}
	}

	return (
		<div className='p-2 border-[2px] border-gray-200 rounded-md relative'>
			<div className='flex items-center gap-3 '>
				<button className='absolute right-0 top-1 w-5 h-5 text-custom-gray'>
					<X className='w-4 h-4' />
				</button>

				<div className='shrink-0 rounded-md overflow-hidden h-20 w-20'>
					<Image
						className='object-cover w-full h-full'
						src={imageUrl || '/assets/Image-not-found.png'}
						alt={productName}
						width={100}
						height={100}
					/>
				</div>

				<div className='w-full'>
					<p className='text-xs text-custom-gray'>{categoryName}</p>

					<Title size='xs' text={productName} />

					<div className='flex items-center justify-between gap-1.5'>
						<p className='font-semibold'>{price} UAH</p>
						<p className='text-xs text-custom-gray'>Вага: {weight}г</p>
						<Counter
							className='ml-auto'
							count={counterValue}
							handleUpdateCartItem={handleUpdateCartItem}
						/>
					</div>
				</div>
			</div>

			{/* Ingredients	*/}
			<div className='flex flex-col'>
				{ingredients?.map((ingredient) => (
					<div
						key={ingredient.titleUK}
						className='flex items-center justify-between gap-4 border-t border-gray-100 p-2 -mx-2 text-sm text-gray-600 last:pb-0 first:mt-2'
					>
						<p>+ {ingredient.titleUK}</p>
						<p>+ {ingredient.price} UAH</p>
					</div>
				))}
			</div>
		</div>
	);
};
