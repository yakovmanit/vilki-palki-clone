import { ExtendedCart } from '@shared/model/types';

import { api } from '../api';

const cartApi = api
	.injectEndpoints({
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

			deleteCartItem: build.mutation<void, { id: number }>({
				query: ({ id }) => ({
					url: `cart/${id}`,
					method: 'DELETE',
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
			deleteCartItem: {
				invalidatesTags: ['Cart'],
			},
		},
	});

export const {
	useGetCartQuery,
	useUpdateCartItemMutation,
	useDeleteCartItemMutation,
} = cartApi;
