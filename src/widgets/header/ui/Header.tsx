'use client';

import React, { useState } from 'react';

import { cn } from '@shared/lib';
import {
	Button,
	CloseIcon,
	LogoIcon,
} from '@shared/ui';
import Link from 'next/link';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
	const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(true);
	
  return (
		<header className={cn('bg-[#000c26] py-4', className)}>
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
					'bg-white',
					isMenuDrawerOpen ? 'block' : 'hidden',
				)}
			>
				{/* Menu Drawer Header */}
				<div className='bg-[#000c26] text-white flex items-center pr-4'>
					<Link href='/'>
						<LogoIcon />

						<p className='ml-3 uppercase font-bold text-xl'>Вилки палки</p>
					</Link>

					<div
						onClick={() => setIsMenuDrawerOpen(false)}
						className='ml-auto'
					>
						<CloseIcon />
					</div>
				</div>

				{/* Menu Drawer Body */}
				<div>
					<h2>
						Авторизація
					</h2>

					<p>
						Зареєструйся і отримуй кешбек на бонусний рахунок. За допомогою бонусів можна частково або повністю розрахуватися за замовлення.
					</p>

					<Button variant='default'>
						Вхід
					</Button>

					<nav>
						<ul>
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

			{/* Menu drawer */}
			<div></div>

			{/* Lang switcher */}
			<div></div>
		</header>
	);
};
