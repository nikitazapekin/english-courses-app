import $api from "../http";
import axios, {AxiosResponse} from 'axios';
 

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<any>> {
        return $api.post<any>('/user/login', {email, password})
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<any>> {
        return $api.post<any>('/register', {email, password})
    }

    static async logout(): Promise<void> {
        return $api.post('/logout')
    }

    static async test(email: string, password: string): Promise<AxiosResponse<any>> {
        return axios.post<any>('http://localhost:5000/api/user/login', {email, password})
    }

}