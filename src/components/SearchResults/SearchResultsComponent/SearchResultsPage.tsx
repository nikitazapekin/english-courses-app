import styles from "./SearchResults.module.scss"
import PersonalCourseCard from "../../PersonalProfile/PersonalCourses/PersonalCourseCard"
import Card from "../../../assets/personalCourses/Card.png"
import PersonalDots from "../../PersonalProfile/PersonalCourses/PersonalDots/PersonalDots"
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
const SearchResultsComponent = () => {
    return (
        <div className={styles.search}>
            <div className={styles.search__inner}>
                <h1 className={styles.search__title}>
                    По запросу "программист" найдено следующее:
                </h1>
                <div className={styles.searh__list}>



                    <div className={styles.search__cards}>

                        {data.map((item, index) => (
                            <PersonalCourseCard key={index} title={item.title} author={item.author} date={item.date} image={item.image} />
                        ))}
                        {/*
                        <PersonalDots />
                        */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchResultsComponent;