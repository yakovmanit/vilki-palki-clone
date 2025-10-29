import { Filters } from '@/features/Filters';

import { ProductCardList } from '@entities/ProductCardList';

import { CategorySection } from './CategorySection';
import { HeroSection } from './HeroSection';

const HomePage = () => {
	return (
		<main className='pb-100'>
			<HeroSection className='pb-9' />

			<CategorySection className='pb-9' />

			<Filters />

			<ProductCardList className='mt-11' />
		</main>
	);
};

export default HomePage;
