import $api from "../http";
import axios, { AxiosResponse } from 'axios';
import { RegisterInterface } from "../components/SignUpForm/types";
import { SignInData } from "../components/SignInForm/types";
export interface AdminResponse {
   message: string,
    user: {
        id: number,
        admin_id: number,
        email:string,
        role: string,
    banned_courses: [],
        banned_users: [],
        edited_courses: []
    }
}

export interface IsAdminResponse {
    message: string, 
    isAdmin: boolean
}
export default class BanService {
 
        static async AddBan(courseId:number, warningText: string): Promise<AxiosResponse<IsAdminResponse>> {
            return $api.post<IsAdminResponse>('/ban/addBan' , {courseId: courseId,banText: warningText })
        } 
    

}