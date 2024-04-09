import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	chatlog: [],
};

export const chatSlice = createSlice({
	name: 'chat',
	initialState,
	reducers: {
		addchat(state, action) {
			state.chatlog.push(action.payload);
		},
		rstchat(state, action) {
			state.chatlog = [];
		},
	},
});

export const { addchat, rstchat } = chatSlice.actions;
export default chatSlice;
