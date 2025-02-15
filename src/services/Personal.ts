import $api from "../http";
import axios, { AxiosResponse } from 'axios';
import { RegisterInterface } from "../components/SignUpForm/types";
import { SignInData } from "../components/SignInForm/types";
export interface SignInResponse {
    accessToken: string
}
export default class PersonalService {

    static async GetUser(): Promise<AxiosResponse<any>> {
        return $api.get<any>('/personal/getUser');

    }
    

}