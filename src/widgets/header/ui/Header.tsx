'use client';

import React, { useState } from 'react';

import { cn } from '@shared/lib';
import { LogoIcon, MenuDrawer } from '@shared/ui';

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

			<MenuDrawer
				isMenuDrawerOpen={isMenuDrawerOpen}
				setIsMenuDrawerOpen={setIsMenuDrawerOpen}
			/>

			{/* Cats drawer */}
			<div></div>

			{/* Lang switcher */}
			<div></div>
		</header>
	);
};
