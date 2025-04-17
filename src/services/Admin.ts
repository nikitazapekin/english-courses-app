import $api from "../http";
import axios, { AxiosResponse } from 'axios';
import { RegisterInterface } from "../components/SignUpForm/types";
import { SignInData } from "../components/SignInForm/types";
export interface AdminResponse {
   message: string,
    user: {
        id: number,
        admin_id: number,
        email:string,
        role: string,
    banned_courses: [],
        banned_users: [],
        edited_courses: []
    }
}



interface Ban {
    id: number;
    course_id: number ;
    ban_text: string;
    ban_date: string;  
    is_active: boolean;
  }
  
  interface CourseDetails {
    id: number;
    course_id: number ;
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
    warnings: number[] ;
    bans: Ban[] ;
    isvisible: boolean;
    bans_data: Ban[]; 
  }

  interface BannedResp {
    banned: CourseDetails[]
  }
export interface IsAdminResponse {
    message: string, 
    isAdmin: boolean
}
export default class adminService {

    static async getAdmin( ): Promise<AxiosResponse<AdminResponse>> {
        return $api.get<AdminResponse>('/admin/getAdmin' )
    }

    static async isAdmin( ): Promise<AxiosResponse<IsAdminResponse>> {
        return $api.get<IsAdminResponse>('/admin/isAdmin' )
    }

    static async GetBannedCourses( ): Promise<AxiosResponse<BannedResp>> {
        return $api.get<BannedResp>('/admin/getBannedCourses' )
    }
    

}

/*
{
    "banned": [
        {
            "id": 17,
            "course_id": null,
            "author": "fff@mail.ru",
            "title": "t3",
            "description": "34",
            "fulldescription": "rhrth",
            "course_for": [
                "4t3"
            ],
            "course_suitable": [
                "4t3"
            ],
            "for_what_reasons": [
                "rth"
            ],
            "about_course": [
                "fnfgn"
            ],
            "tag": "Средний",
            "course_rate": "0",
            "release_date": "2025-04-16T21:00:00.000Z",
            "course_logo": "/static/courses/1744881901349.jpeg",
            "warnings": null,
            "bans": [
                {
                    "id": 1,
                    "course_id": 17,
                    "ban_text": "bbsbs",
                    "ban_date": "2025-04-17T15:07:53.427285+03:00",
                    "is_active": true
                }
            ],
            "isvisible": false,
            "bans_data": [
                {
                    "id": 1,
                    "course_id": 17,
                    "ban_text": "bbsbs",
                    "ban_date": "2025-04-17T15:07:53.427285+03:00",
                    "is_active": true
                }
            ]
        },
        {
            "id": 13,
            "course_id": null,
            "author": "fff@mail.ru",
            "title": "34t3",
            "description": "fdfd",
            "fulldescription": "2r33r2",
            "course_for": [
                "bddb"
            ],
            "course_suitable": [
                "bddb"
            ],
            "for_what_reasons": [
                "egrrge"
            ],
            "about_course": [
                "regr"
            ],
            "tag": "Средний",
            "course_rate": "0",
            "release_date": "2025-04-16T21:00:00.000Z",
            "course_logo": "/static/courses/1744881829415.png",
            "warnings": null,
            "bans": [
                {
                    "id": 2,
                    "course_id": 13,
                    "ban_text": "advvadvad",
                    "ban_date": "2025-04-17T15:08:39.065706+03:00",
                    "is_active": true
                },
                {
                    "id": 3,
                    "course_id": 13,
                    "ban_text": "advvadvad",
                    "ban_date": "2025-04-17T15:08:39.068905+03:00",
                    "is_active": true
                }
            ],
            "isvisible": false,
            "bans_data": [
                {
                    "id": 2,
                    "course_id": 13,
                    "ban_text": "advvadvad",
                    "ban_date": "2025-04-17T15:08:39.065706+03:00",
                    "is_active": true
                },
                {
                    "id": 3,
                    "course_id": 13,
                    "ban_text": "advvadvad",
                    "ban_date": "2025-04-17T15:08:39.068905+03:00",
                    "is_active": true
                }
            ]
        }
    ]
}
    */