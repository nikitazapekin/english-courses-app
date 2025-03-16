import { AxiosResponse } from "axios";
import $api from "../http";


interface   CreateCommentsTypes {
    lesson_id: number, 
    text: string
}
 
interface CommentsResponse {
  
        message: string,
        comments: [
            {
                id: number,
                lesson_id: number,
                author_id: number,
                author_name: string,
                text:  string,
                created_at:  string,
                likes:  number,
                parent_comment_id: number | null, 
                author: {
                    id:  number,
                    username: string,
                    email: string,
                    avatar: string,
                     role:  string,
                    country: string,
                    city: string
                }
            }
        ]
    
}
export default class CommentsService {
    static async GetComments(lessonId: string): Promise<AxiosResponse<CommentsResponse>> {
        return $api.get<CommentsResponse>(`/comments/getLessonComments?lesson_id=${lessonId}`);
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