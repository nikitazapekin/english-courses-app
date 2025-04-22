import styles from "./LessonComments.module.scss";
import LessonCommentCard from "./LessonCommentCard";

import { useEffect, useState } from "react";
import adminService from "../../../services/Admin";
import BanModal from "../BanModal/BanModal";

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
    handleUpdateLike: (id: number, comment_id: number) => void,
    setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
    userAvatar: string
}



const LessonComments = ({ data, user, handleUpdateLike, setComments, userAvatar }: LessonCommentsProps) => {
    const [isUserAdmin, setIsAdmin] = useState(false)
    useEffect(() => {
        const handleGet = async () => {
            try {
                const resp = await adminService.isAdmin()
                setIsAdmin(resp.data.isAdmin)
            } catch (e) {
                console.log(e)
            }
        }
        handleGet()
    }, [])



    const [isOpenWarning, setIsOpenWaring] = useState(false)
    const [isOpenWBan, setIsOpenBan] = useState(false)
    const [selectedUser, setSelectedUser] = useState(0)

    const handleOpenWarning = (id: number) => {
        setIsOpenWaring(prev => !prev)
        setSelectedUser(id)
    }

    const handleOpenBan = (id: number) => {
        setIsOpenBan(prev => !prev)
        setSelectedUser(id)
    }
    return (
        <div className={styles.comments}>
            {data && (
                <>
                    {data.map((item, index) => (
                        <LessonCommentCard
                            handleUpdateLike={handleUpdateLike}
                            setComments={setComments}
                            isAdmin={isUserAdmin}
                            userAvatar={userAvatar}
                            item={item} user={user.user}
                            handleOpenBan={handleOpenBan}
                            handleOpenWarning={handleOpenWarning}
                            key={index} />
                    ))}
                </>
            )}


            {isOpenWBan && (

                <BanModal
                    selectedUser={selectedUser}

                    handleClose={handleOpenBan}
                />
            )}


        </div>
    );
};

export default LessonComments;
