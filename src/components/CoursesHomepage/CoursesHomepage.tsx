 
import styles from "./CoursesHomepage.module.scss"
import Person1 from "../../assets/persons/Person1.png"
import Person2 from "../../assets/persons/Person2.png"
import Person3 from "../../assets/persons/Person3.png"
import Person4 from "../../assets/persons/Person4.png"
import Person5 from "../../assets/persons/Person5.png"
import { Link } from "react-router-dom"
 
import NavigateCardBtn from "../NavigateCardBtn/NavigateCardBtn"
const CoursesHomepage = () => {
    return (
        <section className={styles.courses}>
            <div className={styles.courses__wrapper}>

                <div className={styles.courses__inner}>
                    <h2 className={styles.courses__title}>
                        Английский язык для всех
                    </h2>
                    <div className={styles.courses__cards}>
                        <div className={styles.courses__line}>
                            <div className={`${styles.cardS} ${styles.cardS__gray}`}>
                                <h3 className={styles.cardS__title}>
                                    Английский для
                                    жизни
                                </h3>
                                <div className={styles.cardS__content}>
                                    <NavigateCardBtn link={"#"} />
                                    <img className={styles.cardS__image}
                                        src={Person1}
                                        alt="person"

                                    />
                                </div>
                            </div>


                            <div className={`${styles.cardS} ${styles.cardS__bronze}`}>
                                <h3 className={styles.cardS__title}>
                                    Английский для
                                    маркетологов
                                </h3>
                                <div className={styles.cardS__content}>

                                    <NavigateCardBtn link={"#"} />
                                    <img className={styles.cardS__image}
                                        src={Person2}
                                        alt="person"

                                    />
                                </div>
                            </div>
                            <div className={`${styles.cardS} ${styles.cardS__bronzeL}`}>
                                <h3 className={styles.cardS__title}>
                                    Английский для
                                    Финансистов
                                </h3>
                                <div className={styles.cardS__content}>

                                    <NavigateCardBtn link={"#"} />
                                    <img className={styles.cardS__image}
                                        src={Person3}
                                        alt="person"

                                    />
                                </div>
                            </div>
                        </div>



                        <div className={styles.courses__line1}>
                            <div className={`${styles.cardB} ${styles.cardB__black}`}>
                                <h3 className={`${styles.cardS__title} ${styles.cardB__titleWhite}`}>
                                    Английский для
                                    IT-специалистов
                                </h3>
                                <div className={styles.cardS__content}>

                                    <NavigateCardBtn link={"#"} />
                                    <img className={styles.cardS__image}
                                        src={Person4}
                                        alt="person"

                                    />
                                </div>
                            </div>

                            <div className={`${styles.cardB} ${styles.cardS__gray}`}>
                                <h3 className={styles.cardS__title}>
                                    Английский для
                                    финансистов
                                </h3>
                                <div className={styles.cardS__content}>

                                    <NavigateCardBtn link={"#"} />
                                    <img className={styles.cardS__image}
                                        src={Person5}
                                        alt="person"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to={"/catalog"} className={styles.courses__more}>
                        Посмотреть ещё
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default CoursesHomepage;

 