import React, { useRef } from "react";
import styles from "./Certificate.module.scss";
import CertificateImage from "../../assets/certificate.png";
const Certificate = () => {
    const innerRef = useRef<HTMLDivElement>(null);
    const handleMouseMove = (event: React.MouseEvent) => {
        const target = innerRef.current;
        if (!target) return;
        const { left, top, width, height } = target.getBoundingClientRect();
        const x = event.clientX - left - width / 2;  
        const y = event.clientY - top - height / 2; 
        const rotateX = (y / height) * 15;  
        const rotateY = (x / width) * -15;  
        target.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    const handleMouseLeave = () => {
        const target = innerRef.current;
        if (target) {
            target.style.transform = "rotateX(0) rotateY(0)";
        }
    }
    return (
        <section
            className={styles.certificate}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div ref={innerRef} className={styles.certificate__inner}>
                <div className={styles.certificate__content}>
                    <h2 className={styles.certificate__title}>
                        После окончания курса вы сдаете финальный тест и получаете сертификат
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
                    alt="Certificate"
                />
            </div>
        </section>
    );
};
export default Certificate;

 