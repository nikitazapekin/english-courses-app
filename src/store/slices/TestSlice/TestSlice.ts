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
        name:  string,
        test_number:number;
        duration:  string,
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
        }



    },
});

export const {
    //setTutorPage, setTutor 

    setTest,
    setTests
} = TestSlice.actions;
export default TestSlice.reducer;

 