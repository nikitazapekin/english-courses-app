import $api from "../http";
import axios, { AxiosResponse } from "axios";
import { RegisterInterface } from "../components/SignUpForm/types";
import { SignInData } from "../components/SignInForm/types";

interface CreateCourseTypes {
 /*    name: string;
    describtion: string;
    for: string;
    logo: string; */

    name: string;
    description: string;
    for: string;
    logo: string;
    course_for: String[],
    fulldescription: string,
    for_what_reasons: String[],
    about_course: String[],
    tag: string,
}


interface Course {
  /*   id: number,
    author: string,
    title: string,
    description: string,
  course_for: String[],
    release_date: string,
    course_logo: string, */
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
}

interface GetCoursesResponse {
    message: string,
    courses: Course[]
    total: number, 
    pages: number

}



/*
{
    "message": "Курс найден",
    "courses": {
        "course": {
            "id": 32,
            "course_id": null,
            "author": "ttt@mail.ru",
            "title": "Английский для программистов",
            "description": "Станьте настоящим профессионалом своего дела",
            "fulldescription": "               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab ad laborum autem sit? Quam molestias a alias enim inventore! Quos ipsam facere nisi. Beatae incidunt facilis deleniti voluptate? Aliquam, earum!",
            "course_for": [
                "Детей",
                "Студентов"
            ],
            "course_suitable": [
                "Детей",
                "Студентов"
            ],
            "for_what_reasons": [
                "Понимание документации",
                "Разговор с заказчтками"
            ],
            "about_course": [
                "90 уроков",
                "21 тест",
                "детальная лексика"
            ],
            "tag": "it",
            "course_rate": "0",
            "release_date": "2025-03-03T21:00:00.000Z",

            "course_avatar": null
        },
        "tutor": {
            "id": 2,
            "username": "Ttt",
            "email": "ttt@mail.ru",
            "description": "vvvvvvvvvvvvvvv",
            "rate": "0.00",
            "specialization": "vvvvv",
            "english_level": "vvvvvvv",
            "full_description": "vvv",
        
            }
    }
}
*/
interface CourseDetails {
    message:string,
    courses: {
        course: {
        /*     id: number,
            course_id:number
            author: string,
        title: string,
        description: string,
        course_for: String[],
        release_date: string,
        course_logo:string, */


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
        avatar_base64: null,
        experience: String[],
        work_experience: number,
    }
    }
}
 
export default class CourseService {
    static async CreateCourse(data: CreateCourseTypes): Promise<AxiosResponse<any>> {
        console.log("DAR", JSON.stringify(data))
      
        return $api.post<any>("/courses/createCourse", {
            name: data.name,
            description: data.description,
           course_for: data.course_for,
            logo: data.logo,
            fulldescription: data.fulldescription, 
            for_what_reasons: data.for_what_reasons, 
            about_course: data.about_course, 
            tag: data.tag,
          
        });
    }
    static async GetCourses(page: number, limit: number): Promise<AxiosResponse<GetCoursesResponse>> {
        return $api.get<GetCoursesResponse>(`/courses/getCourses?page=${page}&limit=${limit}`)
    }


    static async GetCoursesQuery(page: number, limit: number, query: string): Promise<AxiosResponse<GetCoursesResponse>> {
        return $api.get<GetCoursesResponse>(`/courses/getCoursesQuery?page=${page}&limit=${limit}&query=${query}`)
    }


    static async SearchCourses(query: string): Promise<AxiosResponse<GetCoursesResponse>> {
        return $api.get<GetCoursesResponse>(`/courses/searchCourses?query=${query}`)
    }


    static async GetCourseInfo(query: string): Promise<AxiosResponse<CourseDetails>> {
        return $api.get<CourseDetails>(`/courses/getCourseInfo?id=${query}`)
    }


}
 