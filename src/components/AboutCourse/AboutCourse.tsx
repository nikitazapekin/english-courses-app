import styles from "./AboutCourse.module.scss"
import Icon1 from "../../assets/courseDetails/icon1.png"
import Icon2 from "../../assets/courseDetails/icon2.png"
import Icon3 from "../../assets/courseDetails/icon3.png"
import Icon4 from "../../assets/courseDetails/icon4.png"
import { useSelector } from "react-redux"
import { OpenCourseSelector } from "../../store/selectors/OpenCourseSelector"
const data = [
    {
        title: "90 уроков",
        image: Icon1
    },
    {
        title: "Углубленная лексика",
        image: Icon2
    },
    {
        title: "50 тематических тестов ",
        image: Icon3
    },
    {
        title: "Комьюнити",
        image: Icon4
    }
]
const AboutCourse = () => {
    const course = useSelector(OpenCourseSelector)
    return (<section className={styles.about}>
        <div className={styles.about__inner}>
            <h2 className={styles.about__title}>
                О курсе
            </h2>
            <div className={styles.about__btns}>

                {course.course.about_course.map((item, index)=> (
                     <div className={styles.about__item} key={index}>
                   
                     <p className={styles.about__text}>
                         {item}
                     </p>
                 </div>
                ))}
          
            </div>
        </div>
    </section>


    );
}

export default AboutCourse;