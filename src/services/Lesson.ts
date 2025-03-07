import $api from "../http";
import axios, { AxiosResponse } from 'axios';


interface FormData {
    title: string;
    description: string;
    durability: string;
    video: File[];
    materials: File[];
}
 
export default class LessonService {
    static async CreateLesson(data: FormData): Promise<AxiosResponse<any>> {
        return $api.post<any>('/lesson/createLesson', data);
    }

}