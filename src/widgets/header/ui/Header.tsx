'use client';

import React, { useState } from 'react';

import { LocaleSwitcher } from '@features/LocaleSwitcher';
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
				'bg-primary flex items-center justify-between fixed w-full z-20',
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

			<LocaleSwitcher />
		</header>
	);
};
