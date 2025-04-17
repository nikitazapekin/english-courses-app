import { useEffect, useState } from "react";
import styles from "./DeletedCourses.module.scss"
import adminService from "../../../services/Admin";
import DeletedCard from "./DeletedCard/DeletedCard";







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

interface BannedResp {
    banned: CourseDetails[]
}



const DeletedCourses = () => {
    const [cards, setCards] = useState<CourseDetails[]>()
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
                    />
                ))}
            </div>
        </div>);
}

export default DeletedCourses;
 