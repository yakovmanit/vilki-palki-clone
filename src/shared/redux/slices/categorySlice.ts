import { createSlice } from '@reduxjs/toolkit';

interface CategoryIdState {
	activeCategoryId: number;
}

const initialState: CategoryIdState = {
	activeCategoryId: 1,
}

export const authSlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		setCategoryId: (state, action) => {
			state.activeCategoryId = action.payload;
		},
	},
});

export default authSlice.reducer;