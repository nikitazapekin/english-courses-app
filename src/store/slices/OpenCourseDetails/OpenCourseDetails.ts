import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Course {
    course: {
      /*   id: number;
        course_id: number;
        author: string;
        title: string;
        description: string;
        course_for: String[];  
        release_date: string;
        course_logo: string; 
         */
        
        /*
        name: string;
        description: string;
        for: string;
        logo: string;
        course_for: String[],
        fulldescription: string,
        for_what_reasons: String[],
        about_course: String[],
        tag: string,
        */



        id: number,
        author: string,
        title: string,
        description:  string,
        fulldescription:  string,
    
    
        course_for:String[],
        course_suitable:  String[],
        for_what_reasons: String[],
        about_course:  String[],
        tag: string,
        course_rate:string,
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

interface OpenFormSliceTypes {
    message: string;
    courses: Course;
    loading: boolean;
    error: null | string;
}

const initialState: OpenFormSliceTypes = {
    message: "",
    loading: false,
    courses: {
        course: {
        /*   id: 0,
            course_id: 0,
            author: "",
            title: "",
            description: "",
            course_for: [],
            release_date: "",
            course_logo: "",  */

          /*   name: "",
            description:"",
            for:"",
            logo: "",
            course_for: [],
            fulldescription:"",
            for_what_reasons: [],
            about_course:  [],
            tag: "", */



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
    error: null,
};

const OpenFormSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        setCourse(state, action: PayloadAction<Course>) {
            state.courses = action.payload;
        },
    },
});

export const { setCourse } = OpenFormSlice.actions;
export default OpenFormSlice.reducer;

/* import { createSlice, PayloadAction } from '@reduxjs/toolkit';
 

interface Course {
   
    courses: {
        course: {
            id: number,
            course_id:number
            author: string,
        title: string,
        description: string,
        course_for: String[],
        release_date: string,
        course_logo:string,
    },
    tutor: {
        id: number,
        username:string,
        email: string,
        description: string,
        rate:string,
        specialization: string,
        english_level:string,
        full_description: string,
        avatar_base64: null
    }
    }
}
 


interface OpenFormSliceTypes {
    message: string;
    courses: Course;
    loading: boolean;
    error: null | string;
}

const initialState: OpenFormSliceTypes = {
    message: "",
    loading: false,
    courses: {
        course: {

            id: 0,
            course_id: 0,
        author: "",
        title: "",
        description: "",
        course_for: [],
        release_date: "",
        course_logo: "",
    }, 
    tutor: {

        id: 0,
        username:"",
    email: "",
    description:"",
    rate:"",
    specialization: "",
    english_level:"",
    full_description:"",
    avatar_base64: ""
}
    },

    error: null,
};

const OpenFormSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        setCourse(state, action: PayloadAction< Course>) {
            state.courses = action.payload;
        },
    },
});

export const { setCourse } = OpenFormSlice.actions;
export default OpenFormSlice.reducer;
 */