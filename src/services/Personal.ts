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
export default class PersonalService {
    static async GetUser(): Promise<AxiosResponse<PersonalResponse>> {
        return $api.get<PersonalResponse>('/personal/getUser');
    }
}