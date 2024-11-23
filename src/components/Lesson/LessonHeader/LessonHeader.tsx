
import styles from "./LessonHeader.module.scss"
const LessonHeader = () => {
    return (<div className={styles.header}>
        <div className={styles.header__btn}>
            <p className={styles.header__btn__bold}>
                Предыдущий урок
            </p>
            <p className={styles.header__btn__text}>
                Базовые
                разговорные
                выражения
            </p>
        </div>
        <p className={styles.header__current}>
        3 из 12 уроков
        </p>
        <div className={`${styles.header__btn} ${styles.header__btn__right} `}>
            <p className={styles.header__btn__bold}>
                Следующий урок
            </p>
            <p className={styles.header__btn__text}>
                Базовые
                разговорные
                выражения
            </p>
        </div>
    </div>);
}

export default LessonHeader;