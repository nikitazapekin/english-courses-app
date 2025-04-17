
import { useNavigate } from "react-router-dom"
import styles from "./PersonalCourseCard.module.scss"
import PersonalService from "../../../services/Personal"
interface PersonalCourseProps {
    /*  item: {
 
         id: number,
         author: string,
         title: string,
         description: string,
         course_for: String[],
         release_date: string,
         course_logo: string,
     } */

    item: {

        id: number,
        course_id: number,
        author: string,
        title: string,
        description: string,
        fulldescription: string,
        course_for: String[],
        course_suitable: String[],
        for_what_reasons: String[],
        about_course: String[],
        tag: string,
        course_rate: string,
        release_date: string,
        course_logo: string,
    }
}
const PersonalCourse = ({ item }: PersonalCourseProps) => {
    const navigate = useNavigate()
    const handleRedirect = () => {
        navigate(`/card/lessons/${item.id}`)
    }
    const handleUnsubscribe = async () => {
        try {
            const resp = await PersonalService.UnSubscribeToCourse(String(item.id))


        } catch (e) {

        }
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

                <div className={styles.unsubscribe} onClick={handleUnsubscribe}>
                    Отписаться от курса
                </div>

            </div>

        </div>);
}

export default PersonalCourse;
//UnSubscribeToCourse