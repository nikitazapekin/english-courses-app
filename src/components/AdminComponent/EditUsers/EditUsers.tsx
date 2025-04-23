// EditUsers.tsx
import { useEffect, useState } from "react";
import styles from "./EditUsers.module.scss";
import WarningsUserService from "../../../services/WarningsUser";
import EditCard from "./EditCard/EditCard";
import EditModal from "./EditModal/EditModal";

interface Cards {
    user_id: number,
    username: string,
    email: string,
    role: string,
    warning_id: number,
    warning_text: string,
}

const EditUsers = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [cards, setCards] = useState<Cards[]>([]);
    const [selectedWarning, setSelectedWarning] = useState<Cards | null>(null);

    const fetchBannedCourses = async () => {
        setIsLoading(true);
        try {
            const resp = await WarningsUserService.GetWarnings()
            setCards(resp.data.warnings)
        } catch (e) {
            console.error("Ошибка при загрузке предупреждений:", e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchBannedCourses();
    }, []);

    const handleOpen = (e: React.MouseEvent, item: Cards) => {
        e.stopPropagation();
        setSelectedWarning(item);
        setIsOpenModal(true);
    }

    const handleDelete = async (warningId: number) => {
        try {
         //   await WarningsUserService.DeleteWarning(warningId);
            fetchBannedCourses();
            setIsOpenModal(false);
        } catch (e) {
            console.error("Ошибка при удалении предупреждения:", e);
        }
    }

    const handleUpdate = async (warningId: number, newText: string) => {
        try {
          //  await WarningsUserService.UpdateWarning(warningId, { warning_text: newText });
            fetchBannedCourses();
            setIsOpenModal(false);
        } catch (e) {
            console.error("Ошибка при обновлении предупреждения:", e);
        }
    }

    return (
        <div className={styles.banned}>
            <h1 className={styles.banned__title}>
                Пользователи с предупреждениями
            </h1>
            <div className={styles.cards}>
                {isLoading && <div>Загрузка...</div>}

                {cards.map(item => (
                    <EditCard
                        handleOpen={(e) => handleOpen(e, item)}
                        key={item.user_id}
                        item={item}
                    />
                ))}
            </div>
            {isOpenModal && selectedWarning && (
                <EditModal
                    item={selectedWarning}
                    handler={() => setIsOpenModal(false)}
                    onDelete={handleDelete}
                    onUpdate={handleUpdate}
                />
            )}
        </div>
    );
}

export default EditUsers;

/* // DeletedUsers.tsx
import { useEffect, useState } from "react";
import styles from "./EditUsers.module.scss";
import adminService from "../../../services/Admin";

import BanUserService from "../../../services/BanUserService";
import Item from "../../CoursesList/Item/Item";
import WarningsUserService from "../../../services/WarningsUser";
import EditCard from "./EditCard/EditCard";
import EditModal from "./EditModal/EditModal";
interface Cards {



    user_id: number,
    username: string,
    email: string,
    role: string,
    warning_id: number,
    warning_text: string,

    


}

const EditUsers = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [cards, setCards] = useState<Cards[]>([]);

    const fetchBannedCourses = async () => {
        setIsLoading(true);
        try {
            const resp = await WarningsUserService.GetWarnings()
            setCards(resp.data.warnings)
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
    const handleDelete = async (warningId: number) => {

    }
    const handleUpdate = async () => {

    }
 
    return (
        <div className={styles.banned}>
            <h1 className={styles.banned__title}>
                Редактируемые пользователи
            </h1>
            <div className={styles.cards}>
                {isLoading && <div>Загрузка...</div>}

                {cards.map(item => (
                    <EditCard
                        handleOpen={handleOpen}
                        key={item.user_id}
                        item={item}
                    />
                ))}

              
            </div>
            {isOpenModal && (
                <EditModal
                    items={cards}
                    //     items={cards}
                    handler={handleOpen}
                    onDelete={handleDelete}
                    onUpdate={handleUpdate}
                />
            )}
       
        </div>
    );
}

export default EditUsers;
 */