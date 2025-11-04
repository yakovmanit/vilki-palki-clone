'use client';

import React from 'react';
import { useSelector } from 'react-redux';

import { ProductCard } from '@entities/ProductCard';
import { cn } from '@shared/lib';
import { useGetProductQuery } from '@shared/redux/api/product/productApi';
import { RootState } from '@shared/redux/store';
import { Container } from '@shared/ui';

interface Props {
	className?: string;
}

export const ProductCardList: React.FC<Props> = ({ className }) => {
	const categoryId = useSelector(
		(state: RootState) => state.categories.activeCategoryId,
	);

	const { data: products, isLoading: isProductsLoading } =
		useGetProductQuery(categoryId);

	return (
		<div className={cn('', className)}>
			<Container>
				<div className='grid grid-cols-2 gap-2'>
					{isProductsLoading ? (
						// TODO: add Product Skeleton
						<>Products Loading...</>
					) : (
						products?.map((product) => (
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
					)}
				</div>
			</Container>
		</div>
	);
};
