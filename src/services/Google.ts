import $api from "../http";
import axios, { AxiosResponse } from 'axios';
import { RegisterInterface } from "../components/SignUpForm/types";
import { SignInData } from "../components/SignInForm/types";

 
export default class GoogleService {
    static async GetAuth(): Promise<AxiosResponse<any>> {
        return $api.get<any>('/auth/google');
    }

}