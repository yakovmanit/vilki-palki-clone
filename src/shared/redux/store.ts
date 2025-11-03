import { configureStore } from '@reduxjs/toolkit';
import categories from './slices/categorySlice';

import { api } from './api/api';

export const store = configureStore({
	reducer: {
		// Reducers
		categories,

		// Endpoints
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
