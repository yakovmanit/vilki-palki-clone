import { Filters } from '@/features/Filters';
import { ProductCardList } from '@entities/ProductCardList';
import { HeroSection } from './HeroSection';
import { CategorySection } from './CategorySection';

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
