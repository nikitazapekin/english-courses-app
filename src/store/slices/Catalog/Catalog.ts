import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';

interface CatalogSliceTypes {

    selectedType: string
}

const initialState: CatalogSliceTypes = {
    selectedType: ""
};
const CatalogSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {

        setType(state, action: PayloadAction<{ type: string }>) {
            state.selectedType = action.payload.type
        }


    },


});

export const {
    setType
} = CatalogSlice.actions;
export default CatalogSlice.reducer;
