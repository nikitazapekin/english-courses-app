import styles from "./CoursesList.module.scss"
import Card from "../../assets/cards/card1.png"
import Design from "../../assets/cards/design.png"
import CoursesListDots from "./CoursesListDots"
const cards = [
    {
        name: "Web",
        title: "Web-технологии",
        price: "30$",
        image: Card,
        color: "#0389D8"
    },
    {
        name: "Design",
        title: "Для дизайнеров",
        price: "50$",
        image: Design,
        color: "#D1D803"
    },
    {
        name: "Web",
        title: "Web-технологии",
        price: "30$",
        image: Card,
        color: "#0389D8"
    },
    {
        name: "Web",
        title: "Web-технологии",
        price: "30$",
        image: Card,
        color: "#0389D8"
    },
    {
        name: "Web",
        title: "Web-технологии",
        price: "30$",
        image: Card,
        color: "#0389D8"
    },
    {
        name: "Web",
        title: "Web-технологии",
        price: "30$",
        image: Card,
        color: "#0389D8"
    },



    {
        name: "Web",
        title: "Web-технологии",
        price: "30$",
        image: Card,
        color: "#0389D8"
    },
    {
        name: "Web",
        title: "Web-технологии",
        price: "30$",
        image: Card,
        color: "#0389D8"
    },
    {
        name: "Web",
        title: "Web-технологии",
        price: "30$",
        image: Card,
        color: "#0389D8"
    },
    {
        name: "Web",
        title: "Web-технологии",
        price: "30$",
        image: Card,
        color: "#0389D8"
    },
    {
        name: "Web",
        title: "Web-технологии",
        price: "30$",
        image: Card,
        color: "#0389D8"
    },
    {
        name: "Web",
        title: "Web-технологии",
        price: "30$",
        image: Card,
        color: "#0389D8"
    },



    {
        name: "Web",
        title: "Web-технологии",
        price: "30$",
        image: Card,
        color: "#0389D8"
    },
    {
        name: "Web",
        title: "Web-технологии",
        price: "30$",
        image: Card,
        color: "#0389D8"
    },
    {
        name: "Web",
        title: "Web-технологии",
        price: "30$",
        image: Card,
        color: "#0389D8"
    },
    {
        name: "Web",
        title: "Web-технологии",
        price: "30$",
        image: Card,
        color: "#0389D8"
    },

]
const CoursesList = () => {
    return (
        <div className={styles.courses}>
            <div className={styles.courses__inner}>
                <div className={styles.courses__header}>
                    <h2 className={styles.courses__title}>
                        Новинки
                    </h2>
                    <select className={styles.courses__select}>
                        <option className={styles.courses__option}>Сортировать по стоимости</option>
                        <option className={styles.courses__option}>Сортировать по рейтингу</option>
                        <option className={styles.courses__option}>Сортировать по выпуску</option>
                    </select>

                </div>

                <div className={styles.courses__cards}>
                    {cards.map((item, index) => (

                        <div className={styles.card} key={index}>
                            <div className={styles.card__preview} style={{ backgroundColor: item.color }}>
                                <p className={styles.card__name}>
                                    {item.name}
                                </p>
                                <img className={styles.card__image} src={item.image} />
                            </div>

                            <h3 className={styles.card__title}>
                                {item.title}
                            </h3>
                            <p className={styles.card__price}>
                                {item.price}
                            </p>
                        </div>
                    ))}
                </div>

                <CoursesListDots />
            </div>
        </div>
    );
}

export default CoursesList;