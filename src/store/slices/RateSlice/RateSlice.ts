import { createSlice, PayloadAction } from "@reduxjs/toolkit";

 
 

interface RateSliceTypes {
   isOpenRateModal: boolean
}

const initialState: RateSliceTypes = {
isOpenRateModal: false
};

const RateSlice = createSlice({
    name: "tutor", 
    initialState,
    reducers: {
      /*  setTutor(state, action: PayloadAction<Partial<Tutor>>) {
            state.user = { ...state.user, ...action.payload }; 
        },
        setTutorPage(state, action: PayloadAction<{ page: string }>) {
            state.tutorPage = action.payload.page;
        },
        */
       setOpenRate(state, action: PayloadAction<boolean>) {
        state.isOpenRateModal = action.payload
       }
    },
});

export const { setOpenRate } = RateSlice.actions;
export default RateSlice.reducer;

 