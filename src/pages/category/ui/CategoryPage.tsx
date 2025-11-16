import { Filters } from '@features/filters';
import { ProductCardList } from '@entities/product-card-list';
import { ProductWithRelations } from '@shared/model/types';
import { CategoryFilter } from '@prisma/client';

interface Props {
	categoryTitle: string;
	allCategoryProducts: ProductWithRelations[];
	filters: CategoryFilter[];
}

const Category = async ({ categoryTitle, allCategoryProducts, filters }: Props) => {
	return (
		<>
			<Filters
				filters={filters}
				title={categoryTitle}
			/>

			<ProductCardList className='mt-11' products={allCategoryProducts} />
		</>
	);
};

export default Category;
