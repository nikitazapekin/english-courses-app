import styles from "./Certificate.module.scss"
import CertificateImage from "../../assets/certificate.png"
const Certificate = () => {
    return (
        <section className={styles.certificate}>
            <div className={styles.certificate__inner}>
                <div className={styles.certificate__content}>
                    <h2 className={styles.certificate__title}>
                        После окончания курса вы сдаете
                        финальный тест и получаете сертификат
                    </h2>
                    <p className={styles.certificate__about}>
                        В конце каждого пройденного уровня преподаватели школы проводят финальное
                        тестирование по английскому языку. После успешного прохождения теста вы получаете сертификат,
                        который подтверждает ваш уровень владения английским языком. Документ котируется внутри Беларуси
                        и может быть полезным при поиске работы, смене должности, а также при поступлении в некоторые ВУЗЫ.
                    </p>
                </div>
                <img
                    className={styles.certificate__image}
                    src={CertificateImage}
                    alt="Certificate" />
            </div>
        </section>
    );
}

export default Certificate;