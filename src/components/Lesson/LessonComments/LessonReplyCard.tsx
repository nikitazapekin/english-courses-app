import styles from "./LessonComments.module.scss"
import Heart from "../../../assets/icons/heart.png"
import ResponsePanel from "../ResponsePanel/ResponsePanel";
import { useState } from "react";
export interface ResponseProps {
    itemReply: {

        userId: number;
        username: string;
        comment: string;
        date: string;
        avatar: string;
        likes: number;
        isYourComment: boolean
        to: string
    }
    commentId: number,
}


const LessonReplyCard = ({ itemReply, commentId }: ResponseProps) => {
    const [isOpenReply, setIsOpenReply] = useState<{
        reply: boolean
        to: string
    }>({
        reply: false,
        to: ""
    })

    const handleOpenReply = (to: string) => {
        setIsOpenReply({
            reply: true,
            to: to
        })
    }

    const handleClose = () => {
        setIsOpenReply(prev => ({ ...prev, reply: false }));
    }
    const [liked, setLiked] = useState(false);

    const handleLikeClick = () => {
        setLiked((prev) => !prev);
    };
    return (

        <div className={styles.reply__wrapper}>
            <div className={`${styles.reply}  ${itemReply.isYourComment ? styles.yourComment : ""}`} key={itemReply.userId}>
                <img src={itemReply.avatar} alt="Logo"
                    className={styles.comment__image}
                />
                <div
                    className={styles.comment__content}
                >
                    <div className={styles.comment__header}>
                        <h4 className={styles.comment__title}>{itemReply.username} в ответ {itemReply.to} </h4>
                        <p className={styles.comment__date}>{itemReply.date}</p>

                    </div>

                    <p className={styles.comment__text}>{itemReply.comment}</p>

                    <div className={styles.comment__footer}>
                        <div className={styles.comment__heart}
                            onClick={handleLikeClick}
                        >


                            <svg
                                className={`${styles.comment__heart__svg} ${liked ? styles.liked : ""}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                >
                                <path
                                    fill="none"
                                    d="M0 0h24v24H0z"
                                />
                                <path
                                   
                                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                                />
                            </svg>
                            {/*
                    <img src={Heart} alt="heart"
                    className={styles.comment__heart__image}
                    />
                    */}
                            <p className={itemReply.isYourComment ? styles.comment__heart__text__white : styles.comment__heart__text}>
                                {itemReply.likes}
                            </p>
                        </div>

                        <p className={itemReply.isYourComment ? styles.comment__like__white : styles.comment__like}>
                            Нравится
                        </p>
                        <p className={itemReply.isYourComment ? styles.comment__like__white : styles.comment__like} onClick={() => handleOpenReply(itemReply.username)}>
                            Ответить
                        </p>

                    </div>
                </div>
            </div>
            {isOpenReply.reply && (

                <ResponsePanel id={commentId}
                    to={isOpenReply.to}
                    handleClose={handleClose}
                />
            )}
        </div>

    );
}

export default LessonReplyCard;