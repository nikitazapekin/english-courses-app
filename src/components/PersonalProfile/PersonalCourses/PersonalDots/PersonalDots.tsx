import styles from "./PersonalDots.module.scss"
const PersonalDots = () => {
    return (<div className={styles.dots}>
        <div className={styles.dot}>
            {"<"}
        </div>
        <div className={`${styles.dot} ${styles.dot__active}`}>
            {"1"}
        </div>
        <div className={styles.dot}>
            {"2"}
        </div>
        <div className={styles.dot}>
            {"3"}
        </div>
        <div className={styles.dot}>
            {"..."}
        </div>
        <div className={styles.dot}>
            {">"}
        </div>
    </div>);
}

export default PersonalDots;