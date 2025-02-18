import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';

interface User {
    id: number,
    email: string,
    auth_date: string,
    user_id: number,
    courses: string,
    phone: string,
    country: string,
    city: string,
    role: string,
    username: string,
    describtion: string | null | "Добавьте описание..."
}
interface PersonalSliceTypes {
    message: string
    user: User,
    loading: boolean,
    error: null | string
}
const initialState: PersonalSliceTypes = {
    message: "",
    user: {
        id: 0,
        email: "",
        auth_date: "",
        user_id: 0,
        courses: "",
        phone: "",
        country: "",
        city: "",
        role: "",
        username: "",
        describtion:  "Добавьте описание..."
    },
    loading: false,
    error: null
};
const PersonalSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
       
        setPerson(state, action: PayloadAction<User>) {
            state.user = action.payload

            console.log(state.user)
        }

    },


});

export const {  

    setPerson
} = PersonalSlice.actions;
export default PersonalSlice.reducer;
 