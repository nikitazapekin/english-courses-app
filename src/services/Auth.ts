import $api from "../http";
import axios, { AxiosResponse } from 'axios';
import { RegisterInterface } from "../components/SignUpForm/types";
import { SignInData } from "../components/SignInForm/types";
export interface SignInResponse {
    accessToken: string
}
export default class AuthService {

    static async login({ email, password }: SignInData): Promise<AxiosResponse<SignInResponse>> {
        return $api.post<any>('/user/login', { email, password })
    }
    static async registration(data: Omit<RegisterInterface, 'confirmPassword'>): Promise<AxiosResponse<any>> {
        return $api.post<any>('/user/register', data);

    }
    static async logout(): Promise<void> {
        return $api.post('/logout')
    }
    static async test(email: string, password: string): Promise<AxiosResponse<any>> {
        return axios.post<any>('http://localhost:5000/api/user/login', { email, password })
    }

}