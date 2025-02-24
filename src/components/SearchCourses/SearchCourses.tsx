import { useEffect, useState } from "react";
import styles from "./SearchCourses.module.scss"
import CourseService from "../../services/Course";
import { useParams } from "react-router-dom";
import SearchCard from "./SearchCard/SearchCard";


interface Course {
    id: number,
    author: string,
    title: string,
    description: string,
    course_for: String[],
    release_date: string,
    course_logo: string,
}


const SearchCourses = () => {

    const { query } = useParams<{ query: string }>();
    const [cards, setCards] = useState<Course[]>([])
    useEffect(() => {
        const handleSearch = async () => {
            try {
                if (query) {

                    const response = await CourseService.SearchCourses(query)
                    setCards(response.data.courses)
                }
            } catch {

            }
        }
        handleSearch()
    }, [])
    return (<div className={styles.courses}>
        {
            cards.length == 0 && (

                <h1 className={styles.courses__title}>
                    По запросу {query} ничего не найдено
                </h1>
            )
        }
         {
            cards.length > 0 && (

                <h1 className={styles.courses__title}>
                    По запросу {query} найдено:
                </h1>
            )
        }
        <div className={styles.courses__cards}>
            {cards.map(item => (
                <SearchCard
                    key={item.id}
                    item={item}
                />
            ))}
        </div>
    </div>);
}

export default SearchCourses;
