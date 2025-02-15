import { RootState } from '../store';

export const PersonalSelector = (state: RootState) => {
    return state.PersonalSlice.user

};