import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';
 

 
interface AddAchievementSliceSliceTypes {
    message: string
 //   user: Admin,
    loading: boolean,
    error: null | string,
 isOpenModalAchievements: boolean
}

const initialState: AddAchievementSliceSliceTypes = {
    message: "",
    isOpenModalAchievements: false,
  
    loading: false,
    error: null,
   
};
const AddAchievementSliceSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
       

        setOpenModalAchievements(state) {
            state.isOpenModalAchievements = !state.isOpenModalAchievements
        }
   /*      setAdmin(state, action: PayloadAction<Admin>) {
            state.user = action.payload
 
        },
        setAdminPage(state, action: PayloadAction<{ page: string }>) {
            state.tutorPage = action.payload.page
        }
 */
    },


});

export const {  
    setOpenModalAchievements
//setAdminPage,
  //  setAdmin
} = AddAchievementSliceSlice.actions;
export default AddAchievementSliceSlice.reducer;
 