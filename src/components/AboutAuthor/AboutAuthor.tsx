import styles from "./AboutAuthor.module.scss"
import Agree from "../../assets/courseDetails/agree.png"
import Irina from "../../assets/courseDetails/irina.jpg"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { OpenCourseSelector } from "../../store/selectors/OpenCourseSelector"
const AboutAuthor = () => {
  
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/tutor/${course.tutor.id}`)
    }
    const course = useSelector(OpenCourseSelector)
    return (
        <section className={styles.about}>
            <div className={styles.about__inner}>
                <h2 className={styles.about__title}>
                    О авторе курса
                </h2>
                <div className={styles.about__content}>
                    <div className={styles.about__author__wrapper}>

                        <img src={course.tutor.avatar_base64 ? course.tutor.avatar_base64 : ""} alt="Author" className={styles.about__author} />
                    </div>
                    <div className={styles.info}>
                        <h3 className={styles.info__title}>
                            {course.tutor.username}
                        </h3>
                        <p className={styles.info__citate}>
                            {course.tutor.description}
                        </p>
                        <div className={styles.info__skills}>
                            {
                                course.tutor.experience.map((item, index) => (
                                    <div className={styles.info__skill} key={index}>
                                        <img src={Agree} alt="Agree" />
                                        <p className={styles.info__text}>
                                            {item}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={styles.info__btn}>
                            <p className={styles.info__btn__text} onClick={handleNavigate} >

                                Подробнее
                            </p>
                            <div className={styles.info__btn__background} />


                        </div>
                    </div>
                </div>



            </div>
        </section>);
}

export default AboutAuthor;