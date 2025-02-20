import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';


interface FormProps {
    name: string,
    describtion: string,
    for: string,
    logo: string
}

interface CreateFormSliceTypes {
    message: string
    form: FormProps
    loading: boolean,
    error: null | string,
    isOpenModal: boolean
}


const initialState: CreateFormSliceTypes = {
    message: "",
    form: {
        name: "",
        describtion: "",
        for: "",
        logo: ""
    },
    loading: false,
    isOpenModal: false,
    error: null
};
const CreateFormSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {

        setForm(state, action: PayloadAction<FormProps>) {
            state.form = action.payload
            console.log(state.form)
        },
        setOpenModal(state) {
            state.isOpenModal = !state.isOpenModal
        }
    },
});

export const {
    setForm,
    setOpenModal
    // setPerson
} = CreateFormSlice.actions;
export default CreateFormSlice.reducer;
