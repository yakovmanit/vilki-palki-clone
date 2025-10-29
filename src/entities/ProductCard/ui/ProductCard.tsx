'use client';

import React, { useRef, useState } from 'react';

import { disableBodyScroll } from 'body-scroll-lock';
import Image from 'next/image';

import { cn } from '@shared/lib';
import { Title } from '@shared/ui';

import { ProductOptionsPopup } from './ProductOptionsPopup';

interface Props {
	className?: string;
}

export const ProductCard: React.FC<Props> = ({ className }) => {
	const [count, setCount] = useState(1);
	const [isProductPopupOpen, setIsProductPopupOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

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
				isOpen={isProductPopupOpen}
				closePopup={setIsProductPopupOpen}
			/>

			<div>
				<Image
					src='https://vilki-palki.od.ua/storage/img-cache/500_500_1760547314піцазлимоном.jpg.webp'
					width={500}
					height={500}
					alt='Picture of the author'
				/>
			</div>

			<div className='p-2'>
				<Title
					className='font-semibold text-ellipsis whitespace-nowrap overflow-hidden'
					size='xs'
					text='Пiца з креветками'
				/>

				<p className='text-custom-gray text-sm mb-10'>Вага: 470г</p>

				<div className='flex justify-between items-center'>
					<span className='font-semibold'>250 UAH</span>

					{/* Counter */}
					<div className='flex items-center gap-2 border border-gray-300 w-fit rounded-lg'>
						<button
							onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : 1))}
							className='p-1'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								viewBox='0 0 24 24'
								fill='none'
								stroke='#99a1af'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='lucide lucide-minus-icon lucide-minus'
							>
								<path d='M5 12h14' />
							</svg>
						</button>

						<span className='text-xs font-semibold'>{count}</span>

						<button
							onClick={() => setCount((prev) => prev + 1)}
							className='p-1'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								viewBox='0 0 24 24'
								fill='none'
								stroke='#99a1af'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='lucide lucide-plus-icon lucide-plus'
							>
								<path d='M5 12h14' />
								<path d='M12 5v14' />
							</svg>
						</button>
					</div>
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
