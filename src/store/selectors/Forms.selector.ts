import { RootState } from '../store';

export const formsSelector = (state: RootState) => {
    return state.FormSlice.countries
	 
};