import styles from "./LessonsList.module.scss"
import { useParams } from "react-router-dom";
import { lessons } from "./consts";
import LessonsCard from "../LessonsCard/LessonsCard";

const LessonsList = () => {

    const { id } = useParams();

    return (
        <div className={styles.lessons}>
            <div className={styles.lessons__inner}>
 
         <h1 className={styles.lessons__title}>
                    {id}
                </h1>
             

                <div className={styles.lessons__list}>
                    {lessons.map(item => (
                        <LessonsCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LessonsList;


