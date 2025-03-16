import { AxiosResponse } from "axios";
import $api from "../http";


interface   CreateCommentsTypes {
    lesson_id: number, 
    text: string
    replyToComment?: string
}


interface   LikeCommentTypes {
    comment_id: number, 
   
}
 


interface   LikeReplyTypes {
    reply_id: number, 
   
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
                  liked_by: Number[]
                author: {
                    id:  number,
                    username: string,
                    email: string,
                    avatar: string,
                     role:  string,
                    country: string,
                    city: string
                },



                repliesCount: number,
                replies: 
                    {
                        id: number,
                        comment_id: number,
                        lesson_id:number,
                        author_id: number,
                        author_name: string,
                        text: string,
                        created_at: string,
                        likes: number,
                        parent_id: number,
                        liked_by: Number[]
                        author: {
                            id: number,
                            username: string,
                            email:string,
                            avatar: string,
                            role: string,
                            country: string,
                            city: string,
                        }
                    }[]
                
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
    static async ReplyToComment({ lesson_id, text, replyToComment }: CreateCommentsTypes): Promise<AxiosResponse<any>> {
        return $api.post<any>('/comments/replyToLessonComment',
            {
                lesson_id: lesson_id,
                text: text,
                replyToId: replyToComment
            }
        );
    }


    static async LikeComment({ comment_id}: LikeCommentTypes): Promise<AxiosResponse<any>> {
        return $api.post<any>('/comments/likeComment',
            {
             comment_id: comment_id
            }
        );
    }


    static async LikeReply({ reply_id }: LikeReplyTypes): Promise<AxiosResponse<any>> {
        return $api.post<any>('/comments/likeReply',
            {
             reply_id: reply_id
            }
        );
    }



}

/*


CommentsRouter.post('/likeComment', Comments.likeComment)
CommentsRouter.post('/likeReply', Comments.likeReply)
*/