import styles from "./CoursesSlider.module.scss"
import Children from "../../assets/coursesSlider/Childrens.png"
const CoursesSlider = () => {
    return (
        <section className={styles.slider}>
            <div className={styles.slider__inner}>
                <div className={styles.slider__button}>
                    {"<"}
                </div>
                <div className={styles.slider__panel}>

                    <div className={styles.slider__carousel}>
                        <div className={styles.slider__item}>
                            <h2 className={styles.slider__title}>
                                Английский для самых маленьких
                            </h2>

                            <div className={styles.slider__item__content}>
                                <p className={styles.slider__about}>
                                    Научим детей подросткового возраста
                                    базовому английскому языку
                                </p>
                                <button className={styles.slider__try}>
                                    Попробовать
                                </button>
                            </div>
                            <img src={Children} alt="Children" className={styles.slider__image} />
                        </div>
                    </div>
                </div>
                <div className={styles.slider__button}>
                    {">"}
                </div>
            </div>
        </section>

    );
}

export default CoursesSlider;