import $api from "../http";
import axios, { AxiosResponse } from 'axios';
import { RegisterInterface } from "../components/SignUpForm/types";
import { SignInData } from "../components/SignInForm/types";

interface GetTutorProps {

    message: string,
    user: {
       /*  id: number
        id_author: null | number,
        username: string,
        email: string,

        description: string,
        rate: string,
        specialization: string,
        english_level: string,
        full_description: string,
        role: string, */



       /*  id: number,
        id_author:number,
        username: string,
        email: string,
        description: string,
        rate: string,
        specialization:string,
        english_level: string,
        full_description: string,
        role: string,
        number_of_students: number,
        experience: String[],
        work_experience:number,
        phone:string,
        location:string,
        price:number, */


        
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

/*
{
    "message": "Доступ разрешён",
    "user": {
        "id": 1,
        "id_author": 1,
        "username": "Tutor",
        "email": "tutor@mail.ru",
        "description": "Lorem ipsum",
        "rate": "0.00",
        "specialization": "Программирование",
        "english_level": "С1",
        "full_description": "описание",
        "role": "tutor",
        "number_of_students": 11,
        "experience": [
            "тест"
        ],
        "work_experience": 11,
        "phone": "3243351",
        "location": "Minsk",
        "price": "44"
    }
}
*/

interface FormTypes {
    data: {
/* 
        username: string,
        describtion: string,
        fulldescribtion: string,
        email: string,
        password: string,
        specialization: string,
        level: string */

     /*    username: string;
        description: string;
        fulldescription: string;
        email: string;
        password: string;
        specialization: string;
        level: string;
        students: string;
        experience: String[];
        durability: string;
        location: string;
        price: number; */




        
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