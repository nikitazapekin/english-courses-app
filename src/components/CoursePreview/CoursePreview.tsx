import styles from "./CoursePreview.module.scss"
import Logo from "../../assets/course/courseLogo.png"
import CourseIcon1 from "../../assets/course/courseIcon1.png"
import TutorAdd from "../Tutor/TutorAdd/TutorAdd"
const CoursePreview = () => {
    return (
        <section className={styles.course}>
              
            <div className={styles.course__inner}>
                <div className={styles.course__content}>

                <h1 className={styles.course__title}>
                        Английский язык для
                        программистов
                    </h1>
                    <h2 className={styles.course__subtitle}>
                        Станьте востребованным специалистом
                    </h2>
                    <p className={styles.course__about}>
                        Курс предназначен для программистов, которые хотят улучшить свои навыки английского языка для профессиональной и технической коммуникации.
                    </p>

                    <div className={styles.course__categories}>
                        <div className={styles.course__category}>
                            <p className={styles.course__category__text}>
                                Студенты
                            </p>
                            <img className={styles.course__category__icon}
                                src={CourseIcon1}
                            />
                        </div>


                        <div className={styles.course__category}>
                            <p className={styles.course__category__text}>
                             Школьники
                            </p>
                            <img className={styles.course__category__icon}
                                src={CourseIcon1}
                            />
                        </div>


                    </div>

                    <button className={styles.course__btn}>
                        Записаться на курс
                    </button>

                    
                </div>

                <div className={styles.course__logo} >

                <img  className={styles.course__logo__image} src={Logo} alt="Logo" />
                </div>
            </div>
        </section>
    );
}

export default CoursePreview;

/*import styles from "./CoursePreview.module.scss"
import Logo from "../../assets/course/courseLogo.png"
import CourseIcon1 from "../../assets/course/courseIcon1.png"
const CoursePreview = () => {
    return (
        <section className={styles.course}>
            <div className={styles.course__inner}>

                <div className={styles.course__content}>
                    <h1 className={styles.course__title}>
                        Английский язык для
                        программистов
                    </h1>
                    <h2 className={styles.course__subtitle}>
                        Станьте востребованным специалистом
                    </h2>
                    <p className={styles.course__about}>
                        Курс предназначен для программистов, которые хотят улучшить свои навыки английского языка для профессиональной и технической коммуникации.
                    </p>

                    <div className={styles.course__categories}>
                        <div className={styles.course__category}>
                            <p className={styles.course__category__text}>
                                Студенты
                            </p>
                            <img className={styles.course__category__icon}
                                src={CourseIcon1}
                            />
                        </div>


                        <div className={styles.course__category}>
                            <p className={styles.course__category__text}>
                             Школьники
                            </p>
                            <img className={styles.course__category__icon}
                                src={CourseIcon1}
                            />
                        </div>


                    </div>

                    <button className={styles.course__btn}>
                        Записаться на курс
                    </button>
                </div>
                <img className={styles.course__logo}
                    src={Logo}
                />
            </div>
        </section>
    );
}

export default CoursePreview;
*/