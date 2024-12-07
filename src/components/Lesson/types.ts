export interface Response {
    userId: number;
    username: string;
    comment: string;
    date: string;
    avatar: string;
    likes: number;
    isYourComment:boolean
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
    isYourComment:boolean
    }[]
}