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
export default class WarningsService {
 
        static async AddWarning(courseId:number, warningText: string): Promise<AxiosResponse<IsAdminResponse>> {
            return $api.post<IsAdminResponse>('/warnings/addWarning' , {courseId: courseId,warningText: warningText })
        } 




            // idWarning, text
        static async UpdateWarning(idBan: string, text: string): Promise<AxiosResponse<IsAdminResponse>> {
            return $api.put<IsAdminResponse>('/warnings/updateWarning' , {idWarning: idBan,text: text })
        } 
        static async DeleteWarning(idBan: string): Promise<AxiosResponse<IsAdminResponse>> {
            return $api.post<IsAdminResponse>('/warnings/deleteWarning' , {idWarning: idBan,})
        }
        static async DeleteWarnings(idCourse:string, ): Promise<AxiosResponse<IsAdminResponse>> {
            return $api.post<IsAdminResponse>('/warnings/deleteWarnings' , {idCourse: idCourse })
        }
    

}