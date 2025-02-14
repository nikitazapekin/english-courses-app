import { RootState } from '../store';

export const HomepageSelector = (state: RootState) => {
    return state.HomepageSlice.isOpenBurger
	 
};