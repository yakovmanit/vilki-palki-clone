import {api} from "./api";
import { Category } from '@prisma/client';

const categoryApi = api
	.injectEndpoints({
		endpoints: (build) => ({
			getCategory: build.query<
				Category[],
				void
			>({
				query: () => ({
					url: 'category',
				}),
			}),
		}),
	});

export const {
	useGetCategoryQuery,
} = categoryApi;