 


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

 
        