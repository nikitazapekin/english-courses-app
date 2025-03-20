import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Course {
    course: {



        id: number,
        author: string,
        title: string,
        description: string,
        fulldescription: string,


        course_for: String[],
        course_suitable: String[],
        for_what_reasons: String[],
        about_course: String[],
        tag: string,
        course_rate: string,
        release_date: string,
        course_logo: string,
    };
    tutor: {
        id: number;
        username: string;
        email: string;
        description: string;
        rate: string;
        specialization: string;
        english_level: string;
        full_description: string;
        avatar_base64: string | null;

        experience: String[],
        work_experience: number,
    };

}

interface EditModalLessonsSliceTypes {
    /*   message: string;
       courses: Course;
       loading: boolean;
       error: null | string;
       */
    isOpenEditLessonModal: boolean,
    lessonId: string
}

const initialState: EditModalLessonsSliceTypes = {
    /*   message: "",
      loading: false,
      courses: {
          course: {
        
  
  
  
              id: 0,
              author:"",
              title:"",
              description:  "",
              fulldescription:  "",
          
          
              course_for: [],
              course_suitable:   [],
              for_what_reasons: [],
              about_course:   [],
              tag: "",
              course_rate:"",
              release_date: "",
              course_logo: "",
          },
          tutor: {
              id: 0,
              username: "",
              email: "",
              description: "",
              rate: "",
              specialization: "",
              english_level: "",
              full_description: "",
              avatar_base64: null,  
              experience: [],
              work_experience: 0,
          },
      },
      error: null, */
    isOpenEditLessonModal: false,
    lessonId: ""
};

const EditModalLessonsSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        setIsOpenEditModalLessons(state, action: PayloadAction<{lessonId: string}>) {
            state.isOpenEditLessonModal = !state.isOpenEditLessonModal
            state.lessonId = action.payload.lessonId
        }
    },
});

export const { // setCourse
    setIsOpenEditModalLessons

} = EditModalLessonsSlice.actions;
export default EditModalLessonsSlice.reducer;
