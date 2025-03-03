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


interface Course {
    id: number,
    author: string,
    title: string,
    description: string,
    course_for: String[],
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
            course_id:number
            author: string,
        title: string,
        description: string,
        course_for: String[],
        release_date: string,
        course_logo:string,
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
        avatar_base64: null
    }
    }
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


}
 