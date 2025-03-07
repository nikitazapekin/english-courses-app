import $api from "../http";
import axios, { AxiosResponse } from 'axios';
import { RegisterInterface } from "../components/SignUpForm/types";
import { SignInData } from "../components/SignInForm/types";
export interface SignInResponse {
    accessToken: string
}
interface PersonalResponse {
    message: string
    user: {
        id: number,
        email: string,
        auth_date: string,
        user_id: number,
        courses: string,
        phone: string,
        country: string,
        city: string,
        role: string,
        username: string,
        describtion: string
    },
}

interface EditProps {
    data: {
        email: string,
        password: string, 
        phone: string,
        country: string,
        city: string, 
        name: string,
        shortName: string,
        describtion: string,
         theme: string 
    }
}

 

interface EditAvatarProps {
 
        avatar: string
 
}

interface Test {
    title_test: string,
     description: string,
     topics: String[],
     questions: Array<{
 
         title: string,
         answers: String[], 
         answer: string, 
 url: string
     }>  
  
  }

  /*
  {
    "message": "Ваши курсы",
    "courses": [
        {
            "id": 8,
            "course_id": null,
            "author": "ttt@mail.ru",
            "title": "dwq",
            "description": "",
            "fulldescription": "wfqfw",
            "course_for": [],
            "course_suitable": [],
            "for_what_reasons": [
                "wfqf"
            ],
            "about_course": [
                "wfqwf"
            ],
            "tag": "wqf",
            "course_rate": "0",
            "release_date": "2025-03-03T21:00:00.000Z",
            "course_logo": "/static/courses/1741092116543.png"
        },
        {
            "id": 33,
            "course_id": null,
            "author": "tutorr@mail.ru",
            "title": "testttttt",
            "description": "avdvva",
            "fulldescription": "savsavs",
            "course_for": [
                "vavsv",
                "test"
            ],
            "course_suitable": [
                "vavsv",
                "test"
            ],
            "for_what_reasons": [
                "savvda",
                "test"
            ],
            "about_course": [
                "avdvadav",
                "tesr"
            ],
            "tag": "itadvaavd",
            "course_rate": "0",
            "release_date": "2025-03-04T21:00:00.000Z",
            "course_logo": "/static/courses/1741195832429.png"
        }
    ]
}
    */

interface CoursesResponse {
    message:string,

    courses: {
        page: number,
        limit:number,
        total: number,
        
    courses:  Array<{

        id: number,
        course_id: number,
    author: string,
    title: string,
    description: string,
    fulldescription: string,
    course_for: String[],
    course_suitable:String[],
    for_what_reasons: String[],
    about_course:String[],
    tag: string,
    course_rate: string,
    release_date:string,
    course_logo: string,
}>
    }
}
 
 
export default class PersonalService {
    static async GetUser(): Promise<AxiosResponse<PersonalResponse>> {
        return $api.get<PersonalResponse>('/personal/getUser');
    }
    static async EditUser( {data}: EditProps ): Promise<AxiosResponse<PersonalResponse>> {
        return $api.put<PersonalResponse>('/personal/editUser', data);
    }
    static async EditUserAvatar( {avatar}: EditAvatarProps ): Promise<AxiosResponse<PersonalResponse>> {
        return $api.put<PersonalResponse>('/personal/editAvatar', {avatar: avatar});
    }
    static async GetAvatar(  ): Promise<AxiosResponse<any>> {
        return  $api.get<any>('/personal/getAvatar');
    }
    static async SubscribeToCourse( courseId: string): Promise<AxiosResponse<any>> {
        return  $api.put<any>('/personal/subcribeToCourse', {courseId: courseId});
    }
    static async GetPersonalCourses( offset: number,  limit: number, ): Promise<AxiosResponse<CoursesResponse>> {
        console.log("offset", offset)
        return  $api.get<CoursesResponse>(`/personal/getSubscribedCourses?limit=${limit}&offset=${offset}`);
    }
 


}