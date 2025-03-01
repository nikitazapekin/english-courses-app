import $api from "../http";
import axios, { AxiosResponse } from 'axios';
import { RegisterInterface } from "../components/SignUpForm/types";
import { SignInData } from "../components/SignInForm/types";
export interface SignInResponse {
    accessToken: string,
    role: string
}
export default class adminService {

    static async getAdmin( ): Promise<AxiosResponse<SignInResponse>> {
        return $api.get<any>('/admin/getAdmin' )
    }
    

}