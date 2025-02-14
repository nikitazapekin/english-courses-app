

export interface HomepageSliceTypes {
    isOpenBurger: boolean
}
export interface ReplyProps {
    userId: number; 
    username: string; 
    comment: string;  
    date: string; 
    avatar: string; 
    likes: number;  
    isYourComment: boolean;  
    to: string;
    commentId: number
}