import React from 'react';
import { cn } from '@shared/lib';
import { CategoryList, MenuArrowIcon } from '@shared/ui';

interface Props {
	isCatsDrawerOpen: boolean;
	setIsCatsDrawerOpen: (isOpen: boolean) => void;
}

export const CategoryDrawer: React.FC<Props> = ({
	isCatsDrawerOpen,
	setIsCatsDrawerOpen,
}) => {
	return (
		<>
			{/* Cats Drawer Button */}
			<div
				onClick={() => setIsCatsDrawerOpen(!isCatsDrawerOpen)}
				className='flex items-center gap-2 transform -translate-x-2'
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
					'pb-20 bg-primary fixed z-10 top-[50px] right-0 w-full h-full overflow-y-auto transition duration-300 ease-in-out',
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
