// import { Filters } from '@/features/filters';
//
// import { ProductCardList } from '@entities/product-card-list';

import { CategorySection } from './CategorySection';
import { HeroSection } from './HeroSection';

const Home = async () => {
	return (
		<>
			<HeroSection className='pb-9' />

			<CategorySection className='pb-9' />

			{/*<Filters />*/}

			{/*<ProductCardList className='mt-11' />*/}
		</>
	);
};

export default Home;
