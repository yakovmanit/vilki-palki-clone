import { ProductWithRelations } from '@shared/model/types';

import { api } from '../api';

const productApi = api.injectEndpoints({
	endpoints: (build) => ({
		getProduct: build.query<ProductWithRelations[], { categorySlug: string, filterId?: number }>({
			query: ({ categorySlug, filterId }) => ({
				url: 'product',
				params: {
					categorySlug: categorySlug,
					filterId: filterId && filterId > 0 ? filterId : '',
				},
			}),
		}),
	}),
});

export const { useGetProductQuery } = productApi;
