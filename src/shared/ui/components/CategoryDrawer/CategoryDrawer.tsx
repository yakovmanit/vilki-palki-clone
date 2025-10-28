import React from 'react';

import Link from 'next/link';

import { cn } from '@shared/lib';
import { MenuArrowIcon } from '@shared/ui';

import { CategoryIcon } from '../../../../../public/assets/CategoryIcon';

type Props = {
	isCatsDrawerOpen: boolean;
	setIsCatsDrawerOpen: (isOpen: boolean) => void;
};

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
					<ul className='grid grid-cols-3 gap-2'>
						<li>
							<Link href='/category/1'>
								<div className='flex flex-col items-center'>
									<div>
										<CategoryIcon />
									</div>
									<p className='p-4 block text-white text-center'>
										Заморожені страви
									</p>
								</div>
							</Link>
						</li>
						<li>
							<Link href='/category/1'>
								<div className='flex flex-col items-center'>
									<div>
										<CategoryIcon />
									</div>
									<p className='p-4 block text-white text-center'>Ланчі</p>
								</div>
							</Link>
						</li>
						<li>
							<Link href='/category/1'>
								<div className='flex flex-col items-center'>
									<div>
										<CategoryIcon />
									</div>
									<p className='p-4 block text-white text-center'>Суши</p>
								</div>
							</Link>
						</li>
						<li>
							<Link href='/category/1'>
								<div className='flex flex-col items-center'>
									<div>
										<CategoryIcon />
									</div>
									<p className='p-4 block text-white text-center'>
										Основні блюда
									</p>
								</div>
							</Link>
						</li>
						<li>
							<Link href='/category/1'>
								<div className='flex flex-col items-center'>
									<div>
										<CategoryIcon />
									</div>
									<p className='p-4 block text-white text-center'>
										Бургери та шаурма
									</p>
								</div>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};
