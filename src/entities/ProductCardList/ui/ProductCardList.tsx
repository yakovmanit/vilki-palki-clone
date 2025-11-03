'use client';

import React from 'react';

import { ProductCard } from '@entities/ProductCard';
import { cn } from '@shared/lib';
import { Container } from '@shared/ui';
import { useGetProductQuery } from '@shared/redux/api/product/productApi';
import { useSelector } from 'react-redux';
import { RootState } from '@shared/redux/store';

interface Props {
	className?: string;
}

export const ProductCardList: React.FC<Props> = ({ className }) => {
	const categoryId = useSelector((state: RootState) => state.categories.activeCategoryId);

	const { data: products, isLoading: isProductsLoading } = useGetProductQuery(categoryId);

	return (
		<div className={cn('', className)}>
			<Container>
				<div className='grid grid-cols-2 gap-2'>
					{
						isProductsLoading ? (
							// TODO: add Product Skeleton
							<>Products Loading...</>
						) : (
							products?.map(product => (
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
							))
						)
					}
				</div>
			</Container>
		</div>
	);
};
