import { RootState } from '../store';

export const  AdminSelectorPage = (state: RootState) => {
    return state.AdminSlice.tutorPage
     
};

export const  AdminSelectorUser = (state: RootState) => {
    return state.AdminSlice.user
     
};
