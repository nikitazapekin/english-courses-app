import $api from "../http";
import axios, { AxiosResponse } from "axios";
import { RegisterInterface } from "../components/SignUpForm/types";
import { SignInData } from "../components/SignInForm/types";


interface Question {
    title: string;
    answers: string[];
    answer: string;
    url: string;
}

interface FormData {
    data: {

        title_test: string;
        description: string;
    topics: string[];
    questions: Question[];
}
}

export default class TestService {
    static async CreateTest(data: any): Promise<AxiosResponse<any>> {
        return $api.post<any>('/test/createTest', data)
         
    }
}