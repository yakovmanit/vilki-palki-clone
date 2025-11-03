import React from 'react';

import { LocaleSwitcher } from '@features/LocaleSwitcher';
import { cn } from '@shared/lib';
import { MenuDrawer } from '@shared/ui';
import { CategoryDrawer } from '@widgets/CategoryDrawer';

interface Props {
	className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header
			className={cn(
				'bg-primary flex items-center justify-between fixed w-full z-20',
				className,
			)}
		>
			<MenuDrawer />

			<CategoryDrawer />

			<LocaleSwitcher />
		</header>
	);
};
