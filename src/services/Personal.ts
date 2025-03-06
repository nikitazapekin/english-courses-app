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
    static async GetPersonalCourses( limit: number, offset: number): Promise<AxiosResponse<any>> {
        return  $api.get<any>(`/personal/getSubscribedCourses?limit=${limit}&offset=${offset}`);
    }
 


}