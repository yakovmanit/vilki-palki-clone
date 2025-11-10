import { api } from '../api';
import { ExtendedCart } from '@shared/model/types';

const cartApi = api.injectEndpoints({
	endpoints: (build) => ({
		getCart: build.query<ExtendedCart, void>({
			query: () => ({
				url: 'cart',
			}),
		}),

		updateCartItem: build.mutation<void, { id: number; quantity: number }>({
			query: ({ id, quantity }) => ({
				url: `cart/${id}`,
				method: 'PATCH',
				body: { quantity },
			}),
		}),
	}),

	overrideExisting: false,
})
	.enhanceEndpoints({
		addTagTypes: ['Cart'],

		endpoints: {
			getCart: {
				providesTags: ['Cart'],
			},
			updateCartItem: {
				invalidatesTags: ['Cart'],
			},
		},
	});

export const { useGetCartQuery, useUpdateCartItemMutation } = cartApi;
