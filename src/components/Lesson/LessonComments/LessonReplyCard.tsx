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
    isYourComment:boolean
} 
commentId: number,
}


const LessonReplyCard = ({itemReply, commentId}: ResponseProps ) => {
    const [isOpenReply, setIsOpenReply] = useState<{
        reply: boolean
        to: string
    }>({
        reply: false,
        to: ""
    })
   
    const handleOpenReply= (to: string) => {
        setIsOpenReply({
            reply: true,
            to: to
        })
    }
    
    const handleClose = () => {
        setIsOpenReply(prev => ({ ...prev, reply: false }));
    }
    
    return (

        <div className={styles.reply__wrapper}>
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
                <p  className={itemReply.isYourComment ? styles.comment__like__white : styles.comment__like} onClick={()=>handleOpenReply(itemReply.username)}>
                   Ответить
                </p>

                <p   className={itemReply.isYourComment ? styles.comment__reply__white : styles.comment__reply}>
                  0  ответов
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