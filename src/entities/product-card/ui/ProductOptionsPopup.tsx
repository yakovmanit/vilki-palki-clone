'use client';

import React, {
	Dispatch,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from 'react';

import { Ingredient } from '@prisma/client';
import { enableBodyScroll } from 'body-scroll-lock';

import { cn } from '@shared/lib';
import { OptionWithIngredients } from '@shared/model/types';
import { useAddCartItemMutation, useGetCartQuery } from '@shared/redux';
import { Button, CloseIcon, Container, Title } from '@shared/ui';

import { Counter } from './Counter';
import { Option } from './Option';

interface Props {
	productId: number;
	isOpen: boolean;
	closePopup: (value: boolean) => void;
	options: OptionWithIngredients[];
	title: string;
	className?: string;
	setCount: Dispatch<SetStateAction<number>>;
	count: number;
	productPrice: number;
	allOptionsIngredients: Ingredient[];
}

export const ProductOptionsPopup: React.FC<Props> = ({
	className,
	productId,
	isOpen,
	closePopup,
	title,
	options,
	setCount,
	count,
	productPrice,
	allOptionsIngredients,
}) => {
	// TODO(refactor): remove calculating logic to lib
	const [selectedIngredients, setSelectedIngredients] = useState<number[]>([]);

	const handleSelectedIngredients = (id: number) => {
		if (!selectedIngredients.includes(id)) {
			setSelectedIngredients([...selectedIngredients, id]);
		} else {
			const filteredIngredients = selectedIngredients.filter(
				(_id) => _id !== id,
			);

			setSelectedIngredients(filteredIngredients);
		}
	};
	const ref = useRef<HTMLDivElement>(null);

	const handleClosePopup = () => {
		if (!ref.current) return;

		closePopup(false);
		enableBodyScroll(ref.current);
	};

	const selectedIngredientsPrice = allOptionsIngredients.reduce(
		(acc, ingredient) => {
			if (selectedIngredients.includes(ingredient.id)) {
				return acc + ingredient.price;
			} else {
				return acc;
			}
		},
		0,
	);

	const totalProductPrice = productPrice + selectedIngredientsPrice;

	const [addCartItem] = useAddCartItemMutation();

	const handleAddCartItem = async () => {
		await addCartItem({
			ingredients: selectedIngredients,
			productId: productId,
			quantity: count,
		});
	};

	return (
		<div
			ref={ref}
			className={cn(
				'fixed transition ease-out duration-500 w-full h-full top-0 left-0 z-40 translate-y-0 bg-white flex flex-col',
				className,
				{
					'translate-y-full': !isOpen,
				},
			)}
		>
			<div className='pt-[54px] pb-4'>
				<Container>
					<div className='mt-4 flex justify-between gap-4'>
						<Title text={title} className='font-medium' />

						<button
							className='rounded-full border border-gray-300 p-2 h-fit'
							onClick={() => handleClosePopup()}
						>
							<CloseIcon className='stroke-gray-300' />
						</button>
					</div>
				</Container>
			</div>

			<div className='flex-1 overflow-y-auto overflow-x-hidden'>
				<Container>
					<div className='pb-4'>
						{options?.map((option) => (
							<Option
								key={option.id}
								title={option.titleUK}
								ingredients={option.ingredients}
								handleSelectedIngredients={handleSelectedIngredients}
								selectedIngredients={selectedIngredients}
							/>
						))}
					</div>
				</Container>
			</div>

			<div className='border-t border-gray-200 pb-6'>
				<Container>
					<div className='flex items-center justify-between py-4'>
						<p className='text-3xl font-semibold'>{totalProductPrice} UAH</p>

						<Counter count={count} setCount={setCount} isPopupCounter={true} />
					</div>

					<Button onClick={handleAddCartItem} className='w-full text-lg'>
						Додати в кошик
					</Button>
				</Container>
			</div>
		</div>
	);
};
