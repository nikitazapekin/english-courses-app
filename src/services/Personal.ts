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
        description: string
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
 
interface Bans {
        message: string,
        courses: 
            {
                id:number,
                ban_text:string,
                ban_date: string,
                is_active: true
            }[]
        
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
    static async UnSubscribeToCourse( courseId: string): Promise<AxiosResponse<any>> {
        return  $api.post<any>('/personal/unSubscribedCourse', {courseId: courseId});
    }

    static async GetUserBans(): Promise<AxiosResponse<Bans>> {
        return  $api.get<Bans>('/personal/getUserBans' );
    }
 

}