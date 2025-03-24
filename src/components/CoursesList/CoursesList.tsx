import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./CoursesList.module.scss";
import CourseService from "../../services/Course";
import CoursesListDots from "./CoursesListDots";
import { useSelector } from "react-redux";
import { CataljgSelectorPage } from "../../store/selectors/CatalogSelector";
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

    const selector = useSelector(CataljgSelectorPage)
    const { page, limit, query } = useParams<{ page?: string; limit?: string, query?: string }>();
    const navigate = useNavigate();

    const [cards, setCards] = useState<Course[]>([]);
    const [sortOption, setSortOption] = useState<SortOption>("price");
    const [currentPage, setCurrentPage] = useState<number>(Number(page) || 1);
    const [pages, setPages] = useState<number>(1);
    const itemsPerPage = Number(limit) || 16;
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
    };

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                if (query) {
                    const response = await CourseService.GetCoursesQuery(currentPage, itemsPerPage, query);
                    setCards(response.data.courses)
                    setPages(response.data.pages)
                } else {
                    const response = await CourseService.GetCourses(currentPage, itemsPerPage);
                    setCards(response.data.courses)
                    setPages(response.data.pages)
                }
            } catch (error) {
                console.error("Ошибка при загрузке курсов:", error);
            }
        };
        fetchCourses();
    }, [currentPage, itemsPerPage, query]);
useEffect(()=> {
    const fetchCourses = async () => {
        try {

          if(selector.selectedType) {
            
          }
          /*   if (query) {
                const response = await CourseService.GetCoursesQuery(currentPage, itemsPerPage, query);
                setCards(response.data.courses)
                setPages(response.data.pages)
            } else {
                const response = await CourseService.GetCourses(currentPage, itemsPerPage);
                setCards(response.data.courses)
                setPages(response.data.pages)
            } */



        } catch (error) {
            console.error("Ошибка при загрузке курсов:", error);
        }
    };
    fetchCourses();
}, [selector.selectedType])
    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
        if (query) {
            navigate(`/catalog/${newPage}/${itemsPerPage}/${query}`);
        } else {
            navigate(`/catalog/${newPage}/${itemsPerPage}`);
        }
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
                                                <div className={styles.card__wrapper}>
                                    <h3 className={styles.card__title}>{item.title}</h3>
                                    <h4 className={styles.card__description}>
                                        {item.description}
                                    </h4>
                                    <p className={styles.card__rating}>Автор: {item.author}  </p>
                                    <p className={styles.card__releaseDate}>
                                        Дата выпуска: {formatDate(item.release_date)}
                                    </p>
                                    <div className={styles.card__line} />
                                    <div className={styles.card__for}>
                                        {item.course_for.map((it, index) => (
                                            <div className={styles.card__item} key={index}>
                                                {it}
                                            </div>
                                        ))}
                                        </div>
                                    </div>
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

/* import React, { useEffect, useState } from "react";
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
    const { page, limit, query } = useParams<{ page?: string; limit?: string, query?: string }>();  
    const navigate = useNavigate();

    const [cards, setCards] = useState<Course[]>([]);
    const [sortOption, setSortOption] = useState<SortOption>("price");
    const [currentPage, setCurrentPage] = useState<number>(Number(page) || 1);
    const [pages, setPages] = useState<number>(1);
    const itemsPerPage = Number(limit) || 16;
 
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                if(query) {

                    const response = await CourseService.GetCoursesQuery(currentPage, itemsPerPage, query);
                    
                    setCards(response.data.courses)
                    setPages(response.data.pages)
                } else {
                    const response = await CourseService.GetCourses(currentPage, itemsPerPage);
                    
                    setCards(response.data.courses)
                    setPages(response.data.pages)
                }  
            } catch (error) {
                console.error("Ошибка при загрузке курсов:", error);
            }
        };
        fetchCourses();
    }, [currentPage, itemsPerPage, query]);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
        if(query) {

            navigate(`/catalog/${newPage}/${itemsPerPage}/${query}`);
        } else {
            navigate(`/catalog/${newPage}/${itemsPerPage}`);
        }
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

  */