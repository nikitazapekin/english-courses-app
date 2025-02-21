import { RootState } from '../store';

export const CreateCourseSelector = (state: RootState) => {
    return state.CreateFormSlice
     
};


export const isOpenModalCreateLessonSelector = (state: RootState) => {
    return state.CreateFormSlice.isOpenModal
     
};