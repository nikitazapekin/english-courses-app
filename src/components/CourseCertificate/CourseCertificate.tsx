import styles from "./CourseCertificate.module.scss"
import Certificate from "../../assets/courseDetails/Certificate.png"
const CourseCertificate = () => {
    return (
        <div className={styles.course}>
            <div className={styles.course__inner}>
                    <span className={`${styles.course__sqr} ${styles.course__sqr__top}`} />
                <div className={styles.course__wrapper}>
                    <div className={styles.course__content}>
                        <h2 className={styles.course__title}>
                            Итоговое тестирование
                        </h2>
                        <p className={styles.course__about}>
                            Пройдите тестирование на знание усвоенного материала и получите сертификат!
                        </p>
                    </div>
                    <img src={Certificate} className={styles.course__image} alt="Certificate" />
                </div>
                    <span className={`${styles.course__sqr} ${styles.course__sqr__bottom}`} />
            </div>
        </div>
    );
}

export default CourseCertificate;