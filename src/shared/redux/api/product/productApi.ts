import { ProductWithRelations } from '@shared/model/types';

import { api } from '../api';

const productApi = api.injectEndpoints({
	endpoints: (build) => ({
		getProduct: build.query<ProductWithRelations[], number>({
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
