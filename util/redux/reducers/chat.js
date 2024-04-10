import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	chatlog: [],
	isChatOpen: true,
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
		toggleIsChatOpen(state, action) {
			state.isChatOpen = !state.isChatOpen;
		},
	},
});

export const { addchat, rstchat, toggleIsChatOpen } = chatSlice.actions;
export default chatSlice;
