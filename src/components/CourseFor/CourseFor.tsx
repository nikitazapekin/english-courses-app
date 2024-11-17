import styles from "./CourseFor.module.scss"
import Programmer from "../../assets/courseDetails/CourseFor/programmer.png"
import Tutor from "../../assets/courseDetails/CourseFor/tutor.png"
import Student from "../../assets/courseDetails/CourseFor/student.png"
const data = [
    {
        title: "Программистов",
        describtion: "Данный курс будет полезен и ориентирован на разработчиков с целью повышения квалификации",
        image: Programmer
    },
    {
        title: "Преподавателей",
        describtion: "Преподаватели могут запросто освоить необходимые знания для подтверждения своих компетенций",
        image: Tutor
    },
    {
        title: "Студентов",
        describtion: "Данный курс поможет в подготовке студентов технических специализаций освоить нужные знания",
        image: Student
    },
]
const CourseFor = () => {
    return (
        <section className={styles.course}>
            <div className={styles.course__inner}>
                <h2 className={styles.course__title}>
                    Курс подейдет для
                </h2>
                <div className={styles.course__cards}>
                    {data.map((item, index) => (

                        <div className={styles.course__card} key={index}>
                            <span>

                            <img src={item.image} alt="Logo" className={styles.course__image} />
                            <h3 className={styles.course__name}>
                                {item.title}
                            </h3>
                            <p className={styles.course__about}>
                                {item.describtion}
                            </p>
                            <i></i>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CourseFor;