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

interface GetTestResponse {
   
        message: string,
        tests: 
            {
                id: number;
                name:  string,
                test_number:number;
                duration:  string,
                description: string,
                topics: String[],
                course_id: number;
            }[]
        
   
}
interface GetQuestionsRespose {
    
        message:string,
        questions: 
            {
                id: number,
                test_id: number,
                question:string,
                answers:  String[],
                correct_answer: string,
                question_image:string,
            }[]
           
        
    
}
export default class TestService {
    static async CreateTest(data: any): Promise<AxiosResponse<any>> {
        return $api.post<any>('/test/createTest', data)
         
    }

    static async GetTest(id:string): Promise<AxiosResponse<GetTestResponse>> {
        return $api.get<GetTestResponse>(`/test/getTest?course_id=${id}`)
         
    }


    static async GetQuestions(id:string): Promise<AxiosResponse<GetQuestionsRespose>> {
        return $api.get<GetQuestionsRespose>(`/test/getQuestions?test_id=${id}`)
         
    }



}