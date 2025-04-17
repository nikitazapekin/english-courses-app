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
interface Warning {
    id: number,
    warning_text:string,
    warning_date: string,
    is_active: boolean
}

interface Ban {

    id: number,
    ban_text:string,
    ban_date: string,
    is_active: boolean
   
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


                    bans:  number[],
                    isvisible: boolean,
                    warnings: number[]
                    warnings_data: Warning[],
                 bans_data:  Ban[],
                }[]

}
/*
    {
                    "id": 1,
                    "warning_text": "avdvad",
                    "warning_date": "2025-04-17T15:08:44.900139+03:00",
                    "is_active": true
                },
                */

/*
   "isvisible": false,
            "warnings_data": null,
            "bans_data": [
                {
                    "id": 2,
                    "ban_text": "advvadvad",
                    "ban_date": "2025-04-17T15:08:39.065706+03:00",
                    "is_active": true
                },
                {
                    "id": 3,
                    "ban_text": "advvadvad",
                    "ban_date": "2025-04-17T15:08:39.068905+03:00",
                    "is_active": true
                }
            ]
        },
        {
            "id": 15,
            "course_id": null,
            "author": "fff@mail.ru",
            "title": "ehtheheh",
            "description": "herhre",
            "fulldescription": "ehr",
            "course_for": [
                "hre"
            ],
            "course_suitable": [
                "hre"
            ],
            "for_what_reasons": [
                "her"
            ],
            "about_course": [
                "hre"
            ],
            "tag": "Средний",
            "course_rate": "0",
            "release_date": "2025-04-16T21:00:00.000Z",
            "warnings": [
                1,
                2,
                3,
                4
            ],
            "bans": null,
            "isvisible": true,
            "warnings_data": [
                {
                    "id": 1,
                    "warning_text": "avdvad",
                    "warning_date": "2025-04-17T15:08:44.900139+03:00",
                    "is_active": true
                },
                */

 


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
     





interface TutorOtherInfoDetails {           
    message:  string,
    data: {
        tutors:  {

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
    }[] ,


        pagination: {
            total: number,
            limit: number,
            offset: number,
            hasMore: boolean
        }
    
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
    static async  getOtherTutorInfo(id: string, offset: number): Promise<AxiosResponse<TutorOtherInfoDetails>> {
        return $api.get<TutorOtherInfoDetails>(`/tutor/getOtherTutorInfo?id=${id}&offset=${offset}`);
    }

}

/*
{
    "message": "Доступ разрешён",
    "data": {
        "tutors": [
            {
                "id": 2,
                "id_author": 2,
                "username": "Ffff",
                "email": "fff@mail.ru",
                "rate": "0.00",
                "specialization": "",
                "description": "",
                "english_level": "",
                "full_description": "",
                "role": "tutor",
                "number_of_students": 0,
                "experience": null,
                "work_experience": 0,
                "phone": null,
                "location": null,
                "price": null,
                "avatar": null
            }
        ],
        "pagination": {
            "total": 1,
            "limit": 10,
            "offset": 0,
            "hasMore": false
        }
    }
}
    */