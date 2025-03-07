import $api from "../http";
import axios, { AxiosResponse } from "axios";
import { RegisterInterface } from "../components/SignUpForm/types";
import { SignInData } from "../components/SignInForm/types";

interface CreateCourseTypes {
 
    name: string;
    description: string;
    for: string;
    logo: string;
    course_for: String[],
    fulldescription: string,
    for_what_reasons: String[],
    about_course: String[],
    tag: string,
}


interface Course {
 
    id: number,
    author: string,
    title: string,
    description:  string,
    fulldescription:  string,


    course_for:String[],
    course_suitable:  String[],
    for_what_reasons: String[],
    about_course:  String[],
    tag: string,
    course_rate:string,
    release_date: string,
    course_logo: string,
}

interface GetCoursesResponse {
    message: string,
    courses: Course[]
    total: number, 
    pages: number

}

 
interface CourseDetails {
    message:string,
    courses: {
        course: {
 

        id: number,
        author: string,
        title: string,
        description:  string,
        fulldescription:  string,
    
    
        course_for:String[],
        course_suitable:  String[],
        for_what_reasons: String[],
        about_course:  String[],
        tag: string,
        course_rate:string,
        release_date: string,
        course_logo: string,


    },
    tutor: {
        id: number,
        username:string,
        email: string,
        description: string,
        rate:string,
        specialization: string,
        english_level:string,
        full_description: string,
        avatar_base64: null,
        experience: String[],
        work_experience: number,
    }
    }
}
 
 

interface FormTypes {
    data: {
 
    id: string,
    name: string;
    description: string;
    for: string;
    logo: string;
    course_for: String[];
    fulldescription: string;
    for_what_reasons: String[];
    about_course: String[];
    tag: string;
    }
}
export default class CourseService {
    static async CreateCourse(data: CreateCourseTypes): Promise<AxiosResponse<any>> {
        return $api.post<any>("/courses/createCourse", {
            name: data.name,
            description: data.description,
         course_for: data.course_for,
            logo: data.logo,
            fulldescription: data.fulldescription, 
            for_what_reasons: data.for_what_reasons, 
            about_course: data.about_course, 
            tag: data.tag,
          
        });
    }
    static async GetCourses(page: number, limit: number): Promise<AxiosResponse<GetCoursesResponse>> {
        return $api.get<GetCoursesResponse>(`/courses/getCourses?page=${page}&limit=${limit}`)
    }


    static async GetCoursesQuery(page: number, limit: number, query: string): Promise<AxiosResponse<GetCoursesResponse>> {
        return $api.get<GetCoursesResponse>(`/courses/getCoursesQuery?page=${page}&limit=${limit}&query=${query}`)
    }


    static async SearchCourses(query: string): Promise<AxiosResponse<GetCoursesResponse>> {
        return $api.get<GetCoursesResponse>(`/courses/searchCourses?query=${query}`)
    }


    static async GetCourseInfo(query: string): Promise<AxiosResponse<CourseDetails>> {
        return $api.get<CourseDetails>(`/courses/getCourseInfo?id=${query}`)
    }


    static async EditCourseInfo({data}: FormTypes, query: string): Promise<AxiosResponse<CourseDetails>> {
        return $api.put<CourseDetails>(`/courses/editCourseInfo?id=${query}`, data)
    }


}
 