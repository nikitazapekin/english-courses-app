import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';

interface Tutor {
    id:number
    id_author: number | null,
    username: string,
    email:string,
    description: string,
    rate:string,
    specialization:string,
    english_level: string,
    full_description: string,
    role: string,
}
interface TutorSliceTypes {
    message: string
    user: Tutor,
    loading: boolean,
    error: null | string,
    tutorPage: string,
}
const initialState: TutorSliceTypes = {
    message: "",
    user: {
        id: 0,
        id_author: 0,
        username: "",
        email: "",
       
        description: "",
        rate: "",
        specialization: "",
        english_level: "",
        full_description:  "",
        role: "",
    },
    loading: false,
    error: null,
    tutorPage: ""
};
const TutorSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
       
        setTutor(state, action: PayloadAction<Tutor>) {
            state.user = action.payload
 
        },
        setTutorPage(state, action: PayloadAction<{ page: string }>) {
            state.tutorPage = action.payload.page
        }

    },


});

export const {  
setTutorPage,
    setTutor
} = TutorSlice.actions;
export default TutorSlice.reducer;
 