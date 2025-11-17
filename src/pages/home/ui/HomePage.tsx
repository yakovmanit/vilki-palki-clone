'use client';

import { CategorySection } from './CategorySection';
import { HeroSection } from './HeroSection';
import { useState } from 'react';
import { useGetProductQuery } from '@shared/redux';
import { Filters } from '@features/filters';
import { ProductCardList } from '@entities/product-card-list';
import { CategoryFilter } from '@prisma/client';
import { Container } from '@shared/ui';

interface Props {
	categoryTitle: string;
	filters: CategoryFilter[];
}

const Home = ({ categoryTitle, filters }: Props) => {
	const [filterId, setFilterId] = useState(0);

	const { data: categoryProducts, isFetching: isCategoryProductsFetching } = useGetProductQuery({ categorySlug: 'popular', filterId: filterId });

	return (
		<>
			<HeroSection className='pb-9' />

			<CategorySection className='pb-9' />

			<Container>
				<Filters
					filterId={filterId}
					setFilterId={setFilterId}
					filters={filters}
					title={categoryTitle}
				/>

				<ProductCardList
					categoryProducts={categoryProducts}
					isCategoryProductsFetching={isCategoryProductsFetching}
					className='mt-11'
				/>
			</Container>
		</>
	);
};

export default Home;
