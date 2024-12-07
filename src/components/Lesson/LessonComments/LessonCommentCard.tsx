/*
*/
import React, { useState } from "react";
import styles from "./LessonComments.module.scss";
import Heart from "../../../assets/icons/heart.png";

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

interface LessonCommentCardProps {
    item: LessonCommentItem;
    onAddComment: (text: string, replyToUser?: string) => void;
    onLike: (commentId: number, isReply: boolean, parentCommentId?: number) => void;
}

const LessonCommentCard = ({ item, onAddComment, onLike }: LessonCommentCardProps) => {
    const [replyText, setReplyText] = useState("");

    const handleReply = () => {
        if (replyText.trim()) {
            onAddComment(replyText, item.username);
            setReplyText("");
        }
    };

    return (
        <div className={styles.comment}>
            <div className={styles.commentContent}>
                <img src={item.avatar} alt="Avatar" className={styles.avatar} />
                <div>
                    <h4>{item.username}</h4>
                    <p>{item.comment}</p>
                    <div className={styles.footer}>
                        <button onClick={() => onLike(item.userId, false)} className={styles.likeButton}>
                            <img src={Heart} alt="Like" />
                            {item.likes}
                        </button>
                        <button onClick={() => setReplyText(`@${item.username} `)}>Ответить</button>
                    </div>
                </div>
            </div>

            {item.responses.map((response) => (
                <div key={response.userId} className={styles.response}>
                    <img src={response.avatar} alt="Avatar" className={styles.avatar} />
                    <div>
                        <h4>{response.username}</h4>
                        <p>{response.comment}</p>
                        <div className={styles.footer}>
                            <button
                                onClick={() => onLike(response.userId, true, item.userId)}
                                className={styles.likeButton}
                            >
                                <img src={Heart} alt="Like" />
                                {response.likes}
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            <div className={styles.replySection}>
                <input
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Напишите ответ..."
                />
                <button onClick={handleReply}>Отправить</button>
            </div>
        </div>
    );
};

export default LessonCommentCard;


/*

import styles from "./LessonComments.module.scss";
import Heart from "../../../assets/icons/heart.png"
interface Response {
    userId: number;
    username: string;
    comment: string;
    date: string;
    avatar: string;
    likes: number;
    isYourComment: boolean,
}

interface LessonCommentItem {
    userId: number;
    username: string;
    comment: string;
    date: string;
    avatar: string;
    likes: number;
    responces: Response[];
    isYourComment: boolean,
}

interface LessonCommentCardProps {
    item: LessonCommentItem;
}

const LessonCommentCard = ({ item }: LessonCommentCardProps) => {
    return (<>
        <div className={`${styles.comment} ${item.isYourComment ?  styles.yourComment : ""}`}>
            <img src={item.avatar} alt="Logo"
                className={styles.comment__image}
            />
            <div
                className={styles.comment__content}
            >
                <div className={styles.comment__header}>
                    <h4 className={styles.comment__title}>{item.username}</h4>
                    <p className={styles.comment__date}>{item.date}</p>

                </div>
                <p className={styles.comment__text}>{item.comment}</p>
                <div className={styles.comment__footer}>
                    <div className={styles.comment__heart}>
                        <img src={Heart} alt="heart"
                            className={styles.comment__heart__image}
                        />
                        <p className={item.isYourComment ? styles.comment__heart__text__white : styles.comment__heart__text}>
                            {item.likes}
                        </p>
                    </div>

                    <p  className={item.isYourComment ? styles.comment__like__white : styles.comment__like}>
                        Нравится
                    </p>
                    <p  className={item.isYourComment ? styles.comment__reply__white : styles.comment__reply}>
                        {item.responces.length} ответов
                    </p>
                </div>
            </div>
        </div>

        {item.responces.map(itemReply => (
            <div className={`${styles.reply}  ${itemReply.isYourComment ?  styles.yourComment : ""}`} key={itemReply.userId}>
          <img src={itemReply.avatar} alt="Logo"
                className={styles.comment__image}
            />
            <div
                className={styles.comment__content}
            >
                <div className={styles.comment__header}>
                    <h4 className={styles.comment__title}>{itemReply.username}</h4>
                    <p className={styles.comment__date}>{itemReply.date}</p>

                </div>

                <p className={styles.comment__text}>{itemReply.comment}</p>

                <div className={styles.comment__footer}>
                    <div className={styles.comment__heart}>
                        <img src={Heart} alt="heart"
                            className={styles.comment__heart__image}
                        />
                        <p className={itemReply.isYourComment ? styles.comment__heart__text__white : styles.comment__heart__text}>
                            {itemReply.likes}
                        </p>
                    </div>

                    <p  className={itemReply.isYourComment ? styles.comment__like__white : styles.comment__like}>
                        Нравится
                    </p>
                    <p   className={itemReply.isYourComment ? styles.comment__reply__white : styles.comment__reply}>
                      0  ответов
                    </p>
                </div>
            </div>
            </div>
        ))}
    </>
    );
};

export default LessonCommentCard;
*/