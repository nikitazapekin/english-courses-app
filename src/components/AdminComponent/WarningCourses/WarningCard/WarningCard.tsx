import styles from "./DeletedCard.module.scss";
import getCourseKeyword from "../../../../helpers/getCourseKeyword";
/* interface Ban {
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
 */



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


interface Props {
    item: WarningsDetails ;
    handleOpen: (item: WarningsDetails ) => void;
}

const WarningCard = ({ item, handleOpen }: Props) => {
    return (
        <div className={styles.card}>
            <div className={styles.card__content}>
                <img
                    className={styles.card__image}
                    src={item.course_logo}
                    alt="course logo"
                />
                <div className={styles.card__preview}>
                    <h3 className={styles.card__title}>
                        {item.title}
                    </h3>
                    <p className={styles.card__describtion}>
                        {item.description}
                    </p>
                    <div className={styles.card__for}>
                        {item.course_for.map((item_for, index) => (
                            <div className={styles.card__for__item} key={index}>
                                {getCourseKeyword(item_for)}
                            </div>
                        ))}
                    </div>
                    <p className={styles.vis}>
                        Курс виден другим пользователям: {item.isvisible ? "Да" : "Нет"}
                    </p>
                </div>
            </div>
            <p
                className={styles.card__edit}
                onClick={() => handleOpen(item)}
            >
                Редактировать
            </p>
        </div>
    );
};

export default WarningCard;

 