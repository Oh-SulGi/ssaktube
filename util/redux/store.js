import { combineReducers, configureStore } from '@reduxjs/toolkit';

import uiSlice from './reducers/ui';

const rootReducer = combineReducers({
	ui: uiSlice.reducer,
});

export const makeStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};
