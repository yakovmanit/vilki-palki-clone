import React from 'react';
import { cn } from '@shared/lib';
import { Container } from '@shared/ui';
import { ProductWithRelations } from '@shared/model/types';
import { ProductCard } from '@entities/product-card';

interface Props {
	categoryProducts?: ProductWithRelations[];
	isCategoryProductsFetching: boolean;
	className?: string;
}

export const ProductCardList: React.FC<Props> = ({ className, categoryProducts, isCategoryProductsFetching }) => {

	return (
		<div className={cn('', className)}>
			<Container>
				<div className='grid grid-cols-2 gap-2'>
					{/* TODO: add beautiful skeleton */}
					{
						isCategoryProductsFetching ? (
							<div>Loading...</div>
						) : (
							categoryProducts?.map((product) =>
								<ProductCard
									key={product.id}
									id={product.id}
									titleUK={product.titleUK}
									titleEN={product.titleEN}
									price={product.price}
									slug={product.slug}
									weight={product.weight}
									imageUrl={product.imageUrl}
									ingredients={product.ingredients}
									options={product.options}
								/>
							)
						)
					}
				</div>
			</Container>
		</div>
	);
};
