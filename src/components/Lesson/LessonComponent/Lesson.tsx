/*
*/
/*
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
    const addResponseComment = (text: string, replyToUser?: string) => {
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

*/

 
import styles from "./Lesson.module.scss"
import { useParams } from "react-router-dom";
import { courseMaterials } from "../../../utils/courseMaterials";
import LessonHeader from "../LessonHeader/LessonHeader";
import DownloadFile from "../DownloadFile/DownloadFile";
import LessonPanel from "../LessonPanel/LessonPanel";
import LessonCommentsHeader from "../LessonCommentsHeader/LessonCommentsHeader";
import LessonComments from "../LessonComments/LessonComments";






import Avatar from "../../../assets/avatars/avatar1.png"
import Avatar2 from "../../../assets/avatars/avatar2.png"
 import {LessonCommentItem, Response  } from "../types"
import { useState } from "react";
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



const LessonComponent = () => {

    const { theme } = useParams();

    const [comments, setComments] = useState<LessonCommentItem[]>(data);

    const handleAddComment = ()  => {
//console.log(1)
const newComment:  LessonCommentItem ={

    userId: Date.now(),
    username: "Test",
  
comment: "test",
date: new Date().toLocaleDateString(),
avatar: Avatar,
likes: 0,
//isLiked: false,
isYourComment: true,
responces: null,

}

setComments((prev) => [...prev, newComment]);
 
    }

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

                <LessonPanel handleAddComment={handleAddComment} />

                <LessonCommentsHeader />

                <LessonComments data={comments}/>
            
            </div>
        </div>
    </div>);
}

export default LessonComponent;
 