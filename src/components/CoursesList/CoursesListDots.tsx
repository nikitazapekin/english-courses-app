import styles from "./CoursesListDots.module.scss"
const CoursesListDots = () => {
    return (
        <div className={styles.dots}>
            <div className={styles.dots__dot}>
                {"<"}
            </div>
            <div className={`${styles.dots__dot} ${styles.dots__active}`}>
               1
            </div>
            <div className={styles.dots__dot}>
              2
            </div>
            <div className={styles.dots__dot}>
              3
            </div>
            <div className={styles.dots__dot}>
              ...
            </div>
            <div className={styles.dots__dot}>
                {">"}
            </div>
        </div>
    );
}

export default CoursesListDots;