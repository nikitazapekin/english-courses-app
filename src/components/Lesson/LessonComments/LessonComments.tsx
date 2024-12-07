/*import React from "react";
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
*/


import styles from "./LessonComments.module.scss";
import LessonCommentCard from "./LessonCommentCard";

import {CommentsProps, LessonCommentItem, Response  } from "../types"
const LessonComments = ({data}: CommentsProps) => {
    return (
        <div className={styles.comments}>
            {data.map((item) => (
                <LessonCommentCard item={item} key={item.userId} />
            ))}
        </div>
    );
};

export default LessonComments;

 
        