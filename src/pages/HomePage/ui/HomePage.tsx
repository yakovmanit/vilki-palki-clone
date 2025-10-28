import { CategorySection } from './CategorySection';
import { HeroSection } from './HeroSection';
import { Filters } from "@/features/Filters";

const HomePage = () => {

	return (
		<main className='pb-100'>
			<HeroSection className='pb-9' />

			<CategorySection className='pb-9' />

			<Filters />
		</main>
	);
};

export default HomePage;
