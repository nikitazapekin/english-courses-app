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
 
export default class QuestionService {
    static async SendQuestion(name: string, email: string, telephone: string, type: string, description: string): Promise<AxiosResponse<PersonalResponse>> {
        return $api.post<PersonalResponse>('/questions/sendQuestion', {name, email, telephone, type, description});
    }
}