import React from 'react';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { cn } from '@shared/lib';
import { Button, CloseIcon, LogoIcon, Title } from '@shared/ui';

interface Props {
	isMenuDrawerOpen: boolean;
	setIsMenuDrawerOpen: (isOpen: boolean) => void;
}

export const MenuDrawer: React.FC<Props> = ({
	isMenuDrawerOpen,
	setIsMenuDrawerOpen,
}) => {
	const t = useTranslations('general');

	return (
		<>
			{/* Menu burger */}
			<div
				onClick={() => setIsMenuDrawerOpen(true)}
				className='-translate-x-13'
			>
				<LogoIcon className='fill-gray-500' />
			</div>

			{/* Menu Drawer */}
			<div
				className={cn(
					'pb-20 bg-white fixed z-20 top-0 right-0 w-full h-full overflow-y-auto transition duration-300 ease-in-out',
					{
						'transform -translate-x-full': !isMenuDrawerOpen,
					},
				)}
			>
				{/* Menu Drawer Header */}
				<div className='bg-[#000c26] text-white flex items-center pr-4'>
					<Link href='/' className='flex items-center'>
						<LogoIcon className='fill-white' />

						<p className='ml-3 uppercase font-bold text-xl'>Вилки палки</p>
					</Link>

					<div onClick={() => setIsMenuDrawerOpen(false)} className='ml-auto'>
						<CloseIcon />
					</div>
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
