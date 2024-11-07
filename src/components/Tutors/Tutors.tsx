import Swiper from "../Swiper/Swiper";
import styles from "./Tutors.module.scss"
import Tutor from "../../assets/swiper/tutor1.png"
const Tutors = () => {
    const elems = [
 
        {
            title: "Ирина",
            img: Tutor,
            experience: "5 лет опыта",
            describtion: "Американец, носитель английского языка. Закончил Бостонский университет, Berlin College of Translation. Спикер и основатель языкового клуба."
        },
        {
            title: "Сергей",
            img: Tutor,
            experience: "3 лет опыта",
            describtion: "Оуончил школу Edme в 2022. Около 500 подготовленных студентов, успешно освоивших курс английского."
        },
        {
            title: "Виктор",
            img: Tutor,
            experience: "8+ лет опыта",
            describtion: "Американец, носитель английского языка. Закончил Бостонский университет, Berlin College of Translation. Спикер и основатель языкового клуба."
        },
        {
            title: "Ирина",
            img: Tutor,
            experience: "5 лет опыта",
            describtion: "Американец, носитель английского языка. Закончил Бостонский университет, Berlin College of Translation. Спикер и основатель языкового клуба."
        },


    ];

    return (
        <section className={styles.tutors}>
            <div className={styles.tutors__wrapper}>
                <div className={styles.tutors__inner}>
                    <h2 className={styles.tutors__title}>
                        Начни говорить на английском
                        благодаря нашим экспертам
                    </h2>
                    <Swiper items={elems} />
                </div>
            </div>
        </section>
    );
}

export default Tutors;