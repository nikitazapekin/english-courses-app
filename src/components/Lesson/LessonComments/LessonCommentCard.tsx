import styles from "./LessonComments.module.scss";
import Heart from "../../../assets/icons/heart.png"
import { CommentsProps, LessonCommentItem, Response } from "../types"
import ResponsePanel from "../ResponsePanel/ResponsePanel";
import { useState } from "react";
import LessonReplyCard from "./LessonReplyCard";
import CommentsService from "../../../services/Comments";
import LessonComponentReply from "./LessonComponentReply/LessonComponentReply";

import Ban from "../../../assets/admin/courses/warning.png"
import Edit from "../../../assets/admin/courses/pen.png"
import Delete from "../../../assets/admin/courses/delete.png"
import { useLocation } from "react-router-dom";
interface Commentt {
    id: number;
    lesson_id: number;
    author_id: number;
    author_name: string;
    text: string;
    created_at: string;
    likes: number;
    parent_comment_id: number | null;
    liked_by: Number[];
    author: {
        id: number;
        username: string;
        email: string;
        avatar: string;
        role: string;
        country: string;
        city: string;
    };
    repliesCount: number;
    replies: {
        id: number;
        comment_id: number;
        lesson_id: number;
        author_id: number;
        author_name: string;
        text: string;
        created_at: string;
        likes: number;
        parent_id: number;
        liked_by: Number[];
        author: {
            id: number;
            username: string;
            email: string;
            avatar: string;
            role: string;
            country: string;
            city: string;
        };
    }[];
}

interface LessonCommentCardProps {
    isAdmin: boolean,
    item: {
        id: number,
        lesson_id: number,
        author_id: number,
        author_name: string,
        text: string,
        created_at: string,
        likes: number,
        parent_comment_id: number | null,
        liked_by: Number[]
        author: {
            id: number,
            username: string,
            email: string,
            avatar: string,
            role: string,
            country: string,
            city: string
        }
        repliesCount: number,
        replies:
        {
            liked_by: Number[]
            id: number,
            comment_id: number,
            lesson_id: number,
            author_id: number,
            author_name: string,
            text: string,
            created_at: string,
            likes: number,
            parent_id: number,
            author: {
                id: number,
                username: string,
                email: string,
                avatar: string,
                role: string,
                country: string,
                city: string,
            }
        }[]
    }
    user: {
        id: number;
        email: string;
        auth_date: string;
        user_id: number;
        courses: string;
        phone: string;
        country: string;
        city: string;
        role: string;
        username: string;
        describtion: string;
    };
    handleUpdateLike: (id: number, comment_id: number) => void,

    handleOpenBan: (id: number) => void;
    handleOpenWarning: (id: number) => void;
    setComments: React.Dispatch<React.SetStateAction<Commentt[]>>;
    userAvatar: string
}

const LessonCommentCard = ({ isAdmin, item, user, handleUpdateLike, setComments, userAvatar, handleOpenBan, handleOpenWarning }: LessonCommentCardProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isShowResponces, setIsShowResponces] = useState(false)
    const [liked, setLiked] = useState(false);

    const handleOpen = () => {
        setIsOpen(prev => true)
    }
    const handleClose = () => {
        setIsOpen(prev => false)
    }
    const handleShowResponces = () => {
        setIsShowResponces(prev => !prev)
    }
    const handleLikeClick = async (id: string) => {
        setLiked((prev) => !prev);
        try {
            const reponse = await CommentsService.LikeComment({ comment_id: Number(id) })
        } catch {
        }
        handleUpdateLike(Number(id), item.id)
    };
    const formattedDate = new Date(item.created_at).toLocaleDateString("ru-RU").replace(/\//g, ".");


    const location = useLocation();
    const pathParts = location.pathname.split('/');
    const secondToLastEndpoint = pathParts[pathParts.length - 2];


    const handleDeleteComment = async (commentId: number) => {
        try {
            await CommentsService.DeleteComment(commentId, Number(secondToLastEndpoint))
            setComments(prevComments => prevComments.filter(comment => comment.id !== commentId))
        } catch (error) {
            console.error("Ошибка при удалении комментария:", error);
        }
    };


    return (
        <>
            <div className={`${styles.comment}`}>
                <img src={item.author.avatar} alt="Logo"
                    className={styles.comment__image}
                />
                <div className={styles.comment__content}>
                    <div className={styles.comment__header}>
                        <div className={styles.wrapper}>
                            <h4 className={styles.comment__title}>
                                {item.author.username}
                                {isAdmin ? (
                                    item.author.role === "tutor" ? " (Администратор)" : ""
                                ) : (
                                    item.author.role === "tutor" && " (Репетитор)"
                                )}
                            </h4>
                         
                            {isAdmin && (
                                <>
                                    <img src={Edit}
                                        onClick={() => handleOpenWarning(item.author_id)}
                                        className={styles.edit}
                                        alt="icon"
                                    />
                                    <img src={Ban}
                                        onClick={() => handleOpenBan(item.author_id)}
                                        className={styles.ban}
                                        alt="icon"
                                    />
                                    <img src={Delete}
                                        onClick={() => handleDeleteComment(item.id)}
                                        className={styles.ban}
                                        alt="icon"
                                    />
                                </>
                            )}
                        </div>
                        <p className={styles.comment__date}>{formattedDate}</p>
                    </div>
                    <p className={styles.comment__text}>{item.text}</p>
                    <div className={styles.comment__footer}>
                        <div className={styles.comment__heart}
                            onClick={() => handleLikeClick(String(item.id))}
                        >
                            <svg
                                className={`${styles.comment__heart__svg} ${item.liked_by.includes(user.id) ? styles.liked : ""}`}
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
                            <p className={styles.comment__heart__text}>
                                {item.likes}
                            </p>
                        </div>
                        <p className={styles.comment__like}>
                            Нравится
                        </p>
                        <p className={styles.comment__like}
                            onClick={handleOpen}
                        >
                            Ответить
                        </p>
                        <p className={styles.comment__like}
                            onClick={handleShowResponces}
                        >
                            Ответов  {item.repliesCount}
                        </p>
                    </div>
                </div>
            </div>
            {isOpen && (
                <ResponsePanel
                    id={item.id}
                    to={item.author.username}
                    user={user}
                    setComments={setComments}
                    handleClose={handleClose}
                    userAvatar={userAvatar}
                />
            )}
            {isShowResponces && (
                <>
                    {item.replies.map(nested => (
                        <LessonComponentReply
                            userAvatar={userAvatar}
                            handleOpen={handleOpen}
                            key={nested.id}
                            nested={nested}
                        />
                    ))}
                </>
            )}
        </>
    );
};

export default LessonCommentCard;
