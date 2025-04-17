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
export default class adminService {

    static async getAdmin( ): Promise<AxiosResponse<AdminResponse>> {
        return $api.get<AdminResponse>('/admin/getAdmin' )
    }

    static async isAdmin( ): Promise<AxiosResponse<IsAdminResponse>> {
        return $api.get<IsAdminResponse>('/admin/isAdmin' )
    }

    static async GetBannedCourses( ): Promise<AxiosResponse<any>> {
        return $api.get<any>('/admin/getBannedCourses' )
    }
    

}