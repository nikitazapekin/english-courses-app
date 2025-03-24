import $api from "../http";
import axios, { AxiosResponse } from 'axios';
 


interface GetLessonsResponse {

        message: string,
        lessons:  
           Array<{
                id: number,
                title: string,
                description: string,
                durability: string,
                video: string[];  // Changed from File[] to string[]
    materials: string[]; 
            }>
        
    
}


interface GetLesson {
 
        message: string,
        lesson: {
            id: number, 
            title: string,
            description:string,
            durability: string,
            video: string,
         //   materials: string[]
         materials: { filename: string; data: string };
        }
  
}
export default class LessonService {
    static async CreateLesson(data: any): Promise<AxiosResponse<any>> {
        return $api.post<any>('/lesson/createLesson', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    static async GetLessons(id: string):  Promise<AxiosResponse<GetLessonsResponse>> {
        return $api.get<GetLessonsResponse>(`/lesson/getLessons?courseId=${id}`,  {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }


    static async GetLesson(courseId: string, lessonId: string):  Promise<AxiosResponse<GetLesson>> {
        return $api.get<GetLesson>(`/lesson/getLesson?courseId=${courseId}&lessonId=${lessonId}`,  {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }



    static async EditLesson(courseId: string, lessonId: string, data: any):  Promise<AxiosResponse<GetLesson>> {
        return $api.put<GetLesson>(`/lesson/editLesson/${lessonId}`, data,  {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    static async DeleteLesson(  lessonId: string ):  Promise<AxiosResponse<GetLesson>> {
        return $api.delete<GetLesson>(`/lesson/deleteLesson?query=${lessonId}` 
        );
    }


} 
 
//getCourses