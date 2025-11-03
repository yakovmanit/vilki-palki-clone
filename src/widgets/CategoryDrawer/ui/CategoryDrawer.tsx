'use client';

import React, { useRef, useState } from 'react';

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import { cn } from '@shared/lib';
import { MenuArrowIcon } from '@shared/ui';
import { CategoryList } from '@entities/CategoryList';


export const CategoryDrawer: React.FC = () => {
	const [isCatsDrawerOpen, setIsCatsDrawerOpen] = useState(false);

	const ref = useRef<HTMLDivElement>(null);

	const handleCatsDrawerOpen = () => {
		if (!ref.current) {
			return;
		}

		if (isCatsDrawerOpen) {
			enableBodyScroll(ref.current);
		} else {
			disableBodyScroll(ref.current);
		}

		setIsCatsDrawerOpen(!isCatsDrawerOpen);
	};

	return (
		<>
			{/* Cats Drawer Button */}
			<div
				ref={ref}
				onClick={() => handleCatsDrawerOpen()}
				className='flex items-center gap-2 transform -translate-x-2 cursor-pointer'
			>
				<p className='text-white uppercase font-bold text-lg'>Меню</p>

				<div
					className={cn('transition duration-300 ease-in-out', {
						'-rotate-180': isCatsDrawerOpen,
					})}
				>
					<MenuArrowIcon />
				</div>
			</div>

			{/* Cats Drawer  */}
			<div
				className={cn(
					'pb-20 bg-primary fixed z-10 top-[50px] right-0 w-full h-full overflow-y-auto transition duration-300 ease-in-out md:pb-0 md:h-fit',
					{
						'transform -translate-y-500': !isCatsDrawerOpen,
					},
				)}
			>
				{/* Cats Drawer Body */}
				<div className='pt-5 border-y border-gray-500'>
					<CategoryList />
				</div>
			</div>
		</>
	);
};
