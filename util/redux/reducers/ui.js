import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isOpen: true,
};

export const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		toggleIsOpen(state, action) {
			state.isOpen = !state.isOpen;
		},
	},
});

export const { toggleIsOpen } = uiSlice.actions;
export default uiSlice;
