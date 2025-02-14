
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
import { LessonCommentItem, Response } from "../types"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ReplyToSelector } from "../../../store/selectors/ReplyTo.selector";
const data: LessonCommentItem[] = [
    {
        userId: 1,
        username: "Test",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at velit ligula. Ut urna purus, hendrerit a eros malesuada, blandit egestas augue. Vestibulum eu sem ut augue pretium ullamcorper. Curabitur velit elit, volutpat ut venenatis sit amet, facilisis et magna. Pellentesque laoreet velit at arcu hendrerit, eget molestie mauris semper. Maecenas id neque fermentum, tincidunt justo sit amet, dapibus turpis. Sed fringilla id enim sit amet dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec iaculis metus arcu, sit amet lobortis quam porta id. Sed sit amet diam pretium, faucibus elit et, auctor lacus. Nulla vel consequat metus, et tempor lacus. Phasellus congue felis vel consequat bibendum. Etiam eget ultricies dolor. Curabitur eros est, viverra sit amet lorem et, tempus laoreet sapien. Integer porta eros eget elementum cursus.",
        date: "22.12.2024",
        avatar: Avatar,
        likes: 0,
        isYourComment: false,
        commentId: 0,
        responces: [
            {
                userId: 2,
                username: "Alex",
                comment: "Lorem ipsum dolor sit amet...",
                date: "22.12.2024",
                avatar: Avatar,
                likes: 0,
                isYourComment: false,
                to: "Test"
            },
            {
                userId: 3,
                username: "Alex",
                comment: "Lorem ipsum dolor sit amet...",
                date: "22.12.2024",
                avatar: Avatar2,
                likes: 0,
                isYourComment: false,
                to: "Test"
            },
            {
                userId: 5,
                username: "You",
                comment: "Lorem ipsum dolor sit amet...",
                date: "22.12.2024",
                avatar: Avatar2,
                likes: 0,
                isYourComment: true,
                to: "Test"
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
        commentId: 1,
        responces: []


    }
];



const LessonComponent = () => {

    const { theme } = useParams();

    const [comments, setComments] = useState<LessonCommentItem[]>(data);

    const handleAddComment = (text: string) => {

        const newComment: LessonCommentItem = {

            userId: Date.now(),
            username: "Вы",

            comment: text,
            date: new Date().toLocaleDateString(),
            avatar: Avatar,
            likes: 0,

            isYourComment: true,
            responces: null,
     
          commentId: data.length
            
        }

        setComments((prev) => [...prev, newComment]);

    }
   
const {avatar, userId, username, date, comment, likes, isYourComment, to, commentId} = useSelector(ReplyToSelector)
    const handleAddReply = (commentId: number, reply: Response) => {
        setComments((prevComments) =>
            prevComments.map((comment) => {
                if (comment.commentId === commentId) {
             
                    return {
                        ...comment,
                        responces: comment.responces
                            ? [...comment.responces, reply]
                            : [reply],
                    };
                }
                return comment;  
            })
        );
    };
    useEffect(()=> {
        const reply = {
            userId: userId,
            username: username,
        comment: comment,
        date: date,
        avatar: Avatar,
        likes:likes,
        isYourComment: isYourComment,
        to: to
        }
        console.log(reply)
        console.log(commentId)
       if( userId && username && date && comment   && isYourComment && to && commentId>=0) {
console.log("add")
           handleAddReply(commentId, reply)
        }
}, [avatar, userId, username, date, comment, likes, isYourComment, to, commentId])
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

                <LessonComments data={comments}  />

            </div>
        </div>
    </div>);
}

export default LessonComponent;
