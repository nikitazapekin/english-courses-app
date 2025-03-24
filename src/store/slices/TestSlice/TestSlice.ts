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

interface Tests {


    id: number;
    name: string,
    test_number: number;
    duration: string,
    description: string,
    topics: String[],
    course_id: number;

}


interface TestSliceTypes {
    message: string;
    test: Test

    loading: boolean;
    error: null | string;
    tutorPage: string;
    tests: Tests[]
}

interface Question {
    id?: number;
    question: string;
    answers: string[];
    correct_answer: string;
    question_image: string | null;
}

interface TestFormData {
    title: string;
    duration: string;
    description: string;
    topics: string[];
    questions: Question[];
}
const initialState: TestSliceTypes = {
    message: "",
    test: {
        title_test: "",
        description: "",
        topics: [],
        questions: [],
    },
    loading: false,
    error: null,
    tutorPage: "",
    tests: []
};

const TestSlice = createSlice({
    name: "tutor",
    initialState,
    reducers: {


        setTest(state, action: PayloadAction<Test>) {
            state.test = action.payload
        },
        setTests(state, action: PayloadAction<Tests[]>) {
            state.tests = action.payload
        },
        deleteTest(state, action: PayloadAction<{ id: number }>) {
            state.tests = state.tests.filter(test => test.id !== action.payload.id)
        },

        editTest(state, action: PayloadAction<{ id: number, updatedTest: TestFormData }>) {
            const index = state.tests.findIndex(test => test.id === action.payload.id);
            if (index !== -1) {
                state.tests[index] = {
                    ...state.tests[index],
                    name: action.payload.updatedTest.title,
                    duration: action.payload.updatedTest.duration,
                    description: action.payload.updatedTest.description,
                    topics: action.payload.updatedTest.topics,

                };
            }
        },

        addTest(state, action: PayloadAction<{ test: Test }>) {
            const newTest: Tests = {
                id: Date.now(), 
                name: action.payload.test.title_test,
                test_number: state.tests.length + 1,  
                duration: "30:00",  
                description: action.payload.test.description,
                topics: action.payload.test.topics,
                course_id: 1,  
            };
            state.tests.push(newTest);
        }


       /*  addTest(state, action: PayloadAction<{ test: Test }>) {
         
        } */

    },
});

export const {

    setTest,
    setTests,
    deleteTest,
    editTest,
    addTest

} = TestSlice.actions;
export default TestSlice.reducer;

