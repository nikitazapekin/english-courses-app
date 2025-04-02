import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';

interface AddWarningModalSliceTypes {
    isOpenAddWarningModal: boolean;
    selectedCourse: number;
    isOpenAddBanModal: boolean;
    isBanned: boolean
   // selectedCourse: number;
}

const initialState: AddWarningModalSliceTypes = {
    isOpenAddWarningModal: false,
    selectedCourse: 0,
    isOpenAddBanModal: false,
    isBanned: false
};

const AddWarningModalSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        setIsOpenAddWarningModal(state) {
            state.isOpenAddWarningModal = !state.isOpenAddWarningModal
        },


        setIsOpenBanModal(state) {
            state.isOpenAddBanModal = !state.isOpenAddBanModal
        },



        setSelectWarningCourse(state, action: PayloadAction<number>) {
            state.selectedCourse = action.payload;
        },



        setSelectBanCourse(state) {
            state.isOpenAddBanModal = !state.isOpenAddBanModal
            console.log("OPEN"  , state.isOpenAddBanModal)
        },


        setIsBanned(state, action: PayloadAction<{isBanned: boolean}>) {
state.isBanned = action.payload.isBanned
        }
       
    }
});

export const {
    setIsOpenAddWarningModal,
    setSelectWarningCourse,
    setSelectBanCourse,
    setIsOpenBanModal,
    setIsBanned
} = AddWarningModalSlice.actions;
export default AddWarningModalSlice.reducer; 

 