import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';




interface Achievement {
    logo: string,
    title: string,
    date: string,
    id?: number

}

interface AddAchievementSliceSliceTypes {
    message: string
    //   user: Admin,
    loading: boolean,
    error: null | string,
    isOpenModalAchievements: boolean,

    achievements: Achievement[],
    lastId: number
}

const initialState: AddAchievementSliceSliceTypes = {
    message: "",
    isOpenModalAchievements: false,

    loading: false,
    error: null,
    achievements: [],
    lastId: 0,


};
const AddAchievementSliceSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {


        setOpenModalAchievements(state) {
            state.isOpenModalAchievements = !state.isOpenModalAchievements
        },

        setAchievements(state, action: PayloadAction<Achievement[]>) {

            console.log("pay", action.payload)
            const achiv = action.payload.map((item, index) => {
                return { ...item, id: index }
            })
            console.log("ac", achiv)
            state.achievements = achiv
        },


        addAchievement(state, action: PayloadAction<Achievement>) {

        }

    },


});

export const {
    setOpenModalAchievements,
    setAchievements,
    addAchievement

} = AddAchievementSliceSlice.actions;
export default AddAchievementSliceSlice.reducer;
 