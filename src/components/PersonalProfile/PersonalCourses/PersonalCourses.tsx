import React, { useState } from "react";
import styles from "./PersonalCourses.module.scss";
import Card from "../../../assets/personalCourses/Card.png";
import PersonalCourseCard from "./PersonalCourseCard";
import PersonalDots from "./PersonalDots/PersonalDots";

const data = [
  { title: "Курс 1", author: "Автор: И. Робертовна", date: "Выпуск: 2022", image: Card },
  { title: "Курс 2", author: "Автор: И. Робертовна", date: "Выпуск: 2022", image: Card },
  { title: "Курс 3", author: "Автор: И. Робертовна", date: "Выпуск: 2022", image: Card },
  { title: "Курс 4", author: "Автор: И. Робертовна", date: "Выпуск: 2022", image: Card },
  { title: "Курс 5", author: "Автор: И. Робертовна", date: "Выпуск: 2022", image: Card },
  { title: "Курс 6", author: "Автор: И. Робертовна", date: "Выпуск: 2022", image: Card },
  { title: "Курс 7", author: "Автор: И. Робертовна", date: "Выпуск: 2022", image: Card },
  { title: "Курс 8", author: "Автор: И. Робертовна", date: "Выпуск: 2022", image: Card },

  { title: "Курс 1", author: "Автор: И. Робертовна", date: "Выпуск: 2022", image: Card },
  { title: "Курс 2", author: "Автор: И. Робертовна", date: "Выпуск: 2022", image: Card },
  { title: "Курс 3", author: "Автор: И. Робертовна", date: "Выпуск: 2022", image: Card },
  { title: "Курс 4", author: "Автор: И. Робертовна", date: "Выпуск: 2022", image: Card },
  { title: "Курс 5", author: "Автор: И. Робертовна", date: "Выпуск: 2022", image: Card },
  { title: "Курс 6", author: "Автор: И. Робертовна", date: "Выпуск: 2022", image: Card },
  { title: "Курс 7", author: "Автор: И. Робертовна", date: "Выпуск: 2022", image: Card },
  { title: "Курс 8", author: "Автор: И. Робертовна", date: "Выпуск: 2022", image: Card },


  { title: "Курс 1", author: "Автор: И. Робертовна", date: "Выпуск: 2022", image: Card },
  { title: "Курс 2", author: "Автор: И. Робертовна", date: "Выпуск: 2022", image: Card },
  { title: "Курс 3", author: "Автор: И. Робертовна", date: "Выпуск: 2022", image: Card },
  { title: "Курс 4", author: "Автор: И. Робертовна", date: "Выпуск: 2022", image: Card },
  { title: "Курс 5", author: "Автор: И. Робертовна", date: "Выпуск: 2022", image: Card },
  { title: "Курс 6", author: "Автор: И. Робертовна", date: "Выпуск: 2022", image: Card },
  { title: "Курс 7", author: "Автор: И. Робертовна", date: "Выпуск: 2022", image: Card },
  { title: "Курс 8", author: "Автор: И. Робертовна", date: "Выпуск: 2022", image: Card },
];

const ITEMS_PER_PAGE = 5;

const PersonalCourses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className={styles.courses}>
      <div className={styles.courses__header}>
        <p className={styles.courses__title}>Курсы</p>
        <select className={styles.courses__select}>
          <option>Пройденные</option>
          <option>Недавние</option>
          <option>Незаконченные</option>
        </select>
      </div>
      <div className={styles.courses__cards}>
        {currentData.map((item, index) => (
          <PersonalCourseCard key={index} title={item.title} author={item.author} date={item.date} image={item.image} />
        ))}
      </div>
      <PersonalDots totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </section>
  );
};

export default PersonalCourses;



/*
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

*/