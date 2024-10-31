import Swiper from "../Swiper/Swiper";
import styles from "./Tutors.module.scss"
const Tutors = () => {
    const elems = [
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
        { title: "Test" },
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