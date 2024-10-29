import styles from "./CoursesHomepage.module.scss"
import Person1 from "../../assets/persons/Person1.png"
import Person2 from "../../assets/persons/Person2.png"
import Person3 from "../../assets/persons/Person3.png"
import Person4 from "../../assets/persons/Person4.png"
import Person5 from "../../assets/persons/Person5.png"
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
                            <div className={styles.cardS}>
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



                            <div className={styles.cardS}>
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



                            <div className={styles.cardS}>
                                <h3 className={styles.cardS__title}>

                                </h3>
                                <div className={styles.cardS__content}>

                                    <NavigateCardBtn link={"#"} />
                                    <img className={styles.cardS__image}
                                        src={Person1}
                                        alt="person"

                                    />
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CoursesHomepage;