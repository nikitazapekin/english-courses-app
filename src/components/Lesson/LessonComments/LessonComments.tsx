import styles from "./LessonComments.module.scss";
import LessonCommentCard from "./LessonCommentCard";

interface Comment {
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

interface User {
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
}

interface LessonCommentsProps {
    data: Comment[];
    user: User;
    handleUpdateLike: (id: number,  comment_id: number) => void
}

const LessonComments = ({ data, user, handleUpdateLike }: LessonCommentsProps) => {
    console.log("DATA", data);
    return (
        <div className={styles.comments}>
            {data && (
                <>
                    {data.map((item, index) => (
                        <LessonCommentCard 
                        handleUpdateLike={handleUpdateLike}
                       
                        item={item} user={user.user}
                        key={index}   />
                    ))}
                </>
            )}
        </div>
    );
};

export default LessonComments;
 