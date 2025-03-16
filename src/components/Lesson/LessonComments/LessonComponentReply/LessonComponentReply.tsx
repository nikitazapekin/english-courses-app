import { useState } from "react"
import styles from "./LessonComponentReply.module.scss"
import CommentsService from "../../../../services/Comments"
interface Item {
    nested: {
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
    },
    //  handleLikeReply: (id: string) => void
    handleOpen: () => void
}
const LessonComponentReply = ({ nested,// handleLikeReply,
    handleOpen }: Item) => {


    const [isLiked, setIsLiked] = useState(false)
    const handleLikeReply = async (id: string) => {
        setIsLiked(prev => !prev)
        try {
            const reponse = await CommentsService.LikeReply({ reply_id: Number(id) })
        } catch {

        }
    }




    return (



        <div>
            <div className={`${styles.commentNested}`}>
                <img src={nested.author.avatar} alt="Logo"
                    className={styles.comment__image}
                />
                <div
                    className={styles.comment__content}
                >
                    <div className={styles.comment__header}>
                        <h4 className={styles.comment__title}>{nested.author.username} {nested.author.username == "tutor" && <>(Репетитор)</>}</h4>
                        <p className={styles.comment__date}>2023.12.22</p>

                    </div>
                    <p className={styles.comment__text}>{nested.text}</p>
                    <div className={styles.comment__footer}>
                        <div className={styles.comment__heart}
                       
                            onClick={() => handleLikeReply(String(nested.id))}
                        >

                            <svg
                                className={`${styles.comment__heart__svg} ${isLiked ? styles.liked : ""}`}
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
                                {nested.likes}
                            </p>

                        </div>
                        <p className={styles.comment__like}

                        >
                            Нравится
                        </p>
                        <p className={styles.comment__like}
                            onClick={handleOpen}
                        >
                            Ответить
                        </p>


                    </div>
                </div>
            </div>

        </div>


    );
}

export default LessonComponentReply;