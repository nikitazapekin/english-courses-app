import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Lesson {
    id: number,
    title: string,
    description: string,
    durability: string,
 
  /*   video: File[];
    materials: File[];  */

    video: string[];  // Changed from File[] to string[]
    materials: string[]; 

}

interface LessonsSliceTypes {
    lessons: Lesson[]
}



interface LessonFormData {
    title: string;
    description: string;
    durability: string;
    video: string[];  // Changed from File[] to string[]
    materials: string[]; 
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
        },
   
   
        addLesson(state, action: PayloadAction<Lesson>) {
            if (!state.lessons) {
                state.lessons = [];
            }
            state.lessons.push(action.payload);
        },
        


        editLesson(state, action: PayloadAction<{id: number, data: LessonFormData}>) {
            const index = state.lessons.findIndex(lesson => lesson.id === action.payload.id);
            if (index !== -1) {
               
                state.lessons[index] = {
                    ...state.lessons[index],
                    title: action.payload.data.title,
                    description: action.payload.data.description,
                    durability: action.payload.data.durability,
                 
                };
            }
        },
      
       deleteLesson(state, action: PayloadAction<{id: number}>) {
        state.lessons = state.lessons.filter(lesson => lesson.id !== action.payload.id);
    }

    },
});

export const {
    setLessons,
    editLesson,
    deleteLesson,
    addLesson
} = LessonsSlice.actions;
export default LessonsSlice.reducer;
