import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { ThunkAction, Action } from '@reduxjs/toolkit';
 
 
 
//import selectedElementsSlice from './slices/selectedElementsSlice';
 import HomepageSlice  from "./slices/Homepage.slice"
export const rootReducer = combineReducers({
    HomepageSlice: HomepageSlice
/*	appSlice: appSlice,
	selectedElementsSlice: selectedElementsSlice,
	[githubApi.reducerPath]: githubApi.reducer,
	[usersGithubApi.reducerPath]: usersGithubApi.reducer,
    */
});

export const store = configureStore({
	reducer: rootReducer,

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

 