


import styles from "./LessonComments.module.scss";
import LessonCommentCard from "./LessonCommentCard";

import { CommentsProps, LessonCommentItem, Response } from "../types"



interface Comments {



    data: {

        id: number,
        lesson_id: number,
        author_id: number,
        author_name: string,
        text: string,
        created_at: string,
        likes: number,
        parent_comment_id: number | null,
        author: {
            id: number,
            username: string,
            email: string,
            avatar: string,
            role: string,
            country: string,
            city: string
        }
    }[]


}
const LessonComments = (data: Comments) => {
    console.log("DATA", data.data)
    return (
        <div className={styles.comments}>

            {data && (
                <>
                    {data.data && (
                        <>
                            {data.data.map((item, index) => (
                                <LessonCommentCard item={item} key={index} />
                            ))}

                        </>
                    )}
                </>
            )}

            {/*
            {data.map((item) => (
                <LessonCommentCard item={item} key={item.userId} />
                ))}
                */}
        </div>
    );
};

export default LessonComments;


