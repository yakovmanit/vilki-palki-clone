import { useGetCategoryQuery } from '@shared/redux';

export const useCategoryItems = () => {
	const { data: allCategories, isLoading: isCategoriesLoading } =
		useGetCategoryQuery();

	const parentCategories = allCategories?.filter(
		(category) => !category.parentId,
	);

	const childCategories = allCategories?.filter(
		(category) => !category.parentId,
	);

	return {
		isCategoriesLoading,
		parentCategories,
		childCategories,
		allCategories,
	};
};
