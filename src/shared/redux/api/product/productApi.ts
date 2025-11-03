import { api } from '../api';
import { ProductWithRelations } from '@shared/model/types';

const productApi = api.injectEndpoints({
	endpoints: (build) => ({
		getProduct: build.query<
			ProductWithRelations[],
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
