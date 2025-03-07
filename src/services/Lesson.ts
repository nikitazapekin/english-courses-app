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
                video: String[],
                materials: String[]
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
            materials: string[]
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


} 
 
//getCourses