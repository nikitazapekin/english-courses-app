import { useEffect, useState } from "react";
import styles from "./DeletedUsers.module.scss"
import adminService from "../../../services/Admin";
import DeletedCard from "./DeletedCard/DeletedCard";
import EditModal from "./EditModal/EditModal";

/*
interface BannedUsersResp {
    success: boolean,
    bannedUsers:
    {
        user_id: number,
        username: string,
        email: string,
        role: string,
        ban_id: number,
        ban_text: string,
        ban_date: string,
        is_active: boolean,
    }[]

}
    */

interface Cards {
    user_id: number,
    username: string,
    email: string,
    role: string,
    ban_id: number,
    ban_text: string,
    ban_date: string,
    is_active: boolean,
}
const DeletedUsers = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [cards, setCards] = useState<Cards[]>([])
    const fetchBannedCourses = async () => {
        setIsLoading(true);
        try {
            const resp = await adminService.GetBannedUsers()
            console.log(resp.data)
            setCards(resp.data.bannedUsers)
            //         setCards(resp.data.banned || []); */
        } catch (e) {
            console.error("Ошибка при загрузке заблокированных курсов:", e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchBannedCourses();
    }, []);

    const handleOpen = () => {
setIsOpenModal(prev=> !prev)
    }

    return (
        <div className={styles.banned}>
            <h1 className={styles.banned__title}>
                Заблокированные пользователи
            </h1>
            <div className={styles.cards}>
                {isLoading && <div>Загрузка...</div>}

                {cards.map(item => (
                    <DeletedCard
                        handleOpen={handleOpen}
                        item={item}
                    />
                ))}
            </div>

{
    isOpenModal && (
        <EditModal 
        
        
        />
    )
}

            {/*
        {isOpenEdit && selected && (
            <EditModal
                handler={handleClose}
                bans={selected.bans_data}
                onDelete={handleDeleteBan}
                onUpdate={handleUpdateBan}
                onDeleteAll={() => handleDeleteAllBans(selected.course_id)}
                />
                )}
                */}
        </div>
    );
}

export default DeletedUsers;