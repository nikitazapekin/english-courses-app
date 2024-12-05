import React, { useState } from "react";
import styles from "./Lesson.module.scss";
import { useParams } from "react-router-dom";
import { courseMaterials } from "../../../utils/courseMaterials";
import LessonHeader from "../LessonHeader/LessonHeader";
import DownloadFile from "../DownloadFile/DownloadFile";
import LessonPanel from "../LessonPanel/LessonPanel";
import LessonCommentsHeader from "../LessonCommentsHeader/LessonCommentsHeader";
import LessonComments from "../LessonComments/LessonComments";
import Avatar from "../../../assets/Personal/Avatar.png";

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

const initialComments: LessonCommentItem[] = [
    {
        userId: 1,
        username: "Test",
        comment: "Lorem ipsum dolor sit amet...",
        date: "22.12.2024",
        avatar: Avatar,
        likes: 0,
        isLiked: false,
        isYourComment: false,
        responses: [],
    },
];

const LessonComponent = () => {
    const { theme } = useParams();
    const [comments, setComments] = useState<LessonCommentItem[]>(initialComments);

    const addComment = (text: string, replyToUser?: string) => {
        const newComment: LessonCommentItem = {
            userId: Date.now(),
            username: replyToUser ? `Ответ на ${replyToUser}` : "Вы",
            comment: text,
            date: new Date().toLocaleDateString(),
            avatar: Avatar,
            likes: 0,
            isLiked: false,
            isYourComment: true,
            responses: [],
        };

        setComments((prev) => [...prev, newComment]);
    };

    const handleLike = (commentId: number, isReply: boolean, parentCommentId?: number) => {
        setComments((prev) =>
            prev.map((comment) => {
                if (comment.userId === commentId && !isReply) {
                    return { ...comment, likes: comment.likes + 1, isLiked: true };
                }
                if (parentCommentId && comment.userId === parentCommentId) {
                    return {
                        ...comment,
                        responses: comment.responses.map((resp) =>
                            resp.userId === commentId
                                ? { ...resp, likes: resp.likes + 1, isLiked: true }
                                : resp
                        ),
                    };
                }
                return comment;
            })
        );
    };

    return (
        <div className={styles.lesson}>
            <div className={styles.lesson__inner}>
                <div className={styles.lesson__title}>
                    <p className={styles.lesson__number}>
                        Урок {courseMaterials[Number(theme)].lesson}
                    </p>
                    <h1 className={styles.lesson__name}>
                        {courseMaterials[Number(theme)].title}
                    </h1>
                </div>
                <p className={styles.lesson__subtitle}>
                    {courseMaterials[Number(theme)].timestampt}
                </p>
                <div className={styles.lesson__content}>
                    <LessonHeader />
                    <iframe
                        className={styles.lesson__video}
                        src={courseMaterials[Number(theme)].video}
                        title="YouTube video player"
                        allowFullScreen
                    />
                    <DownloadFile
                        title={courseMaterials[Number(theme)].material.text}
                        icon={courseMaterials[Number(theme)].material.icon}
                        size={courseMaterials[Number(theme)].material.size}
                        file={courseMaterials[Number(theme)].material.link}
                    />
                    <LessonPanel addComment={addComment} />
                    <LessonCommentsHeader />
                    <LessonComments comments={comments} onAddComment={addComment} onLike={handleLike} />
                </div>
            </div>
        </div>
    );
};

export default LessonComponent;



/* 
import styles from "./Lesson.module.scss"
import { useParams } from "react-router-dom";
import { courseMaterials } from "../../../utils/courseMaterials";
import LessonHeader from "../LessonHeader/LessonHeader";
import DownloadFile from "../DownloadFile/DownloadFile";
import LessonPanel from "../LessonPanel/LessonPanel";
import LessonCommentsHeader from "../LessonCommentsHeader/LessonCommentsHeader";
import LessonComments from "../LessonComments/LessonComments";
const LessonComponent = () => {

    const { theme } = useParams();


    return (<div className={styles.lesson}>
        <div className={styles.lesson__inner}>
            <div className={styles.lesson__title}>
                <p className={styles.lesson__number}>
                    Урок       {courseMaterials[Number(theme)].lesson}
                </p>
                <h1 className={styles.lesson__name}>
                    {courseMaterials[Number(theme)].title}
                </h1>

            </div>
            <p className={styles.lesson__subtitle}>
                {courseMaterials[Number(theme)].timestampt}
            </p>


            <div className={styles.lesson__content}>
                <LessonHeader />

                <iframe className={styles.lesson__video} src={courseMaterials[Number(theme)].video}
                    title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen />
                <DownloadFile title={courseMaterials[Number(theme)].material.text}
                    icon={courseMaterials[Number(theme)].material.icon}
                    size={courseMaterials[Number(theme)].material.size}
                    file={courseMaterials[Number(theme)].material.link}
                />
                <div className={styles.lesson__testing}>
                    Тематический тест по теме
                </div>

                <LessonPanel />

                <LessonCommentsHeader />

                <LessonComments />
            
            </div>
        </div>
    </div>);
}

export default LessonComponent;

 */