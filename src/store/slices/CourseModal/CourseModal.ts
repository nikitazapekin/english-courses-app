import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';



 
interface CoursesSliceTypes {
    isOpenModal: boolean
}


const initialState: CoursesSliceTypes = {
  isOpenModal: false

};
const CourseModalSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {

      setOpenCourseModal(state) {
         state.isOpenModal = !state.isOpenModal
        },
    

    },
});

export const {
 setOpenCourseModal

} = CourseModalSlice.actions;
export default CourseModalSlice.reducer;
