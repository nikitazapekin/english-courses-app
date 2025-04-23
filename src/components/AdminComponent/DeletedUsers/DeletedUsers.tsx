// DeletedUsers.tsx
import { useEffect, useState } from "react";
import styles from "./DeletedUsers.module.scss";
import adminService from "../../../services/Admin";
import DeletedCard from "./DeletedCard/DeletedCard";
import EditModal from "./EditModal/EditModal";
import BanUserService from "../../../services/BanUserService";
import Item from "../../CoursesList/Item/Item";

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
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [cards, setCards] = useState<Cards[]>([]);
    
    const fetchBannedCourses = async () => {
        setIsLoading(true);
        try {
            const resp = await adminService.GetBannedUsers();
            setCards(resp.data.bannedUsers || []);
        } catch (e) {
            console.error("Ошибка при загрузке заблокированных пользователей:", e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchBannedCourses();
    }, []);

    const handleOpen = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsOpenModal(prev => !prev);
    }

    const handleDelete = async (banId: number, userId: number ) => {
        try {

        await BanUserService.DeleteBan(banId, userId)
            setCards(prev => prev.filter(item => item.ban_id !== banId));
        } catch (e) {
            console.error("Ошибка при удалении блокировки:", e);
        }
    };

    const handleUpdate = async (id: number, newText: string, newDate: string) => {
        try {
            setCards(prev => prev.map(item => 
                item.ban_id === id ? { ...item, ban_text: newText, ban_date: newDate } : item
            ));
        } catch (e) {
            console.error("Ошибка при обновлении блокировки:", e);
        }
    };

    return (
        <div className={styles.banned}>
            <h1 className={styles.banned__title}>
                Заблокированные пользователи
            </h1>
            <div className={styles.cards}>
                {isLoading && <div>Загрузка...</div>}

                {cards.map(item => (
                    <DeletedCard
                        key={item.ban_id}
                        handleOpen={handleOpen}
                        item={item}
                    />
                ))}
            </div>

            {isOpenModal && (
                <EditModal 
                    items={cards}
                    handler={handleOpen}
                    onDelete={handleDelete}
                    onUpdate={handleUpdate}
                />
            )}
        </div>
    );
}

export default DeletedUsers;

/* 
// DeletedUsers.tsx
import { useEffect, useState } from "react";
import styles from "./DeletedUsers.module.scss";
import adminService from "../../../services/Admin";
import DeletedCard from "./DeletedCard/DeletedCard";
import EditModal from "./EditModal/EditModal";

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
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [cards, setCards] = useState<Cards[]>([]);
    
    const fetchBannedCourses = async () => {
        setIsLoading(true);
        try {
            const resp = await adminService.GetBannedUsers();
            setCards(resp.data.bannedUsers || []);
        } catch (e) {
            console.error("Ошибка при загрузке заблокированных пользователей:", e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchBannedCourses();
    }, []);

    const handleOpen = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsOpenModal(prev => !prev);
    }

    const handleDelete = async (id: number) => {
        try {
      
            setCards(prev => prev.filter(item => item.ban_id !== id));
        } catch (e) {
            console.error("Ошибка при удалении блокировки:", e);
        }
    };

    const handleUpdate = async (id: number, newText: string) => {
        try {
         
            setCards(prev => prev.map(item => 
                item.ban_id === id ? { ...item, ban_text: newText } : item
            ));
        } catch (e) {
            console.error("Ошибка при обновлении блокировки:", e);
        }
    };

    return (
        <div className={styles.banned}>
            <h1 className={styles.banned__title}>
                Заблокированные пользователи
            </h1>
            <div className={styles.cards}>
                {isLoading && <div>Загрузка...</div>}

                {cards.map(item => (
                    <DeletedCard
                        key={item.ban_id}
                        handleOpen={handleOpen}
                        item={item}
                    />
                ))}
            </div>

            {isOpenModal && (
                <EditModal 
                    items={cards}
                    handler={handleOpen}
                    onDelete={handleDelete}
                    onUpdate={handleUpdate}
                />
            )}
        </div>
    );
}

export default DeletedUsers;  */