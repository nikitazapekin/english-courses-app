import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./CoursesList.module.scss";
import CourseService from "../../services/Course";
import CoursesListDots from "./CoursesListDots";
import { useSelector } from "react-redux";
import { CataljgSelectorPage } from "../../store/selectors/CatalogSelector";
import adminService from "../../services/Admin";

import Item from "./Item/Item";
import { AddWarningSelectorPage } from "../../store/selectors/AddWarningModal.selector";
import { useDispatch } from "react-redux";
import { setIsBanned } from "../../store/slices/AddWarningModal/AddWarningModal";
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

    const [isAdmin, setIsAdmin] = useState(false)
    useEffect(() => {
        const handleGet = async () => {
            try {
                const response = await adminService.isAdmin()
                setIsAdmin(response.data.isAdmin)
            } catch (e) {
                console.log(e)
            }
        }
        handleGet()
    }, [])
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                if (selector.selectedType) {
                    if (selector.selectedType == "Все") {
                        const response = await CourseService.GetCourses(1, itemsPerPage);
                        setCards(response.data.courses)
                        setPages(1)
                    }
                    else {

                        const response = await CourseService.GetCoursesType(currentPage, itemsPerPage, selector.selectedType);
                        setCards(response.data.courses)
                        setPages(1)
                    }
                }
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
    const warningSelector = useSelector(AddWarningSelectorPage)
    const dispatch = useDispatch()
    useEffect(() => {
        if (warningSelector.isBanned) {
            setCards(prev => prev.filter(item => item.id != warningSelector.selectedCourse))
            dispatch(setIsBanned({ isBanned: false }))
        }
    }, [warningSelector])
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
                            <Item
                                item={item}
                                isAdmin={isAdmin}
                            />
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
