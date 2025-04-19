import { useEffect, useState } from "react";
import styles from "./WarningCourses.module.scss";
import adminService from "../../../services/Admin";
import WarningCard from "./WarningCard/WarningCard";
import EditModal from "./EditModal/EditModal";
import WarningsService from "../../../services/Warnings";

interface WarningsDetails {
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
    warnings: {
        id: number,
        course_id: number,
        warning_text: string;
        warning_date: string;
        is_active: boolean
    }[];
    warnings_data: {
        id: number,
        course_id: number,
        warning_text: string;
        warning_date: string;
        is_active: boolean
    }[];
    isvisible: boolean;
}

const WarningCourses = () => {
    const [cards, setCards] = useState<WarningsDetails[]>([]);
    const [selected, setSelected] = useState<WarningsDetails | null>(null);
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const fetchWarningCourses = async () => {
        setIsLoading(true);
        try {
            const resp = await adminService.GetWarningCourses();
            console.log("res", resp.data);
            setCards(resp.data.banned || []);
        } catch (e) {
            console.error("Ошибка при загрузке курсов с предупреждениями:", e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchWarningCourses();
    }, []);

    const handleOpen = (item: WarningsDetails) => {
        setSelected(item);
        setIsOpenEdit(true);
    };
        
    const handleClose = () => {
        setIsOpenEdit(false);
        setSelected(null);
    };
    const handleDeleteAllWarnings = async (courseId: number) => {
        try {
            await WarningsService.DeleteWarnings(String(courseId))
            fetchWarningCourses();
            handleClose();
        } catch (e) {
            console.error("Ошибка при удалении всех предупреждений:", e);
        }
    };

    const handleDeleteWarning = async (warningId: number) => {
        try {
           
            await WarningsService.DeleteWarning(String(warningId))
            const updatedCards = cards.map(course => ({
                ...course,
                warnings_data: course.warnings_data.filter(warning => warning.id !== warningId)
            }));

            setCards(updatedCards);
            if (selected) {
                setSelected({
                    ...selected,
                    warnings_data: selected.warnings_data.filter(warning => warning.id !== warningId)
                });
                if (selected.warnings_data.length === 1) {
                    fetchWarningCourses();
                    handleClose();
                }
            }
        } catch (e) {
            console.error("Ошибка при удалении предупреждения:", e);
        }
    };

    const handleUpdateWarning = async (warningId: number, newText: string) => {
        try {
            await WarningsService.UpdateWarning(String(warningId), newText)
            const updatedCards = cards.map(course => ({
                ...course,
                warnings_data: course.warnings_data.map(warning =>
                    warning.id === warningId ? { ...warning, warning_text: newText } : warning
                )
            }));

            setCards(updatedCards);
            if (selected) {
                setSelected({
                    ...selected,
                    warnings_data: selected.warnings_data.map(warning =>
                        warning.id === warningId ? { ...warning, warning_text: newText } : warning
                    )
                });
            }
        } catch (e) {
            console.error("Ошибка при обновлении предупреждения:", e);
        }
    };

    return (
        <div className={styles.warning}>
            <h1 className={styles.warning__title}>
                Курсы с правками
            </h1>
    
            {isLoading ? (
                <div>Загрузка...</div>
            ) : (
                <div className={styles.cards}>
                    {cards.length > 0 ? (
                        cards.map(item => (
                            <WarningCard
                                key={item.id}
                                item={item}
                                handleOpen={handleOpen}
                            />
                        ))
                    ) : (
                        <div>Нет курсов с предупреждениями</div>
                    )}
                </div>
            )}

            {isOpenEdit && selected && (
                <EditModal
                    handler={handleClose}
                    warnings={selected.warnings_data}
                    onDelete={handleDeleteWarning}
                    onUpdate={handleUpdateWarning}
                    onDeleteAll={() => handleDeleteAllWarnings(selected.course_id)}
                />
            )}
        </div>
    );
}

export default WarningCourses;

/* import { useEffect, useState } from "react";
import styles from "./WarningCourses.module.scss"
import adminService from "../../../services/Admin";
import WarningCard from "./WarningCard/WarningCard";
import EditModal from "./EditModal/EditModal";
 

interface WarningsDetails {
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
    warnings:
    {
        id: number,
        course_id: number,
        warning_text: string;
        warning_date: string;
        is_active: boolean
    }[];



    warnings_data: {
        id: number,
        course_id: number,
        warning_text: string;
        warning_date: string;
        is_active: boolean
    }[];
    isvisible: boolean;

}

const WarningCourses = () => {
    const [cards, setCards] = useState<WarningsDetails[]>([]);
    const [selected, setSelected] = useState<WarningsDetails | null>(null);
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const fetchBannedCourses = async () => {
        setIsLoading(true);
        try {
            const resp = await adminService.GetWarningCourses();
            console.log("res", resp.data)
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

    const handleOpen = (item: WarningsDetails) => {
        setSelected(item);
        setIsOpenEdit(true);
        };
        
        const handleClose = () => {
            setIsOpenEdit(false);
            setSelected(null);
            };
           
    const handleDeleteAllBans = async (courseId: number) => {

       try {
        
            fetchBannedCourses();
            handleClose();
        } catch (e) {
            console.error("Ошибка при удалении всех блокировок:", e);
        } 
    };


    const handleDeleteBan = async (banId: number) => {
        try {
          
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

    return (<div className={styles.banned}>
    
    
         <h1 className={styles.banned__title}>
                  Курсы с правками
                </h1>
    
                {isLoading ? (
                    <div>Загрузка...</div>
                ) : (
                    <div className={styles.cards}>
                        {cards.length > 0 ? (
                            cards.map(item => (
                                <WarningCard
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
                        warnings={selected.warnings}
                        onDelete={handleDeleteBan}
                        onUpdate={handleUpdateBan}
                        onDeleteAll={() => handleDeleteAllBans(selected.course_id)}
                    />
                )}

                

    </div>);
}

export default WarningCourses;








  */