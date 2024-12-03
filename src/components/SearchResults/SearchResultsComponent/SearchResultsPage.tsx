import styles from "./SearchResults.module.scss"
import PersonalCourseCard from "../../PersonalProfile/PersonalCourses/PersonalCourseCard"
import Card from "../../../assets/personalCourses/Card.png"
import PersonalDots from "../../PersonalProfile/PersonalCourses/PersonalDots/PersonalDots"
import { useState } from "react"
import SearchDots from "../SearchDots/SearchDots"
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
                            <PersonalCourseCard key={index} title={item.title} author={item.author} date={item.date} image={item.image} />
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