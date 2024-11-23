import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//import { AppStatee, UserDataArray, SearchTypes } from '../types';

import { HomepageSliceTypes } from './types';
const initialState: HomepageSliceTypes = {
    isOpenBurger: false
};
const HomepageSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {

        /*
        setLoading(state, action: PayloadAction<boolean>) {
            console.log('LOOO', action.payload);
            state.isLoading = action.payload;
        },
        setLoadingUserData(state, action: PayloadAction<boolean>) {
            state.isLoadingUserData = action.payload;
        },
     
     */

        setOpenBurger(state, action: PayloadAction<boolean>) {
            console.log(action.payload)
            state.isOpenBurger = action.payload
        }
    },
});
export const {
    setOpenBurger
} = HomepageSlice.actions;
export default HomepageSlice.reducer; 