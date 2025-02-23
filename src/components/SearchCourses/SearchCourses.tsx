import { useEffect, useState } from "react";
import styles from "./SearchCourses.module.scss"
import CourseService from "../../services/Course";



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

    // const cards

    const [cards, setCards] = useState<Course[]>([])
    useEffect(() => {
        const handleSearch = async () => {
            try {
                const response = await CourseService.SearchCourses("мед")
                setCards(response.data.courses)
            } catch {

            }
        }
        handleSearch()
    }, [])
    return (<div>
        {cards.map(item => (
            <div>
                {item.title}

                <img
                alt="logo"
                src={item.course_logo}
                />
            </div>
        ))}
    </div>);
}

export default SearchCourses;