import React from 'react';
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
					{/*{products?.map((product) =>*/}
					{/*	<ProductCard*/}
					{/*		key={product.id}*/}
					{/*		id={product.id}*/}
					{/*		titleUK={product.titleUK}*/}
					{/*		titleEN={product.titleEN}*/}
					{/*		price={product.price}*/}
					{/*		slug={product.slug}*/}
					{/*		weight={product.weight}*/}
					{/*		imageUrl={product.imageUrl}*/}
					{/*		ingredients={product.ingredients}*/}
					{/*		options={product.options}*/}
					{/*	/>*/}
					{/*)}*/}
				</div>
			</Container>
		</div>
	);
};
