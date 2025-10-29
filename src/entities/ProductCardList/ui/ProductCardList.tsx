import React from 'react';

import { ProductCard } from '@entities/ProductCard';
import { cn } from '@shared/lib';
import { Container } from '@shared/ui';

interface Props {
	className?: string;
}

export const ProductCardList: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('', className)}>
			<Container>
				<div className='grid grid-cols-2 gap-2'>
					{[...new Array(5)].map((_, i) => (
						<ProductCard key={i} />
					))}
				</div>
			</Container>
		</div>
	);
};
