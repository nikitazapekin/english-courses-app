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
      
        }
 
}



interface TestFormData {
    title: string;
    duration: string;
    description: string;
    topics: string[];
    questions: QuestionTestt[];
}

interface QuestionTestt {
    id?: number;
    question: string;
    answers: string[];
    correct_answer: string;
    question_image: string | null;
}
 interface EditProps {
    id: string,
    formData:TestFormData
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

    static async EditTestById({id, formData}: EditProps): Promise<AxiosResponse<Response>> {
        return $api.put<any>(`/test/editTestById?id=${id}`, {formData: formData})
         
    }  
    static async DeleteTestById(id: string): Promise<AxiosResponse<Response>> {
        return $api.delete<any>(`/test/deleteTestById?id=${id}` )
         
    } 

}