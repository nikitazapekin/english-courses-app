import styles from "./LessonsList.module.scss"
import { useParams } from "react-router-dom";
import { lessons, testing } from "./consts";
import LessonsCard from "../LessonsCard/LessonsCard";
import { useState } from "react";
const LessonsList = () => {

    const { id } = useParams();
    const [isLessons, setIsLessons] = useState(true);
    const handleSelect = (value: boolean) => {
        setIsLessons(value)
    }
    return (
        <div className={styles.lessons}>
            <div className={styles.lessons__inner}>

                <h1 className={styles.lessons__title}>
                    {id}
                </h1>
                <h1 className={styles.lessons__text}>
                   Продвинутый курс английского языка для студентов высших учебных заведение технической специализации
                </h1>
                <div className={styles.lessons__panel}>
                    <p className={styles.lessons__panel__text} onClick={() => handleSelect(true)}>
                        Уроки
                    </p>
                    <p className={styles.lessons__panel__text} onClick={() => handleSelect(false)}>
                        Тематические тесты
                    </p>
                </div>
                {isLessons && (
                    <div className={styles.lessons__list}>
                        {lessons.map(item => (
                            <LessonsCard key={item.id} item={item} isLessons={isLessons} />
                        ))}
                    </div>
                )}
                {!isLessons && (
                    <div className={styles.lessons__list}>
                        {testing.map(item => (
                            <LessonsCard key={item.id} item={item}  isLessons={isLessons}  />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default LessonsList;


