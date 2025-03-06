import styles from "./CoursePreview.module.scss"
import Logo from "../../assets/course/courseLogo.png"
import CourseIcon1 from "../../assets/course/courseIcon1.png"
import TutorAdd from "../Tutor/TutorAdd/TutorAdd"
import { useSelector } from "react-redux"
import { OpenCourseSelector } from "../../store/selectors/OpenCourseSelector"
import { useDispatch } from "react-redux"
import { setOpenCourseModal } from "../../store/slices/CourseModal/CourseModal"
const CoursePreview = () => {
    const dispatch = useDispatch()
    const course = useSelector(OpenCourseSelector)
    const handleOpenModal = () => {
        dispatch(setOpenCourseModal())
    }
    return (
        <section className={styles.course}>

            <div className={styles.course__inner}>
                <div className={styles.course__content}>

                    <h1 className={styles.course__title}>
                        {course.course.title}
                    </h1>
                    <h2 className={styles.course__subtitle}>
                        {course.course.description}
                    </h2>
                    <p className={styles.course__about}>

                        {course.course.fulldescription}

                    </p>

                    <div className={styles.course__categories}>



                        {course.course.course_for.map(item => (

                            <div className={styles.course__category}>
                                <p className={styles.course__category__text}>

                                    {item}
                                </p>
                                <img className={styles.course__category__icon}
                                    src={CourseIcon1}
                                />
                            </div>
                        ))}


                    </div>

                    <button className={styles.course__btn}
                    onClick={handleOpenModal}
                    >
                        Записаться на курс
                    </button>


                </div>

                <div className={styles.course__logo} >

                    <img className={styles.course__logo__image}
                        src={course.course.course_logo}
                        //src={Logo}
                        alt="Logo"

                    />
                </div>
            </div>
        </section>
    );
}

export default CoursePreview;


