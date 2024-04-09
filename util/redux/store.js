import { combineReducers, configureStore } from '@reduxjs/toolkit';

import uiSlice from './reducers/ui';
import chatSlice from './reducers/chat';

const rootReducer = combineReducers({
	ui: uiSlice.reducer,
	chat: chatSlice.reducer,
});

export const makeStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};
