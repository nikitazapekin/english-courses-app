import React, { useState } from "react";
import styles from "./CoursesList.module.scss";
import Card from "../../assets/cards/card1.png";
import Design from "../../assets/cards/design.png";
import CoursesListDots from "./CoursesListDots";
import { Link } from "react-router-dom";

type SortOption = "price" | "rating" | "releaseDate";

interface Course {
    name: string;
    title: string;
    price: number;
    rating: number;
    releaseDate: string;
    image: string;
    color: string;
}

const initialCards: Course[] = [
    {
        name: "Web",
        title: "Web-технологии",
        price: 30,
        rating: 4.5,
        releaseDate: "2023-09-15",
        image: Card,
        color: "#0389D8"
    },
    {
        name: "Design",
        title: "Для дизайнеров",
        price: 50,
        rating: 4.7,
        releaseDate: "2022-07-20",
        image: Design,
        color: "#D1D803"
    },
    {
        name: "Web",
        title: "Web-технологии",
        price: 30,
        rating: 4.5,
        releaseDate: "2023-09-15",
        image: Card,
        color: "#0389D8"
    },
    {
        name: "Design",
        title: "Для дизайнеров",
        price: 50,
        rating: 4.7,
        releaseDate: "2022-07-20",
        image: Design,
        color: "#D1D803"
    },
    {
        name: "Web",
        title: "Web-технологии",
        price: 30,
        rating: 4.5,
        releaseDate: "2023-09-15",
        image: Card,
        color: "#0389D8"
    },
    {
        name: "Design",
        title: "Для дизайнеров",
        price: 50,
        rating: 4.7,
        releaseDate: "2022-07-20",
        image: Design,
        color: "#D1D803"
    },
    {
        name: "Web",
        title: "Web-технологии",
        price: 30,
        rating: 4.5,
        releaseDate: "2023-09-15",
        image: Card,
        color: "#0389D8"
    },
    {
        name: "Design",
        title: "Для дизайнеров",
        price: 50,
        rating: 4.7,
        releaseDate: "2022-07-20",
        image: Design,
        color: "#D1D803"
    },
    {
        name: "Web",
        title: "Web-технологии",
        price: 30,
        rating: 4.5,
        releaseDate: "2023-09-15",
        image: Card,
        color: "#0389D8"
    },
    {
        name: "Design",
        title: "Для дизайнеров",
        price: 50,
        rating: 4.7,
        releaseDate: "2022-07-20",
        image: Design,
        color: "#D1D803"
    },
    {
        name: "Web",
        title: "Web-технологии",
        price: 30,
        rating: 4.5,
        releaseDate: "2023-09-15",
        image: Card,
        color: "#0389D8"
    },
    {
        name: "Design",
        title: "Для дизайнеров",
        price: 50,
        rating: 4.7,
        releaseDate: "2022-07-20",
        image: Design,
        color: "#D1D803"
    },
    {
        name: "Web",
        title: "Web-технологии",
        price: 30,
        rating: 4.5,
        releaseDate: "2023-09-15",
        image: Card,
        color: "#0389D8"
    },
    {
        name: "Design",
        title: "Для дизайнеров",
        price: 50,
        rating: 4.7,
        releaseDate: "2022-07-20",
        image: Design,
        color: "#D1D803"
    },
    {
        name: "Web",
        title: "Web-технологии",
        price: 30,
        rating: 4.5,
        releaseDate: "2023-09-15",
        image: Card,
        color: "#0389D8"
    },
    {
        name: "Design",
        title: "Для дизайнеров",
        price: 50,
        rating: 4.7,
        releaseDate: "2022-07-20",
        image: Design,
        color: "#D1D803"
    },
   
];

const CoursesList: React.FC = () => {
    const [cards, setCards] = useState<Course[]>(initialCards);
    const [sortOption, setSortOption] = useState<SortOption>("price");

    const sortCards = (option: SortOption) => {
        const sortedCards = [...cards].sort((a, b) => {
            if (option === "price") return a.price - b.price;
            if (option === "rating") return b.rating - a.rating;
            if (option === "releaseDate") return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
            return 0;
        });
        setCards(sortedCards);
    };

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = event.target.value as SortOption;
        setSortOption(selectedOption);
        sortCards(selectedOption);
    };

    return (
        <div className={styles.courses}>
            <div className={styles.courses__inner}>
                <div className={styles.courses__header}>
                    <h2 className={styles.courses__title}>Новинки</h2>
                    <select
                        className={styles.courses__select}
                        value={sortOption}
                        onChange={handleSortChange}
                    >
                        <option value="price">Сортировать по стоимости</option>
                        <option value="rating">Сортировать по рейтингу</option>
                        <option value="releaseDate">Сортировать по выпуску</option>
                    </select>
                </div>

                <div className={styles.courses__cards}>
                    {cards.map((item, index) => (
                        <Link to="/card">
                        <div className={styles.card} key={index}>
                            <div className={styles.card__preview} style={{ backgroundColor: item.color }}>
                                <p className={styles.card__name}>{item.name}</p>
                                <img className={styles.card__image} src={item.image} alt={item.title} />
                            </div>
                            <h3 className={styles.card__title}>{item.title}</h3>
                            <p className={styles.card__price}>{`${item.price}$`}</p>
                            <p className={styles.card__rating}>Рейтинг: {item.rating}</p>
                            <p className={styles.card__releaseDate}>Дата выпуска: {item.releaseDate}</p>
                        </div>
                        </Link>
                    ))}
                </div>

                <CoursesListDots />
            </div>
        </div>
    );
};

export default CoursesList;

/*

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
*/