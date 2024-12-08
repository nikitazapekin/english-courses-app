/*import React, { useState } from "react";
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
    const [showResponses, setShowResponses] = useState(false); // Состояние для отображения ответов

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
                        {item.responses.length > 0 && (
                            <button onClick={() => setShowResponses(!showResponses)}>
                                {showResponses ? "Скрыть ответы" : `Показать ответы (${item.responses.length})`}
                            </button>
                        )}
                    </div>
                </div>
            </div>

           
            {!showResponses &&
                item.responses.map((response) => (
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
*/

/*

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
*/

 

import styles from "./LessonComments.module.scss";
import Heart from "../../../assets/icons/heart.png"
import {CommentsProps, LessonCommentItem, Response  } from "../types"
import ResponsePanel from "../ResponsePanel/ResponsePanel";
import { useState } from "react";
import LessonReplyCard from "./LessonReplyCard";
 
interface LessonCommentCardProps {
    item: LessonCommentItem;
}

const LessonCommentCard = ({ item }: LessonCommentCardProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
   const [isShowResponces, setIsShowResponces] =useState(false)
    const handleOpen = () => {
        setIsOpen(prev=> true)
    }
    const handleClose= () => {
        setIsOpen(prev=> false)
    }
    const handleShowResponces = ()=> {
setIsShowResponces(prev=>!prev)
    }
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
                    <p  className={item.isYourComment ? styles.comment__like__white : styles.comment__like}
                    onClick={handleOpen}
                    >
                       Ответить
                    </p>
                    <p  className={item.isYourComment ? styles.comment__reply__white : styles.comment__reply} onClick={handleShowResponces}>
                        
                      {item.responces && item.responces.length} ответов
                    </p>
                </div>
            </div>
        </div>
        {isOpen && (

            <ResponsePanel id={item.commentId} to={item.username} 
            handleClose={handleClose}
            />
        )}
 
 {isShowResponces && item.responces?.map((reply) => (
    <LessonReplyCard 
        key={reply.userId} 
        itemReply={reply} 
        commentId={item.commentId} 
    />
))}

    </>
    );
};

export default LessonCommentCard;
 