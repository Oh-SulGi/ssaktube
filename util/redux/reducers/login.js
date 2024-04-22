import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	needcheck: true,
	userid: null,
};

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setuserid(state, action) {
			state.userid = action.payload;
		},
		setneedcheck(state, action) {
			state.needcheck = action.payload;
		},
	},
});

export const { setuserid, setneedcheck } = loginSlice.actions;
export default loginSlice;
