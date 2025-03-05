import $api from "../http";
import axios, { AxiosResponse } from 'axios';
import { RegisterInterface } from "../components/SignUpForm/types";
import { SignInData } from "../components/SignInForm/types";

interface GetTutorProps {

    message: string,
    user: {     
    id: number;
    id_author: number;
    username: string;
    email: string;
    description: string;
    rate: string;
    specialization: string;
    english_level: string;
    full_description: string;
    role: string;
    number_of_students: string;
    experience: String[];  
    work_experience: string;
    password: string;
   // level: string;
    location: string;
    price: number;
    phone: string
    }

}


interface FormTypes {
    data: {
    id: number;
    id_author: number;
    username: string;
    email: string;
    description: string;
    rate: string;
    specialization: string;
    english_level: string;
    full_description: string;
    role: string;
    number_of_students: string;
    experience: String[];  
    work_experience: string;
    password: string;
 
    location: string;
    price: number;
    phone: string
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
        console.log("new", data)
        return $api.put<GetTutorProps>('/tutor/editTutor', data);
    }
    static async GetTutorCourses(): Promise<AxiosResponse<TutorCoursesResponse>> {
        return $api.get<TutorCoursesResponse>('/tutor/getTutorCourses');
    }

}