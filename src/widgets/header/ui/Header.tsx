import React from 'react';

import { LocaleSwitcher } from '@features/locale-switcher';
import { cn } from '@shared/lib';
import { MenuDrawer } from '@shared/ui';
import { CategoryDrawer } from '@widgets/category-drawer';

interface Props {
	className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header
			className={cn(
				'bg-primary flex items-center justify-between fixed top-0 left-0 w-full z-50',
				className,
			)}
		>
			<MenuDrawer />

			<CategoryDrawer />

			<LocaleSwitcher />
		</header>
	);
};
