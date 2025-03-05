import { useNavigate } from "react-router-dom"
import styles from "./TutorCourse.module.scss"
interface TutorCourseProps {
    item: {

        id: number,
        author: string,
        title: string,
        description: string,
        course_for: String[],
        release_date: string,
        course_logo: string,
    }
}
const TutorCourse = ({ item }: TutorCourseProps) => {
    const navigate = useNavigate()
    const handleRedirect = () => {
navigate(`/tutor/personal/courses/${item.id}`)
    }
    return (
        <div className={styles.card}
        onClick={handleRedirect}
        >
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
                    {
                        item.course_for.map(item_for => (
                            <div className={styles.card__for__item}>
                                {item_for}
                            </div>
                        ))
                    }
                </div>
                
            </div>

        </div>);
}

export default TutorCourse;