import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface EditModalLessonsSliceTypes {

    isOpenEditLessonModal: boolean,
    lessonId: string,
    isOpenTestsModal: boolean,
    testId: string,
}

const initialState: EditModalLessonsSliceTypes = {

    isOpenEditLessonModal: false,
    lessonId: "",
    isOpenTestsModal: false,
    testId: ""
};

const EditModalLessonsSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        setIsOpenEditModalLessons(state, action: PayloadAction<{ lessonId: string }>) {
            state.isOpenEditLessonModal = !state.isOpenEditLessonModal
            state.lessonId = action.payload.lessonId
        },
        setIsOpenTestsModal(state, action: PayloadAction<{ testId: string }>) {
            state.isOpenTestsModal = !state.isOpenTestsModal
            state.testId = action.payload.testId
        }
    },
});

export const {
    setIsOpenEditModalLessons,
    setIsOpenTestsModal

} = EditModalLessonsSlice.actions;
export default EditModalLessonsSlice.reducer;
