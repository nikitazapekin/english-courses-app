import styles from "./ForWhatSection.module.scss"
import Lightning from "../../assets/lightning.png"
import { data } from "./consts";
import { useSelector } from "react-redux";
import { OpenCourseSelector } from "../../store/selectors/OpenCourseSelector";
const ForWhatSection = () => {
    const course = useSelector(OpenCourseSelector)
    return (
        <section className={styles.what}>
            <div className={styles.what__inner}>
                <h2 className={styles.what__title}>
                    Зачем английский для программистов?
                </h2>
                <div className={styles.what__content}>

 
                    {course.course.for_what_reasons.map((item, index) => (

                        <div className={styles.what__item} key={index}>
                            <img src={Lightning} alt="Lightning"
                                className={styles.what__icon}
                            />
                            <p className={styles.what__text}>
                                {item}
                            </p>
                        </div>
                    ))}
                 
                </div>
            </div>
        </section>
    );
}

export default ForWhatSection;