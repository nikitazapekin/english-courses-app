import $api from "../http";
import axios, { AxiosResponse } from 'axios';
import { RegisterInterface } from "../components/SignUpForm/types";
import { SignInData } from "../components/SignInForm/types";

interface GetTutorProps {

    message: string,
    user: {
        id: number
        id_author: null | number,
        username: string,
        email: string,

        description: string,
        rate: string,
        specialization: string,
        english_level: string,
        full_description: string,
        role: string,
    }

}



interface FormTypes {
    data: {

        username: string,
        describtion: string,
        fulldescribtion: string,
        email: string,
        password: string,
        specialization: string,
        level: string
    }
}


interface TutorCoursesResponse {
    
        message: string,
            courses:  
                {
                    id: number,
                    author:string,
                    title: string,
                    description: string,
                    course_for:  String[],
                    release_date:string,
                    course_logo:string,
                
                }[]

}
export default class TutorService {
    static async GetTutor(): Promise<AxiosResponse<GetTutorProps>> {
        return $api.get<GetTutorProps>('/tutor/getTutor');
    }
    static async EditTutor({ data }: FormTypes): Promise<AxiosResponse<GetTutorProps>> {
        return $api.put<GetTutorProps>('/tutor/editTutor', data);
    }
    static async GetTutorCourses(): Promise<AxiosResponse<TutorCoursesResponse>> {
        return $api.get<TutorCoursesResponse>('/tutor/getTutorCourses');
    }

}