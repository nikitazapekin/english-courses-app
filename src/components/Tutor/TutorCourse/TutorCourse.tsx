import { useNavigate } from "react-router-dom";
import styles from "./TutorCourse.module.scss";

interface TutorCourseProps {
    item: {
        id: number;
        author: string;
        title: string;
        description: string;
        course_for: String[];
        release_date: string;
        course_logo: string;
    };
}

const TutorCourse = ({ item }: TutorCourseProps) => {
    const navigate = useNavigate();

    const handleRedirect = (event: React.MouseEvent) => {
        event.stopPropagation(); 
        navigate(`/tutor/personal/courses/${item.id}`);
    };

    const handleRedirectCourse = () => {
        navigate(`/card/lessons/${item.id}`);
    };

    return (
        <div
            className={styles.card}
            onClick={handleRedirectCourse}
        >
            <div className={styles.card__content}>
                <img
                    className={styles.card__image}
                    src={item.course_logo}
                    alt="logo"
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
                                {item_for}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <p
                className={styles.card__edit}
                onClick={handleRedirect} 
            >
                Редактировать
            </p>
        </div>
    );
};

export default TutorCourse;
 