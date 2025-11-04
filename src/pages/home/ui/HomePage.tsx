import { Filters } from '@/features/filters';

import { ProductCardList } from '@entities/product-card-list';

import { CategorySection } from './CategorySection';
import { HeroSection } from './HeroSection';

const Home = async () => {
	return (
		<main className='pb-100 pt-[54px]'>
			<HeroSection className='pb-9' />

			<CategorySection className='pb-9' />

			<Filters />

			<ProductCardList className='mt-11' />
		</main>
	);
};

export default Home;
