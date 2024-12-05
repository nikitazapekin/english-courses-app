import React from "react";
import styles from "./LessonComments.module.scss";
import LessonCommentCard from "./LessonCommentCard";

interface Response {
    userId: number;
    username: string;
    comment: string;
    date: string;
    avatar: string;
    likes: number;
    isLiked: boolean;
    isYourComment: boolean;
}

interface LessonCommentItem {
    userId: number;
    username: string;
    comment: string;
    date: string;
    avatar: string;
    likes: number;
    isLiked: boolean;
    isYourComment: boolean;
    responses: Response[];
}

interface LessonCommentsProps {
    comments: LessonCommentItem[];
    onAddComment: (text: string, replyToUser?: string) => void;
    onLike: (commentId: number, isReply: boolean, parentCommentId?: number) => void;
}

const LessonComments = ({ comments, onAddComment, onLike }: LessonCommentsProps) => {
    return (
        <div className={styles.comments}>
            {comments.map((item) => (
                <LessonCommentCard
                    item={item}
                    key={item.userId}
                    onAddComment={onAddComment}
                    onLike={onLike}
                />
            ))}
        </div>
    );
};

export default LessonComments;

/*
import styles from "./LessonComments.module.scss";
import LessonCommentCard from "./LessonCommentCard";
import Avatar from "../../../assets/avatars/avatar1.png"
import Avatar2 from "../../../assets/avatars/avatar2.png"
interface Response {
    userId: number;
    username: string;
    comment: string;
    date: string;
    avatar: string;
    likes: number;
    isYourComment:boolean
}


interface LessonCommentItem {
    userId: number;
    username: string;
    comment: string;
    date: string;
    avatar: string;
    likes: number;
    responces: Response[];
    isYourComment:boolean
    
}

const data: LessonCommentItem[] = [
    {
        userId: 1,
        username: "Test",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at velit ligula. Ut urna purus, hendrerit a eros malesuada, blandit egestas augue. Vestibulum eu sem ut augue pretium ullamcorper. Curabitur velit elit, volutpat ut venenatis sit amet, facilisis et magna. Pellentesque laoreet velit at arcu hendrerit, eget molestie mauris semper. Maecenas id neque fermentum, tincidunt justo sit amet, dapibus turpis. Sed fringilla id enim sit amet dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec iaculis metus arcu, sit amet lobortis quam porta id. Sed sit amet diam pretium, faucibus elit et, auctor lacus. Nulla vel consequat metus, et tempor lacus. Phasellus congue felis vel consequat bibendum. Etiam eget ultricies dolor. Curabitur eros est, viverra sit amet lorem et, tempus laoreet sapien. Integer porta eros eget elementum cursus.",
        date: "22.12.2024",
        avatar: Avatar,
        likes: 0,
        isYourComment: false,
        responces: [
            {
                userId: 2,
                username: "Alex",
                comment: "Lorem ipsum dolor sit amet...",
                date: "22.12.2024",
                avatar: Avatar,
                likes: 0,
                isYourComment: false,
            },
            {
                userId: 3,
                username: "Alex",
                comment: "Lorem ipsum dolor sit amet...",
                date: "22.12.2024",
                avatar: Avatar2,
                likes: 0,
                isYourComment: false,
            },
            {
                userId: 5,
                username: "You",
                comment: "Lorem ipsum dolor sit amet...",
                date: "22.12.2024",
                avatar: Avatar2,
                likes: 0,
                isYourComment: true,
            },
        ],
    },

    {
        userId: 4,
        username: "You",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at velit ligula. Ut urna purus, hendrerit a eros malesuada, blandit egestas augue. Vestibulum eu sem ut augue pretium ullamcorper. Curabitur velit elit, volutpat ut venenatis sit amet, facilisis et magna. Pellentesque laoreet velit at arcu hendrerit, eget molestie mauris semper. Maecenas id neque fermentum, tincidunt justo sit amet, dapibus turpis. Sed fringilla id enim sit amet dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec iaculis metus arcu, sit amet lobortis quam porta id. Sed sit amet diam pretium, faucibus elit et, auctor lacus. Nulla vel consequat metus, et tempor lacus. Phasellus congue felis vel consequat bibendum. Etiam eget ultricies dolor. Curabitur eros est, viverra sit amet lorem et, tempus laoreet sapien. Integer porta eros eget elementum cursus.",
        date: "22.12.2024",
        avatar: Avatar,
        likes: 0,
        isYourComment: true,
        responces: []


        }
];

const LessonComments = () => {
    return (
        <div className={styles.comments}>
            {data.map((item) => (
                <LessonCommentCard item={item} key={item.userId} />
            ))}
        </div>
    );
};

export default LessonComments;

 
*/