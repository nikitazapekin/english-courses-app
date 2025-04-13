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

 


        interface Course {
            id: number;
            title: string;
            description: string;
            fulldescription: string;
            course_for: string[];
            course_suitable: string[];
            for_what_reasons: string[];
            about_course: string[];
            tag: string;
            course_rate: string;
            release_date: string;
            course_logo: string;
        }
        
        interface Student {
            id: number;
            username: string;
            email: string;
            courses: (string | null)[];
            avatar: string | null;
        }
        
        interface Students {
            message: string;
            students: {
                courses: Course[];
                students: Student[];
            };
        }



/*

                "id": 1,
                "title": "wfq",
                "date": "2025-04-19",
                "logo": "data:image
                */

        interface TutorInfoDetails {


           
                message:  string,
                data: {
                    id: number,
                    id_author: number,
                    username:  string,
                    email: string,
                    rate: string,
                    specialization: string,
                    english_level:  string,
                    full_description: string,
                    
                    
                    role: string,
                    number_of_students: number,
                    experience:  string[],
                    work_experience:number,
                    phone: string,
                    location: string,
                    price: number,
                    achievements: {
                        id: number,
                        title: string,
                        date: string,
                        logo:string
                    }[],
                    courses: {
                        id: number,
                        title:  string,
                        fulldescription: string,
                        course_for: string[],
                        course_suitable:string[],
                        for_what_reasons: string[],
                        about_course: string[],
                        tag: string,
                        course_rate:number,
                        release_date:  string,
                        course_logo: string,
                    }[],
                    
                    //[],
                    description: string,
                    avatar:  string,
                }
           
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

    static async GetStudentsCourse(): Promise<AxiosResponse<Students>> {
        return $api.get<Students>('/tutor/getStudents');
    }


    static async removeStudentsCourse( studentEmail:string, courseId: string): Promise<AxiosResponse<any>> {
        return $api.post<any>('/tutor/removeStudent', {studentEmail: studentEmail, courseId: courseId});
    }

    static async  getTutorInfo(id: string): Promise<AxiosResponse<TutorInfoDetails>> {
        return $api.get<TutorInfoDetails>(`/tutor/getTutorInfo?id=${id}`);
    }

}