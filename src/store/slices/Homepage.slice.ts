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