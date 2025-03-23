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

/*
  "id": 5,
                "test_id": 3,
                "question": "Mike ___ yesterday",
                "answers": [
                    "sleep",
                    "sleeped",
                    "sleped",
                    "will sleep"
                ],
                "correct_answer": "sleped",
                "question_image": "data:image/jpeg;base64,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"
            }
                */
            interface QuestionTest {
                question: string;
                answers: string[];
                correct_answer: string;
                question_image: string;
            }
            
interface Response {
 
        message: string,
        test: {
            id: 2,
            name: string,
            test_number: 1,
            duration:string,
            description:string,
            topics: string[],
            course_id: 6,
            questions: QuestionTest[]
        //    questions: Question[]
        }
 
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
   static async GetTestById(id:string): Promise<AxiosResponse<Response>> {
        return $api.get<Response>(`/test/getTestById?test_id=${id}`)
         
    }  



}