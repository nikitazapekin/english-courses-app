import { RootState } from '../store';

export const HomepageSelector = (state: RootState) => {
    return state.HomepageSlice.isOpenBurger
	//const appSlice = state.HomepageSlice || {};
//	return appSlice.params || { query: '', offset: 1, limit: 10, storedValue: '' };
};