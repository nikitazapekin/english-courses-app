import { createSlice, PayloadAction } from '@reduxjs/toolkit';
 
interface Lesson {
     id: number,
     title: string,
     description: string,
     durability: string,
     video: String[],
     materials: String[]
 }

interface LessonsSliceTypes {
 lessons: Lesson[]
}

const initialState: LessonsSliceTypes = {

   lessons: []
};

const LessonsSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {

        setLessons(state, action: PayloadAction<Lesson[]>) {
state.lessons = action.payload
        }
     
    },
});

export const {
    setLessons
} = LessonsSlice.actions;
export default LessonsSlice.reducer;
