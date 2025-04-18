import { useEffect, useState } from "react";
import styles from "./WarningCourses.module.scss"
import adminService from "../../../services/Admin";
const WarningCourses = () => {
   // const [cards, setCards] = useState<CourseDetails[]>([]);
  //  const [selected, setSelected] = useState<CourseDetails | null>(null);
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const fetchBannedCourses = async () => {
        setIsLoading(true);
        try {
            const resp = await adminService.GetWarningCourses();
            console.log("res", resp.data)
//setCards(resp.data.banned || []);
        } catch (e) {
            console.error("Ошибка при загрузке заблокированных курсов:", e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchBannedCourses();
    }, []);

 /*    const handleOpen = (item: CourseDetails) => {
        setSelected(item);
        setIsOpenEdit(true);
    };

    const handleClose = () => {
        setIsOpenEdit(false);
        setSelected(null);
    };
 */

    

    return (<div>
        svdsdvv

    </div>);
}

export default WarningCourses;  


/*
import { useEffect, useState } from "react";
import styles from "./DeletedCourses.module.scss";
import adminService from "../../../services/Admin";
import DeletedCard from "./DeletedCard/DeletedCard";
import EditModal from "./EditModal/EditModal";
import BanService from "../../../services/Ban";

interface Ban {
    id: number;
    course_id: number;
    ban_text: string;
    ban_date: string;
    is_active: boolean;
}

interface CourseDetails {
    id: number;
    course_id: number;
    author: string;
    title: string;
    description: string;
    fulldescription: string;
    course_for: string[];
    course_suitable: string[];
    for_what_reasons: string[];
    about_course: string[];
    tag: string;
    course_rate: string;
    release_date: string;
    course_logo: string;
    warnings: number[];
    bans: Ban[];
    isvisible: boolean;
    bans_data: Ban[];
}

const DeletedCourses = () => {
    const [cards, setCards] = useState<CourseDetails[]>([]);
    const [selected, setSelected] = useState<CourseDetails | null>(null);
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const fetchBannedCourses = async () => {
        setIsLoading(true);
        try {
            const resp = await adminService.GetBannedCourses();
            setCards(resp.data.banned || []);
        } catch (e) {
            console.error("Ошибка при загрузке заблокированных курсов:", e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchBannedCourses();
    }, []);

    const handleOpen = (item: CourseDetails) => {
        setSelected(item);
        setIsOpenEdit(true);
    };

    const handleClose = () => {
        setIsOpenEdit(false);
        setSelected(null);
    };



    const handleDeleteBan = async (banId: number) => {
        try {
            await BanService.DeleteBan(String(banId))
            const updatedCards = cards.map(course => ({
                ...course,
                bans_data: course.bans_data.filter(ban => ban.id !== banId)
            }));

            setCards(updatedCards);
            if (selected) {
                setSelected({
                    ...selected,
                    bans_data: selected.bans_data.filter(ban => ban.id !== banId)
                });
                if (selected.bans_data.length === 1) {
                    fetchBannedCourses();
                    handleClose();
                }
            }
        } catch (e) {
            console.error("Ошибка при удалении блокировки:", e);
        }
    };
    const handleUpdateBan = async (banId: number, newText: string) => {
        try {
            await BanService.UpdateBan(String(banId), newText)
            const updatedCards = cards.map(course => ({
                ...course,
                bans_data: course.bans_data.map(ban =>
                    ban.id === banId ? { ...ban, ban_text: newText } : ban
                )
            }));

            setCards(updatedCards);
            if (selected) {
                setSelected({
                    ...selected,
                    bans_data: selected.bans_data.map(ban =>
                        ban.id === banId ? { ...ban, ban_text: newText } : ban
                    )
                });
            }
        } catch (e) {
            console.error("Ошибка при обновлении блокировки:", e);
        }
    };



    const handleDeleteAllBans = async (courseId: number) => {

        try {
            await BanService.DeleteBans(String(courseId))
            fetchBannedCourses();
            handleClose();
        } catch (e) {
            console.error("Ошибка при удалении всех блокировок:", e);
        }
    };

    return (
        <div className={styles.banned}>
            <h1 className={styles.banned__title}>
                Заблокированные курсы
            </h1>

            {isLoading ? (
                <div>Загрузка...</div>
            ) : (
                <div className={styles.cards}>
                    {cards.length > 0 ? (
                        cards.map(item => (
                            <DeletedCard
                                key={item.id}
                                item={item}
                                handleOpen={handleOpen}
                            />
                        ))
                    ) : (
                        <div>Нет заблокированных курсов</div>
                    )}
                </div>
            )}

            {isOpenEdit && selected && (
                <EditModal
                    handler={handleClose}
                    bans={selected.bans_data}
                    onDelete={handleDeleteBan}
                    onUpdate={handleUpdateBan}
                    onDeleteAll={() => handleDeleteAllBans(selected.course_id)}
                />
            )}
        </div>
    );
};

export default DeletedCourses;

*/