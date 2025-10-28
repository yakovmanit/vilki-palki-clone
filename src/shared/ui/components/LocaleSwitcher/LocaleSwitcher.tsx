'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@shared/lib';

import { useLocale } from 'use-intl';
import { usePathname, useRouter } from '@shared/lib/i18n';
import { useLocalesWithoutCurrent } from './hooks/useLocalesWithoutCurrent';

interface Props {
  className?: string;
}

export const LocaleSwitcher: React.FC<Props> = () => {
	const [isLocaleSwitcherOpen, setIsLocaleSwitcherOpen] = useState(false);
	const localeRef = useRef<HTMLDivElement>(null);

	const currentLocale = useLocale();

	const localesWithoutCurrent = useLocalesWithoutCurrent();

	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (!localeRef.current) {
				return;
			}

			if (!e.composedPath().includes(localeRef.current)) {
				setIsLocaleSwitcherOpen(false);
			}
		}

		document.body.addEventListener('click', handleClickOutside);

		return () => {
			document.body.removeEventListener('click', handleClickOutside);
		}
	}, []);

	const switchLocale = (newLocale: string) => {
		if (newLocale !== currentLocale) {
			router.replace(pathname, { locale: newLocale });
			router.refresh();
		}
	};

  return (
		<div
			className='w-[54px] h-[54px]  text-custom-gray relative flex items-center justify-center group'
			onClick={() => setIsLocaleSwitcherOpen(!isLocaleSwitcherOpen)}
			ref={localeRef}
		>
			<div className='uppercase'>{currentLocale}</div>

			<div
				className={cn(
					'absolute top-full left-0 w-full bg-custom-pink text-white cursor-pointer group-hover:block hidden z-10',
					{
						'block': isLocaleSwitcherOpen
					}
				)}
			>
				{localesWithoutCurrent.map((loc) => (
					<button
						key={loc}
						className='top-full left-0 w-full h-[54px] cursor-pointer font-bold uppercase'
						onClick={() => switchLocale(loc)}
					>
						{loc}
					</button>
				))}
			</div>
		</div>
  );
};
