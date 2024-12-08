import styles from "./SearchResults.module.scss"
import PersonalCourseCard from "../../PersonalProfile/PersonalCourses/PersonalCourseCard"
import Card from "../../../assets/personalCourses/Card.png"
import PersonalDots from "../../PersonalProfile/PersonalCourses/PersonalDots/PersonalDots"
import { useState } from "react"
import SearchDots from "../SearchDots/SearchDots"

import Card1 from "../../../assets/personalCourses/prog1.jpeg";
import Card2 from "../../../assets/personalCourses/prog2.jpeg";
import Card3 from "../../../assets/personalCourses/prog3.png";
import Card4 from "../../../assets/personalCourses/prog4.jpeg";
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
  

const ITEMS_PER_PAGE = 3
const SearchResultsComponent = () => {


    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentData = data.slice(startIndex, endIndex);
  
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };

    


    return (
        <div className={styles.search}>
            <div className={styles.search__inner}>
                <h1 className={styles.search__title}>
                    По запросу "программист" найдено следующее:
                </h1>
                <div className={styles.searh__list}>



                    <div className={styles.search__cards}>

                        {currentData.map((item, index) => (
                            <PersonalCourseCard key={index} 
                            describtion={item.description}
                            price={item.price}
                            target={item.price}
                            title={item.title} author={item.author} date={item.date} image={item.image} />
                        ))}
                        {/*
                        <PersonalDots />
                          <PersonalDots totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
                        */}
                        <SearchDots   totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchResultsComponent;