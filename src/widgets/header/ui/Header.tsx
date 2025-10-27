'use client';

import React, { useState } from 'react';

import { cn } from '@shared/lib';
import { CategoryDrawer, MenuDrawer } from '@shared/ui';

interface Props {
	className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
	const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);
	const [isCatsDrawerOpen, setIsCatsDrawerOpen] = useState(false);

	return (
		<header
			className={cn(
				'bg-primary pr-4 flex items-center justify-between',
				className,
			)}
		>
			<MenuDrawer
				isMenuDrawerOpen={isMenuDrawerOpen}
				setIsMenuDrawerOpen={setIsMenuDrawerOpen}
			/>

			<CategoryDrawer
				isCatsDrawerOpen={isCatsDrawerOpen}
				setIsCatsDrawerOpen={setIsCatsDrawerOpen}
			/>

			{/* Lang switcher */}
			<div className='text-custom-gray'>
				<span>UA</span>
			</div>
		</header>
	);
};
