import $api from "../http";
import axios, { AxiosResponse } from "axios";
import { RegisterInterface } from "../components/SignUpForm/types";
import { SignInData } from "../components/SignInForm/types";

interface CreateCourseTypes {
    name: string;
    describtion: string;
    for: string;
    logo: string;
}

export default class CourseService {
    static async CreateCourse(data: CreateCourseTypes): Promise<AxiosResponse<any>> {
        return $api.post<any>("/courses/createCourse", {
            name: data.name,
            describtion: data.describtion,  
            forcourse: data.for,
            logo: data.logo
        });  
    }
}


/* 


import $api from "../http";
import axios, { AxiosResponse } from 'axios';
import { RegisterInterface } from "../components/SignUpForm/types";
import { SignInData } from "../components/SignInForm/types";


interface CreateCourseTypes {
    name: string,
    describtion: string,
    for: string,
    logo: string
}
export default class CourseService {
  //  private info: {};
    static async GetTutor(data: CreateCourseTypes): Promise<AxiosResponse<any>> {
        return $api.post<any>('/courses/createCourse', {
            name: data.name,
            describtiom: data.describtion, 
            forcourse: data.for, 
            logo: data.logo
        }
    }

} */