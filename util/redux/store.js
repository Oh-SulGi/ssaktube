import { combineReducers, configureStore } from '@reduxjs/toolkit';

import uiSlice from './reducers/ui';
import chatSlice from './reducers/chat';
import loginSlice from './reducers/login';

const rootReducer = combineReducers({
	ui: uiSlice.reducer,
	chat: chatSlice.reducer,
	login: loginSlice.reducer,
});

export const makeStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};
