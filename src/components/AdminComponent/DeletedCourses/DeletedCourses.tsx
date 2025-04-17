import { useEffect, useState } from "react";
import styles from "./DeletedCourses.module.scss";
import adminService from "../../../services/Admin";
import DeletedCard from "./DeletedCard/DeletedCard";
import EditModal from "./EditModal/EditModal";

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
    const [cards, setCards] = useState<CourseDetails[]>();
    const [selected, setSelected] = useState<CourseDetails>();
    const [isOpenEdit, setIsOpenEdit] = useState(false);

    useEffect(() => {
        const handleGet = async () => {
            try {
                const resp = await adminService.GetBannedCourses();
                setCards(resp.data.banned);
            } catch (e) {
                console.error(e);
            }
        };
        handleGet();
    }, []);

    const handleOpen = (item: CourseDetails) => {
        setSelected(item);
        setIsOpenEdit(true);
    };

    const handleClose = () => {
        setIsOpenEdit(false);
    };

    const handleDeleteBan = async (banId: number) => {
        console.log("id", banId)
        try {
            
            setCards(prev => prev?.map(course => ({
                ...course,
                bans_data: course.bans_data.filter(ban => ban.id !== banId)
            })));
        } catch (e) {
            console.error(e);
        }
    };

    const handleUpdateBan = async (banId: number, newText: string) => {
        console.log("id", banId)
        try {
        
            setCards(prev => prev?.map(course => ({
                ...course,
                bans_data: course.bans_data.map(ban =>
                    ban.id === banId ? { ...ban, ban_text: newText } : ban
                )
            })));
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className={styles.banned}>
            <h1 className={styles.banned__title}>
                Заблокированные курсы
            </h1>
            <div className={styles.cards}>
                {cards && cards.map(item => (
                    <DeletedCard
                        key={item.id}
                        item={item}
                        handleOpen={handleOpen}
                    />
                ))}
            </div>
            {isOpenEdit && selected && (
                <EditModal
                    handler={handleClose}
                    bans={selected.bans_data}
                    onDelete={handleDeleteBan}
                    onUpdate={handleUpdateBan}
                />
            )}
        </div>
    );
};

export default DeletedCourses;

/* import { useEffect, useState } from "react";
import styles from "./DeletedCourses.module.scss"
import adminService from "../../../services/Admin";
import DeletedCard from "./DeletedCard/DeletedCard";
import EditModal from "./EditModal/EditModal";

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
    const [cards, setCards] = useState<CourseDetails[]>()
    const [selected, setSelected] = useState<CourseDetails>()
    useEffect(() => {
        const handleGet = async () => {
            try {
                const resp = await adminService.GetBannedCourses()
                console.log(resp.data)
                setCards(resp.data.banned)
            } catch (e) {
                console.log(e)
            }
        }
        handleGet()
    }, [])
    const [isOpenEdit, setIsOpenEdit] = useState(false)

    const handleOpen = (item: CourseDetails) => {
        setIsOpenEdit(prev => !prev)
        setSelected(item)
    }
    const handleClose = () => {
        setIsOpenEdit(prev => !prev)

    }
   
    return (
        <div className={styles.banned}>
            <h1 className={styles.banned__title}>
                Заблокированные курсы
            </h1>
            <div className={styles.cards}>
                {cards && cards.map(item => (

                    <DeletedCard
                        key={item.id}
                        item={item}
                        handleOpen={handleOpen}

                    />
                ))}
            </div>
            {isOpenEdit && (

                <EditModal
                    handler={handleClose}
                    bans={selected!.bans_data}
                />
            )}
           
        </div>);
}

export default DeletedCourses;
 */