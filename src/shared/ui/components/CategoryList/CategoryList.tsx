import React from 'react';

import Link from 'next/link';

import { cn } from '@shared/lib';

import { CategoryIcon } from '../../../../../public/assets/CategoryIcon';

interface Props {
	className?: string;
	isHomeElement?: boolean;
}

export const CategoryList: React.FC<Props> = ({ className, isHomeElement }) => {
	return (
		<ul className={cn('grid grid-cols-3 gap-2', className)}>
			{[...new Array(10)].map((_, i) => (
				<li key={i}>
					<Link href={`/category/${i}`}>
						<div className='flex flex-col items-center'>
							<div>
								<CategoryIcon strokeColor={isHomeElement ? '#000' : '#fff'} />
							</div>
							<p
								className={cn('p-4 block text-white text-center', {
									'text-black': isHomeElement,
								})}
							>
								Заморожені страви
							</p>
						</div>
					</Link>
				</li>
			))}
		</ul>
	);
};
