import { Category } from '@prisma/client';

import { api } from '../api';

const categoryApi = api.injectEndpoints({
	endpoints: (build) => ({
		getCategory: build.query<Category[], void>({
			query: () => ({
				url: 'category',
			}),
		}),
	}),
});

export const { useGetCategoryQuery } = categoryApi;
