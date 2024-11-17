import styles from "./CourseConsultation.module.scss"
const CourseConsultation = () => {
    return (<section className={styles.course}>
        <div className={styles.course__inner}>
            <div className={styles.course__content}>
                <h2 className={styles.course__title}>
                    Записаться на курс
                    или бесплатно
                    проконсультроваться
                </h2>
                <form className={styles.form}>
                    <input className={styles.form__input} type="text" placeholder="Имя" required />
                    <input className={styles.form__input} type="text" placeholder="Фамилия" required />
                    <input className={styles.form__input} type="text" placeholder="Почта" required />
                </form>
            </div>
            <div className={styles.course__personal}>
                <input type="checkbox" className={styles.course__personal__input} required />
                <p className={styles.course__personal__text}>
                    Я согласен на обработку персональных данных
                </p>
            </div>
            <div className={styles.course__btn}>
                <p className={styles.course__btn__text}>

                    Подробнее
                </p>
                <div className={styles.course__btn__background} />


            </div>

        </div>
    </section>);
}

export default CourseConsultation;