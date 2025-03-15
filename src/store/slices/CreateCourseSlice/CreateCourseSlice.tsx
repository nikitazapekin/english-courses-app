import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';


interface FormDataTests {
    title: string;
    answers: string[];
    answer: string;
    url: string;
}



interface Lessons {
    title: string;
    describtion: string;
    video: File[];
    materials: File[];
}
interface FormProps {
 
    name: string;
    description: string;
    for: string;
    logo: string;
    course_for: String[],
    fulldescription: string,
    for_what_reasons: String[],
    about_course: String[],
    tag: string,
}

interface CreateFormSliceTypes {
    message: string
    form: FormProps
    loading: boolean,
    error: null | string,
    isOpenModal: boolean,
    lessons: Lessons[],
    openModalType: string,
  //  tests: FormDataTests[],
  test: {
    title: string, 
    description: string,
    tests: FormDataTests[],
  },
    tutorPage: string,
}


const initialState: CreateFormSliceTypes = {
    message: "",
    form: {
        name: "",
        description: "",
        for: "",
        logo: "",
        course_for: [],
        fulldescription: "",
        for_what_reasons: [],
        about_course: [],
        tag:"",
    },
    loading: false,
    isOpenModal: false,
    error: null,
    lessons: [],
    openModalType: "",
  //  tests: [],
  test: {
    title: "", 
    description: "",
    tests: [],
  },
    tutorPage: ""
};
const CreateFormSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {

        setForm(state, action: PayloadAction<FormProps>) {
            state.form = action.payload
         //   console.log(state.form)
        },
        setOpenModal(state, action: PayloadAction<{ type: string }>) {
            state.isOpenModal = !state.isOpenModal
       //     console.log("STATE", state.isOpenModal)
            state.openModalType = action.payload.type
        },
        setLessons(state, action: PayloadAction<Lessons>) {
            state.lessons.push(action.payload)
            console.log("LES", JSON.stringify(state.lessons))
        },
        setTests(state, action: PayloadAction<FormDataTests>) {
         //   state.tests.push(action.payload)
        },
      
    },
});

export const {
    setForm,
    setOpenModal,
    setLessons,
    setTests,
   // setTutorPage
    // setPerson
} = CreateFormSlice.actions;
export default CreateFormSlice.reducer;
