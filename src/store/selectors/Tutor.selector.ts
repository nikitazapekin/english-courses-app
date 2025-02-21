import { RootState } from '../store';

export const TutorSelector = (state: RootState) => {
    return state.TutorSlice
     
};

export const TutorPageSelector = (state: RootState) => {
    return state.TutorSlice.tutorPage
}