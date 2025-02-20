import styles from "./tutorPersonalCourses.module.scss"
import { useSelector } from "react-redux";
import { TutorSelector } from "../../../store/selectors/Tutor.selector";

import TutorPamel from "../TutorPanel/TutorPanel";
import { useNavigate } from "react-router-dom";
const TutorPersonalCoursesComponent = () => {
    const tutor = useSelector(TutorSelector)
    const navigate = useNavigate()
    const handleNavigate = ()=> {
        navigate("/tutor/personal/create")
    }
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
                        <h3 className={styles.tutor__header__btn}
                        onClick={handleNavigate}
                        >
                            Добавить курс
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TutorPersonalCoursesComponent;