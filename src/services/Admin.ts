import $api from "../http";
import axios, { AxiosResponse } from 'axios';
import { RegisterInterface } from "../components/SignUpForm/types";
import { SignInData } from "../components/SignInForm/types";
export interface AdminResponse {
    message: string,
    user: {
        id: number,
        admin_id: number,
        email: string,
        role: string,
        banned_courses: [],
        banned_users: [],
        edited_courses: []
    }
}



interface Ban {
    id: number;
    course_id: number;
    ban_text: string;
    ban_date: string;
    is_active: boolean;
}

interface CourseDetails {
    id: number;
    course_id: number;
    author: string;
    title: string;
    description: string;
    fulldescription: string;
    course_for: string[];
    course_suitable: string[];
    for_what_reasons: string[];
    about_course: string[];
    tag: string;
    course_rate: string;
    release_date: string;
    course_logo: string;
    warnings: number[];
    bans: Ban[];
    isvisible: boolean;
    bans_data: Ban[];
}

interface BannedResp {
    banned: CourseDetails[]
}




interface WarningsDetails {
    id: number;
    course_id: number;
    author: string;
    title: string;
    description: string;
    fulldescription: string;
    course_for: string[];
    course_suitable: string[];
    for_what_reasons: string[];
    about_course: string[];
    tag: string;
    course_rate: string;
    release_date: string;
    course_logo: string;
    warnings:
    {
        id: number,
        course_id: number,
        warning_text: string;
        warning_date: string;
        is_active: boolean
    }[];

 
    warnings_data: {
        id: number,
        course_id: number,
        warning_text: string;
        warning_date: string;
        is_active: boolean
    }[];
    isvisible: boolean;
   
}

interface WarningsResp {
    banned: WarningsDetails[]
}
export interface IsAdminResponse {
    message: string,
    isAdmin: boolean
}
export default class adminService {

    static async getAdmin(): Promise<AxiosResponse<AdminResponse>> {
        return $api.get<AdminResponse>('/admin/getAdmin')
    }

    static async isAdmin(): Promise<AxiosResponse<IsAdminResponse>> {
        return $api.get<IsAdminResponse>('/admin/isAdmin')
    }

    static async GetBannedCourses(): Promise<AxiosResponse<BannedResp>> {
        return $api.get<BannedResp>('/admin/getBannedCourses')
    }
    static async GetWarningCourses(): Promise<AxiosResponse<WarningsResp>> {
        return $api.get<WarningsResp>('/admin/getWarningCourses')
    }

}
/*
{
    "banned": [
        {
            "id": 15,
            "course_id": null,
            "author": "fff@mail.ru",
            "title": "ehtheheh",
            "description": "herhre",
            "fulldescription": "ehr",
            "course_for": [
                "hre"
            ],
            "course_suitable": [
                "hre"
            ],
            "for_what_reasons": [
                "her"
            ],
            "about_course": [
                "hre"
            ],
            "tag": "Средний",
            "course_rate": "0",
            "release_date": "2025-04-16T21:00:00.000Z",
            "course_logo": "dvvad"
            "warnings": [
                {
                    "id": 1,
                    "course_id": 15,
                    "warning_text": "avdvad",
                    "warning_date": "2025-04-17T15:08:44.900139+03:00",
                    "is_active": true
                },
            
            ],
            "bans": null,
            "isvisible": true,
            "warnings_data": [
                {
                    "id": 1,
                    "course_id": 15,
                    "warning_text": "avdvad",
                    "warning_date": "2025-04-17T15:08:44.900139+03:00",
                    "is_active": true
                },
              
            ]
        },
     
    ]
}
    */