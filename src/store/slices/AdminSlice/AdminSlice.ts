import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';


interface Admin {
    id: number,
    admin_id: number,
    email: string,
    role: string,
    banned_courses: [],
    banned_users: [],
    edited_courses: []
}
interface AdminSliceTypes {
    message: string
    user: Admin,
    loading: boolean,
    error: null | string,
    tutorPage: string,
}

const initialState: AdminSliceTypes = {
    message: "",
    user: {
        id:  0,
        admin_id: 0,
        email: "",
        role: "",
        banned_courses: [],
        banned_users: [],
        edited_courses: []
      
    },
    loading: false,
    error: null,
    tutorPage: ""
};
const AdminSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
       
        setAdmin(state, action: PayloadAction<Admin>) {
            state.user = action.payload
 
        },
        setAdminPage(state, action: PayloadAction<{ page: string }>) {
            state.tutorPage = action.payload.page
        }

    },


});

export const {  
setAdminPage,
    setAdmin
} = AdminSlice.actions;
export default AdminSlice.reducer;
 