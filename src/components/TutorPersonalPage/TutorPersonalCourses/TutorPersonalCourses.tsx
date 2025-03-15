import styles from "./tutorPersonalCourses.module.scss"
import { useSelector } from "react-redux";
import { TutorSelector } from "../../../store/selectors/Tutor.selector";
import TutorPamel from "../TutorPanel/TutorPanel";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import TutorService from "../../../services/Tutor";
import TutorsCourses from "../../Tutor/TutorsCourses/TutorsCourses";
interface TutorCoursesResponse {
    id: number,
    author: string,
    title: string,
    description: string,
    course_for: String[],
    release_date: string,
    course_logo: string,
}
const TutorPersonalCoursesComponent = () => {
    const tutor = useSelector(TutorSelector)
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate("/tutor/personal/create")
    }
    const [cards, setCards] = useState<TutorCoursesResponse[]>([])
    useEffect(() => {
        const handleGetCourses = async () => {
            try {

                const response = await TutorService.GetTutorCourses()
                setCards(response.data.courses)
            } catch {

            }
        }
        handleGetCourses()
    }, [])
    return (
        <section
            className={styles.tutor}>
            <div className={styles.tutor__container}>
                <TutorPamel
                    username={tutor.user.username}
                    email={tutor.user.email}
                />
                <div className={styles.tutor__content}>
                    <div className={styles.tutor__header}>
                        <h2 className={styles.tutor__title}>
                            Ваши курсы
                        </h2>
                        <h3 className={styles.tutor__header__btn}
                            onClick={handleNavigate}
                        >
                            Добавить курс
                        </h3>
                    </div>
                    <TutorsCourses
                        cards={cards}
                    />
                </div>
            </div>
        </section>
    );
}

export default TutorPersonalCoursesComponent;