import styles from "./CourseConsultation.module.scss"
const CourseConsultation = () => {
    return (<section className={styles.course}>
        <form className={styles.course__inner}>
            <div className={styles.course__content}>
                <h2 className={styles.course__title}>
                    Записаться на курс
                    или бесплатно
                    проконсультроваться
                </h2>
                <div className={styles.form}>
                    <input className={styles.form__input} type="text" placeholder="Имя" required />
                    <input className={styles.form__input} type="text" placeholder="Фамилия" required />
                    <input className={styles.form__input} type="text" placeholder="Почта" required />
                </div>
            </div>
            <div className={styles.course__personal}>
                <input type="checkbox" className={styles.course__personal__input} required />
                <p className={styles.course__personal__text}>
                    Я согласен на обработку персональных данных
                </p>
            </div>
            <button className={styles.course__btn} type="submit">
                <p className={styles.course__btn__text}>
                  Записаться
                </p>
                <div className={styles.course__btn__background} />


            </button>

        </form>
    </section>);
}

export default CourseConsultation;