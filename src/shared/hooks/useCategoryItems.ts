import { useGetCategoryQuery } from '@shared/redux';

export const useCategoryItems = () => {
	const { data: allCategories, isLoading: isCategoriesLoading } =
		useGetCategoryQuery();

	const parentCategories = allCategories?.filter(
		(category) => !category.parentCategoryId,
	);

	const childCategories = allCategories?.filter(
		(category) => !category.parentCategoryId,
	);

	return {
		isCategoriesLoading,
		parentCategories,
		childCategories,
		allCategories,
	};
};
