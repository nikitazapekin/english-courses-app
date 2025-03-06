import { createSlice, PayloadAction } from "@reduxjs/toolkit";

 interface Test {
   title_test: string,
    description: string,
    topics: String[],
    questions: Array<{

        title: string,
        answers: String[], 
        answer: string, 
url: string
    }>  
 
 }
interface TestSliceTypes {
    message: string;
test: Test

    loading: boolean;
    error: null | string;
    tutorPage: string;
}

const initialState: TestSliceTypes = {
    message: "",
   test: {
    title_test: "",
    description: "",
    topics:[],
    questions: [],
   },
    loading: false,
    error: null,
    tutorPage: "",
};

const TestSlice = createSlice({
    name: "tutor", 
    initialState,
    reducers: {
     /*    setTutor(state, action: PayloadAction<Partial<Tutor>>) {
            state.user = { ...state.user, ...action.payload }; 
        },
        setTutorPage(state, action: PayloadAction<{ page: string }>) {
            state.tutorPage = action.payload.page;
        }, */

        setTest(state, action:PayloadAction<Test>) {

        }
    },
});

export const { 
    //setTutorPage, setTutor 

setTest
} = TestSlice.actions;
export default TestSlice.reducer;

 



/* export const modalTest = [

    {id: 5, placeholder: "Введите название теста", title: "Название теста", type: "input", name: "title_test"},
    {id: 6, placeholder: "Введите описание теста", title: "Описание теста", type: "input", name: "description_test"},
    {id: 7, placeholder: "Добавьте темы теста", title: "Темы теста", type: "array", name: "topics"},
    {id: 1, placeholder: "Введите вопрос", title: "Вопрос теста", type: "input", name: "title"},
    {id: 2, placeholder: "Введите варианты ответов", title: "Ответы", type: "array", name: "answers"},
    {id: 3, placeholder: "Ответ", title: "Ответ", type: "input", name: "answer"},
    {id: 4, placeholder: "Изображение", title: "Изображение вопроса", type: "image", name: "url"},
] */