import $api from "../http";
import axios, { AxiosResponse } from 'axios';
import { RegisterInterface } from "../components/SignUpForm/types";
import { SignInData } from "../components/SignInForm/types";

interface GetTutorProps {

    message: string,
    user: {
        id:number
        id_author: null | number,
        username: string,
        email:string,
       
        description: string,
        rate:string,
        specialization:string,
        english_level: string,
        full_description: string,
        role: string,
    }

}
export default class TutorService {
    static async GetTutor(): Promise<AxiosResponse<GetTutorProps>> {
        return $api.get<GetTutorProps>('/tutor/getTutor');
    }
 

}