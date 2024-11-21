import styles from "./PersonalCourses.module.scss"
import Card from "../../../assets/personalCourses/Card.png"
import PersonalCourseCard from "./PersonalCourseCard";
import PersonalDots from "./PersonalDots/PersonalDots";
const data = [
    {
        title: "Английский язык для  программистов (B1) ",
        author: "Автор: И. Робертовна",
        date: "Выпуск: 2022",
        image: Card

    },

    {
        title: "Английский язык для  программистов (B1) ",
        author: "Автор: И. Робертовна",
        date: "Выпуск: 2022",
        image: Card

    },

    {
        title: "Английский язык для  программистов (B1) ",
        author: "Автор: И. Робертовна",
        date: "Выпуск: 2022",
        image: Card

    },


    {
        title: "Английский язык для  программистов (B1) ",
        author: "Автор: И. Робертовна",
        date: "Выпуск: 2022",
        image: Card

    },

    {
        title: "Английский язык для  программистов (B1) ",
        author: "Автор: И. Робертовна",
        date: "Выпуск: 2022",
        image: Card

    },
]
const PersonalCourses = () => {
    return (<section className={styles.courses}>

        <div className={styles.courses__header}>
            <p className={styles.courses__title}>
                Курсы
            </p>
            <select className={styles.courses__select}>
                <option>Пройденные</option>
                <option>Недавние</option>
                <option>Незаконченные</option>
            </select>
        </div>
        <div className={styles.courses__cards}>

            {data.map((item, index) => (
                <PersonalCourseCard key={index} title={item.title} author={item.author} date={item.date} image={item.image} />
            ))}
            <PersonalDots />
        </div>


    </section>);
}

export default PersonalCourses;