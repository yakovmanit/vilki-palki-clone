'use client';

import React, { useRef } from 'react';

import { enableBodyScroll } from 'body-scroll-lock';

import { cn } from '@shared/lib';
import { CloseIcon, Container, Title } from '@shared/ui';

import { Options } from './Options';

interface Props {
	isOpen: boolean;
	closePopup: (value: boolean) => void;
	className?: string;
}

export const ProductOptionsPopup: React.FC<Props> = ({
	className,
	isOpen,
	closePopup,
}) => {
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
				'fixed transition ease-out duration-500 w-full h-full top-0 left-0 z-10 translate-y-0 bg-white pt-[54px]',
				className,
				{
					'translate-y-full': !isOpen,
				},
			)}
		>
			<Container>
				<div className='mt-4 flex justify-between gap-4'>
					<Title text='Шаурма класична' className='font-medium' />

					<button
						className='rounded-full border border-gray-300 p-2 h-fit'
						onClick={() => handleClosePopup()}
					>
						<CloseIcon className='stroke-gray-300' />
					</button>
				</div>

				{/* Options */}
				<Options title='Додатково' />
				<Options title='Прибрати зі страви' />
				<Options title='Зробити гостріше' />
			</Container>
		</div>
	);
};
