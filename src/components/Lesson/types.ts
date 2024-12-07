export interface Response {
    userId: number;
    username: string;
    comment: string;
    date: string;
    avatar: string;
    likes: number;
    isYourComment:boolean,
    to: string
}


export interface LessonCommentItem {
    userId: number;
    username: string;
    comment: string;
    date: string;
    avatar: string;
    likes: number;
    responces: Response[] | null;
    isYourComment:boolean,
    commentId: number

  //  isLiked: false
    
}

export interface CommentsProps {
    data: {

        userId: number;
        username: string;
    comment: string;
    date: string;
    avatar: string;
    likes: number;
    responces: Response[] | null;
    isYourComment:boolean,
    commentId: number
    }[]
}