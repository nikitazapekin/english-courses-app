import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';

interface AddWarningModalSliceTypes {
    isOpenAddWarningModal: boolean;
    selectedCourse: number;
    isOpenAddBanModal: boolean;
   // selectedCourse: number;
}

const initialState: AddWarningModalSliceTypes = {
    isOpenAddWarningModal: false,
    selectedCourse: 0,
    isOpenAddBanModal: false
};

const AddWarningModalSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        setIsOpenAddWarningModal(state) {
            state.isOpenAddWarningModal = !state.isOpenAddWarningModal
        },
        setSelectWarningCourse(state, action: PayloadAction<number>) {
            state.selectedCourse = action.payload;
        },



        setSelectBanCourse(state) {
            state.isOpenAddBanModal = !state.isOpenAddBanModal
            console.log("OPEN"  , state.isOpenAddBanModal)
        },
       
    }
});

export const {
    setIsOpenAddWarningModal,
    setSelectWarningCourse,
    setSelectBanCourse
} = AddWarningModalSlice.actions;
export default AddWarningModalSlice.reducer; 

 