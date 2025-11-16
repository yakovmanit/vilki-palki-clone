import { Filters } from '@features/filters';
import { ProductCardList } from '@entities/product-card-list';
import { ProductWithRelations } from '@shared/model/types';

interface Props {
	categoryTitle: string;
	allCategoryProducts: ProductWithRelations[];
}

const Category = async ({ categoryTitle, allCategoryProducts }: Props) => {
	return (
		<>
			<Filters title={categoryTitle} />

			<ProductCardList className='mt-11' products={allCategoryProducts} />
		</>
	);
};

export default Category;
