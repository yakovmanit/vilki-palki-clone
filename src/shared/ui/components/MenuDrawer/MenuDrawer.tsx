'use client';

import React, { useRef } from 'react';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { cn } from '@shared/lib';
import { Button, CloseIcon, LogoIcon, Title } from '@shared/ui';

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

interface Props {
	isMenuDrawerOpen: boolean;
	setIsMenuDrawerOpen: (isOpen: boolean) => void;
}

export const MenuDrawer: React.FC<Props> = ({
	isMenuDrawerOpen,
	setIsMenuDrawerOpen,
}) => {
	const t = useTranslations('general');

	const ref = useRef<HTMLDivElement>(null);

	const handleMenuDrawerOpen = () => {
		if (!ref.current) return;

		setIsMenuDrawerOpen(true);
		disableBodyScroll(ref.current);
	}

	const handleMenuDrawerClose = () => {
		if (!ref.current) return;

		setIsMenuDrawerOpen(false);
		enableBodyScroll(ref.current);
	}

	return (
		<>
			{/* Menu burger */}
			<div
				onClick={() => handleMenuDrawerOpen()}
				onMouseEnter={() => handleMenuDrawerOpen()}
				ref={ref}
				className='-translate-x-13'
			>
				<LogoIcon className='fill-gray-500' />
			</div>

			<div
				className={
					cn('fixed w-full h-full z-10 top-0 left-0 bg-black opacity-50 transition duration-300',
						{
							'opacity-0 -z-10 pointer-events-none': !isMenuDrawerOpen,
						})
				}
				onMouseEnter={() => handleMenuDrawerClose()}
			/>

			{/* Menu Drawer */}
			<div
				className={cn(
					'pb-20 bg-white fixed z-20 top-0 left-0 w-full h-full overflow-y-auto transition duration-300 ease-in-out md:w-[500px]',
					{
						'transform -translate-x-full': !isMenuDrawerOpen,
					},
				)}
			>
				{/* Menu Drawer Header */}
				<div className='bg-[#000c26] text-white flex items-center pr-2'>
					<Link href='/' className='flex items-center'>
						<LogoIcon className='fill-white' />

						<p className='ml-3 uppercase font-bold text-xl'>Вилки палки</p>
					</Link>

					<button onClick={() => handleMenuDrawerClose()} className='ml-auto cursor-pointer p-2'>
						<CloseIcon />
					</button>
				</div>

				{/* Menu Drawer Body */}
				<div>
					<div className='px-6 py-10 border-b border-gray-100'>
						<Title className='mb-6' text='Авторизація' size='lg' />

						<p className='mb-6 text-custom-gray'>
							Зареєструйся і отримуй кешбек на бонусний рахунок. За допомогою
							бонусів можна частково або повністю розрахуватися за замовлення.
						</p>

						<Button variant='pink'>{t('signin')}</Button>
					</div>

					<nav className='px-6 py-10'>
						<ul className='flex flex-col gap-6 text-custom-gray'>
							<li>
								<Link href='/'>Головна</Link>
							</li>
							<li>
								<Link href='/'>Контакти</Link>
							</li>
							<li>
								<Link href='/'>Про нас</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</>
	);
};
