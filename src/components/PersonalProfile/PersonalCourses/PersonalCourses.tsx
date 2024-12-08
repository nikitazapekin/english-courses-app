import React, { useState } from "react";
import styles from "./PersonalCourses.module.scss";
import Card from "../../../assets/personalCourses/Card.png";
import Card1 from "../../../assets/personalCourses/prog1.jpeg";
import Card2 from "../../../assets/personalCourses/prog2.jpeg";
import Card3 from "../../../assets/personalCourses/prog3.png";
import Card4 from "../../../assets/personalCourses/prog4.jpeg";
import PersonalCourseCard from "./PersonalCourseCard";
import PersonalDots from "./PersonalDots/PersonalDots";
const data = [
  {
    title: "Курс 2",
    author: "Автор: И. Иванов",
    date: "Выпуск: 2022",
    image: Card1,
    description: "Курс для начинающих, который охватывает основы английского языка, включая алфавит, базовые слова и простую грамматику.",
    price: "5,000 руб.",
    targetAudience: "Новички, начинающие изучение английского языка."
  },
  {
    title: "Курс 3",
    author: "Автор: И. Иванов",
    date: "Выпуск: 2022",
    image: Card2,
    description: "Курс для продолжающих, включающий изучение сложных времен, расширение словарного запаса и разговорную практику.",
    price: "7,500 руб.",
    targetAudience: "Студенты с базовыми знаниями английского языка."
  },
  {
    title: "Курс 4",
    author: "Автор: И. Иванов",
    date: "Выпуск: 2022",
    image: Card3,
    description: "Курс для продвинутых, с упором на улучшение произношения, изучение идиом и деловой английский.",
    price: "10,000 руб.",
    targetAudience: "Студенты с уверенным уровнем английского, стремящиеся к совершенствованию."
  },
  {
    title: "Курс 5",
    author: "Автор: И. Иванов",
    date: "Выпуск: 2022",
    image: Card4,
    description: "Интенсивный курс подготовки к международным экзаменам, включая IELTS и TOEFL, с акцентом на грамматику и эссе.",
    price: "15,000 руб.",
    targetAudience: "Студенты, готовящиеся к сдаче международных экзаменов."
  },
  {
    title: "Курс 2",
    author: "Автор: И. Иванов",
    date: "Выпуск: 2022",
    image: Card1,
    description: "Курс для начинающих, который охватывает основы английского языка, включая алфавит, базовые слова и простую грамматику.",
    price: "5,000 руб.",
    targetAudience: "Новички, начинающие изучение английского языка."
  },
  {
    title: "Курс 3",
    author: "Автор: И. Иванов",
    date: "Выпуск: 2022",
    image: Card2,
    description: "Курс для продолжающих, включающий изучение сложных времен, расширение словарного запаса и разговорную практику.",
    price: "7,500 руб.",
    targetAudience: "Студенты с базовыми знаниями английского языка."
  },
  {
    title: "Курс 4",
    author: "Автор: И. Иванов",
    date: "Выпуск: 2022",
    image: Card3,
    description: "Курс для продвинутых, с упором на улучшение произношения, изучение идиом и деловой английский.",
    price: "10,000 руб.",
    targetAudience: "Студенты с уверенным уровнем английского, стремящиеся к совершенствованию."
  },
  {
    title: "Курс 5",
    author: "Автор: И. Иванов",
    date: "Выпуск: 2022",
    image: Card4,
    description: "Интенсивный курс подготовки к международным экзаменам, включая IELTS и TOEFL, с акцентом на грамматику и эссе.",
    price: "15,000 руб.",
    targetAudience: "Студенты, готовящиеся к сдаче международных экзаменов."
  }
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
          <PersonalCourseCard key={index} 
          describtion={item.description}
          price={item.price}
          target={item.targetAudience}
          title={item.title} author={item.author} date={item.date} image={item.image} />
        ))}
      </div>
      <PersonalDots totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </section>
  );
};

export default PersonalCourses;

 