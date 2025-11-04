'use client';

import React, { Dispatch, SetStateAction, useRef } from 'react';

import { enableBodyScroll } from 'body-scroll-lock';

import { cn } from '@shared/lib';
import { Button, CloseIcon, Container, Title } from '@shared/ui';

import { Options } from './Options';
import { OptionWithIngredients } from '@shared/model/types';
import { Counter } from './Counter';

interface Props {
	isOpen: boolean;
	closePopup: (value: boolean) => void;
	options: OptionWithIngredients[];
	title: string;
	className?: string;
	setCount: Dispatch<SetStateAction<number>>;
	count: number;
}

export const ProductOptionsPopup: React.FC<Props> = ({
																											 className,
																											 isOpen,
																											 closePopup,
																											 title,
																											 options,
																											 setCount,
																											 count,
																										 }) => {
	console.log('options: ', options);

	const ref = useRef<HTMLDivElement>(null);

	const handleClosePopup = () => {
		if (!ref.current) return;

		closePopup(false);
		enableBodyScroll(ref.current);
	};

	return (
		<div
			ref={ref}
			className={cn(
				'fixed transition ease-out duration-500 w-full h-full top-0 left-0 z-10 translate-y-0 bg-white flex flex-col',
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
						{options?.map(option => (
							<Options
								key={option.id}
								title={option.titleUK}
								ingredients={option.ingredients}
							/>
						))}
					</div>
				</Container>
			</div>

			<div className='border-t border-gray-200 pb-6'>
				<Container>
					<div className='flex items-center justify-between py-4'>
						<p className='text-3xl font-semibold'>225 UAH</p>

						<Counter
							count={count}
							setCount={setCount}
							isPopupCounter={true}
						/>
					</div>

					<Button className='w-full text-lg'>
						Додати в кошик
					</Button>
				</Container>
			</div>
		</div>
	);
};