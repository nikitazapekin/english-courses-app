import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./CoursesList.module.scss";
import CourseService from "../../services/Course";
import CoursesListDots from "./CoursesListDots";

type SortOption = "price" | "rating" | "releaseDate";
 

    interface Course {
        id: number,
        author: string,
        title: string,
        description: string,
        course_for: String[],
        release_date: string,
        course_logo: string,
    }
    

const CoursesList = () => {
    const { page, limit } = useParams<{ page?: string; limit?: string }>();  
    const navigate = useNavigate();

    const [cards, setCards] = useState<Course[]>([]);
    const [sortOption, setSortOption] = useState<SortOption>("price");
    const [currentPage, setCurrentPage] = useState<number>(Number(page) || 1);
    const [pages, setPages] = useState<number>(1);
    const itemsPerPage = Number(limit) || 10;

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await CourseService.GetCourses(currentPage, itemsPerPage);
               // setCards(response.data.courses);
                setCards(response.data.courses)
                setPages(response.data.pages)
            } catch (error) {
                console.error("Ошибка при загрузке курсов:", error);
            }
        };
        fetchCourses();
    }, [currentPage, itemsPerPage]);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
        navigate(`/catalog/${newPage}/${itemsPerPage}`);
    };

    return (
        <div className={styles.courses}>
            <div className={styles.courses__inner}>
                <div className={styles.courses__header}>
                    <h2 className={styles.courses__title}>Новинки</h2>
                    <select
                        className={styles.courses__select}
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value as SortOption)}
                    >
                        <option value="price">Сортировать по стоимости</option>
                        <option value="rating">Сортировать по рейтингу</option>
                        <option value="releaseDate">Сортировать по выпуску</option>
                    </select>
                </div>

                <div className={styles.courses__cards}>
                    {cards.length > 0 ? (
                        cards.map((item) => (
                            <div className={styles.card} key={item.id}>
                                <Link to={`/card/${item.id}`}>
                                    <img className={styles.card__image} src={item.course_logo} alt={item.title} />
                                    <h3 className={styles.card__title}>{item.title}</h3>
                                    <p className={styles.card__rating}>Автор: {item.author}</p>
                                    <p className={styles.card__releaseDate}>Дата выпуска: {item.release_date}</p>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <div className={styles.courses__text}>Курсы не найдены</div>
                    )}
                </div>

                <CoursesListDots totalPages={pages} currentPage={currentPage} onPageChange={handlePageChange} />
            </div>
        </div>
    );
};

export default CoursesList;



/* 

import React, { useEffect, useState } from "react";
import styles from "./CoursesList.module.scss";
import Card from "../../assets/cards/card1.png";
import Design from "../../assets/cards/design.png";
import CoursesListDots from "./CoursesListDots";
import { Link, useNavigate } from "react-router-dom";
import CourseService from "../../services/Course";

type SortOption = "price" | "rating" | "releaseDate";

interface Course {
 
    id: number,
    author: string,
    title: string,
    description: string,
    course_for: String[],
    release_date: string,
    course_logo: string,
}

const initialCards: Course[] = [

];

interface CoursesListProps {
    query: string;
}

const CoursesList = ({ query }: CoursesListProps) => {
    const [cards, setCards] = useState<Course[]>(initialCards);
    const [sortOption, setSortOption] = useState<SortOption>("price");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pages, setPages] = useState(1)
    const [limit, setLimit] = useState(10)
    const navigate = useNavigate()
    useEffect(() => {
        const handleGet = async () => {

            try {

                const reposnse = await CourseService.GetCourses(1, 1)
                setCards(reposnse.data.courses)
            } catch {

            }
        }
        handleGet()

    }, [])


    const handlePageChange = (page: number) => {
        navigate(`/catalog/${page}/${limit}`)
    };
    return (
        <div className={styles.courses}>
            <div className={styles.courses__inner}>



                <div className={styles.courses__header}>
                    <h2 className={styles.courses__title}>Новинки</h2>
                    <select
                        className={styles.courses__select}
                        value={sortOption}

                    >
                        <option value="price">Сортировать по стоимости</option>
                        <option value="rating">Сортировать по рейтингу</option>
                        <option value="releaseDate">Сортировать по выпуску</option>
                    </select>
                </div>

                <div className={styles.courses__cards}>
                    {cards.length > 0 && cards.map((item, index) => (
                        <div className={styles.card} key={index}>
                            <Link to="/card">
                                <img className={styles.card__image} src={item.course_logo} alt={item.title} />
                                <h3 className={styles.card__title}>{item.title}</h3>

                                <p className={styles.card__rating}>Автор: {item.author}</p>
                                <p className={styles.card__releaseDate}>Дата выпуска: {item.release_date}</p>
                            </Link>
                        </div>
                    ))}
                </div>


                {cards.length === 0 && (
                    <div className={styles.courses__text}>
                        По вашему запросу "{query}" ничего не найдено
                    </div>
                )}

                <CoursesListDots
                    totalPages={pages}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />




            </div>
        </div>
    );
};

export default CoursesList;
 */

/*    <div className={styles.courses__header}>
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
    {displayedCards.map((item, index) => (
        <div className={styles.card} key={index}>
            <Link to="/card">
                <div className={styles.card__preview} style={{ backgroundColor: item.color }}>
                    <p className={styles.card__name}>{item.name}</p>
                    <img className={styles.card__image} src={item.image} alt={item.title} />
                </div>
                <h3 className={styles.card__title}>{item.title}</h3>
                <p className={styles.card__price}>{`${item.price}$`}</p>
                <p className={styles.card__rating}>Рейтинг: {item.rating}</p>
                <p className={styles.card__releaseDate}>Дата выпуска: {item.releaseDate}</p>
            </Link>
        </div>
    ))}
</div>
{cards.length === 0 && (
    <div className={styles.courses__text}>
        По вашему запросу "{query}" ничего не найдено
    </div>
)}

<CoursesListDots
    totalPages={totalPages}
    currentPage={currentPage}
    onPageChange={handlePageChange}
/>
*/



/*
    const totalPages = Math.ceil(cards.length / ITEMS_PER_PAGE);
 
 
 
 
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
 
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
 
    useEffect(() => {
        if (query) {
            setCards(
                initialCards.filter((item) =>
                    item.title.toLowerCase().includes(query.toLowerCase()) ||
                    item.name.toLowerCase().includes(query.toLowerCase())
                )
            );
            setCurrentPage(1);  
        } else {
            setCards(initialCards);
        }
    }, [query]);
 
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const displayedCards = cards.slice(startIndex, startIndex + ITEMS_PER_PAGE);
 */