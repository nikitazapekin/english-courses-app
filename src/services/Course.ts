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
    static async SearchCourses(query: string): Promise<AxiosResponse<GetCoursesResponse>> {
        return $api.get<GetCoursesResponse>(`/courses/searchCourses?query=${query}`)
    }



}
 