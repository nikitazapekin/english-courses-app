import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { ThunkAction, Action } from '@reduxjs/toolkit';
 
 
 
//import selectedElementsSlice from './slices/selectedElementsSlice';
 import HomepageSlice  from "./slices/Homepage.slice"
 import FormSlice from "./slices/Forms.slice"
 import ReplyToSlice from "./slices/ReplyTo.slice"
export const rootReducer = combineReducers({
    HomepageSlice: HomepageSlice,
    FormSlice: FormSlice,
    
ReplyToSlice: ReplyToSlice
});

export const store = configureStore({
	reducer: rootReducer,

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

 