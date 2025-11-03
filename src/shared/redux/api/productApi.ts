import { Category } from '@prisma/client';

import { api } from './api';

const productApi = api.injectEndpoints({
	endpoints: (build) => ({
		getProduct: build.query<
			Category[],
			number
		>({
			query: (categoryId) => ({
				url: 'product',
				params: {
					categoryId: categoryId,
				},
			}),
		}),
	}),
});

export const { useGetProductQuery } = productApi;
