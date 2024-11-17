import styles from "./CourseCertificate.module.scss"
import Certificate from "../../assets/courseDetails/Certificate.png"
const CourseCertificate = () => {
    return (
        <div className={styles.course}>
            <div className={styles.course__inner}>
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
            </div>
        </div>
    );
}

export default CourseCertificate;