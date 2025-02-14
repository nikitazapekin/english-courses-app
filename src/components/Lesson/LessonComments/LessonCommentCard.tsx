
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
   const [liked, setLiked] = useState(false);
    const handleOpen = () => {
        setIsOpen(prev=> true)
    }
    const handleClose= () => {
        setIsOpen(prev=> false)
    }
    const handleShowResponces = ()=> {
setIsShowResponces(prev=>!prev)
    }
    const handleLikeClick = () => {
        setLiked((prev) => !prev);
      };
    
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
                    <div className={styles.comment__heart}  onClick={handleLikeClick} >


 
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
 