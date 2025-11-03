import { createSlice } from '@reduxjs/toolkit';

interface CategoryIdState {
	activeCategoryId: number;
}

const initialState: CategoryIdState = {
	activeCategoryId: 1,
};

export const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		setCategoryId: (state, action) => {
			state.activeCategoryId = action.payload;
		},
	},
});

export const { setCategoryId } = categorySlice.actions;

export default categorySlice.reducer;
