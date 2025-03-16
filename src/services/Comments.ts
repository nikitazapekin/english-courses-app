import { AxiosResponse } from "axios";
import $api from "../http";


interface   CreateCommentsTypes {
    lesson_id: number, 
    text: string
}
 
export default class CommentsService {
    static async GetComments(lessonId: string): Promise<AxiosResponse<any>> {
        return $api.get<any>(`/comments/getLessonComments?lesson_id=${lessonId}`);
    }

    static async CreateComment({ lesson_id, text }: CreateCommentsTypes): Promise<AxiosResponse<any>> {
        return $api.post<any>('/comments/createLessonComments',
            {
                lesson_id: lesson_id,
                text: text
            }
        );
    }
}