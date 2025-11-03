import { Filters } from '@/features/Filters';

import { ProductCardList } from '@entities/ProductCardList';

import { CategorySection } from './CategorySection';
import { HeroSection } from './HeroSection';

const HomePage = async () => {
	return (
		<main className='pb-100 pt-[54px]'>
			<HeroSection className='pb-9' />

			<CategorySection className='pb-9' />

			<Filters />

			<ProductCardList className='mt-11' />
		</main>
	);
};

export default HomePage;
