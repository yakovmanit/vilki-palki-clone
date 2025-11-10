import { api } from '../api';
import { ExtendedCart } from '@shared/model/types';

const cartApi = api.injectEndpoints({
	endpoints: (build) => ({
		getCart: build.query<ExtendedCart, void>({
			query: () => ({
				url: 'cart',
			}),
		}),
	}),
});

export const { useGetCartQuery } = cartApi;
