import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isOpen: true,
	isLogin: false,
	userTab: '',
};

export const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		toggleIsOpen(state, action) {
			state.isOpen = !state.isOpen;
		},
		setISLogin(state, action) {
			state.isLogin = action.payload;
		},
		setUserTab(state, action) {
			state.userTab = action.payload;
		},
	},
});

export const { toggleIsOpen, setISLogin, setUserTab } = uiSlice.actions;
export default uiSlice;
