import { createSlice, PayloadAction } from '@reduxjs/toolkit';
/* 
interface Course {
    id: number;
    course_id: number;
    author: string;
    title: string;
    description: string;
    course_for: String[];
    release_date: string;
    course_logo: string;
}
 */

interface Course {
   
    courses: {
        course: {
            id: number,
            course_id:number
            author: string,
        title: string,
        description: string,
        course_for: String[],
        release_date: string,
        course_logo:string,
    },
    tutor: {
        id: number,
        username:string,
        email: string,
        description: string,
        rate:string,
        specialization: string,
        english_level:string,
        full_description: string,
        avatar_base64: null
    }
    }
}
 


interface OpenFormSliceTypes {
    message: string;
    courses: Course;
    loading: boolean;
    error: null | string;
}

const initialState: OpenFormSliceTypes = {
    message: "",
    loading: false,
    courses: {
        course: {

            id: 0,
            course_id: 0,
        author: "",
        title: "",
        description: "",
        course_for: [],
        release_date: "",
        course_logo: "",
    }, 
    tutor: {

        id: 0,
        username:"",
    email: "",
    description:"",
    rate:"",
    specialization: "",
    english_level:"",
    full_description:"",
    avatar_base64: ""
}
    },

    error: null,
};

const OpenFormSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        setCourse(state, action: PayloadAction< Course>) {
            state.courses = action.payload;
        },
    },
});

export const { setCourse } = OpenFormSlice.actions;
export default OpenFormSlice.reducer;
