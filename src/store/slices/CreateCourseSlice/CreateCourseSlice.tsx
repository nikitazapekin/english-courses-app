import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';

interface Lessons {
    title: string;
    describtion: string;
    video: File[];
    materials: File[];
}
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
    isOpenModal: boolean,
    lessons: Lessons[]
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
    error: null,
    lessons: []
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
            console.log("STATE", state.isOpenModal)
        },
        setLessons(state, action: PayloadAction<Lessons>) {
            state.lessons.push(action.payload)
            console.log("LES", JSON.stringify(state.lessons))
        }
    },
});

export const {
    setForm,
    setOpenModal,
    setLessons
    // setPerson
} = CreateFormSlice.actions;
export default CreateFormSlice.reducer;
