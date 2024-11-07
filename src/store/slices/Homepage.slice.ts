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
/*
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppStatee, UserDataArray, SearchTypes } from '../types';
const initialState: AppStatee = {
    isLoading: false,
    error: null,
    isLoadingUserData: false,
    users: [],
    params: {
        limit: 10,
        offset: 1,
        query: '',
        storedValue: '',
    },
};
const appSlicee = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            console.log('LOOO', action.payload);
            state.isLoading = action.payload;
        },
        setLoadingUserData(state, action: PayloadAction<boolean>) {
            state.isLoadingUserData = action.payload;
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        },

        setSearchParamsURL(state, action: PayloadAction<SearchTypes>) {
            state.params.query = action.payload.query;
            state.params.offset = action.payload.offset;
        },
        setFirstPage(state) {
            state.params.offset = 1;
        },
        setNextPage(state) {
            state.params.offset = state.params.offset + 1;
        },
        setPrevPage(state) {
            state.params.offset = state.params.offset - 1;
        },
        setQueryPage(state, action: PayloadAction<string>) {
            state.params.query = action.payload;
        },
        setUsers(state, action: PayloadAction<UserDataArray>) {
            state.users = action.payload;
        },
        setStoredInLocalStorageQuery(state, action: PayloadAction<string>) {
            state.params.storedValue = action.payload;
            state.params.query = action.payload;
        },
    },
});
export const {
    setLoading,
    setError,
    setLoadingUserData,
    setSearchParamsURL,
    setNextPage,
    setPrevPage,
    setQueryPage,
    setUsers,
    setFirstPage,
    setStoredInLocalStorageQuery,
} = appSlicee.actions;
export default appSlicee.reducer;
*/