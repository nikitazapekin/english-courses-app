import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';



interface Courses {

    id: number,
    author: string,
    title: string,
    description: string,
    course_for: String[],
    release_date: string,
    course_logo: string


}
interface CoursesSliceTypes {
    message: string,
    courses: Courses[],
    query: string
}


const initialState: CoursesSliceTypes = {
    message: "",
    courses: [],
    query: ""

};
const CoursesSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {

        setCourses(state, action: PayloadAction<Courses[]>) {
            state.courses = action.payload
        },
        setSearchQueryCourses(state, action: PayloadAction<string>) {   
            state.query = action.payload
        }

    },
});

export const {
    setCourses,
    setSearchQueryCourses


} = CoursesSlice.actions;
export default CoursesSlice.reducer;
