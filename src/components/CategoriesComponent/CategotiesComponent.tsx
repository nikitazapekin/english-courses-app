import { useEffect, useState } from "react";
import CoursesList from "../CoursesList/CoursesList";
import SearchPanel from "../SearchPanel/SearchPanel";
import SearchToolbar from "../SearchToolbar/SearchToolbar";
import styles from "./CategoriesComponent.module.scss"
import { useNavigate } from "react-router-dom";
import TutorService from "../../services/Tutor";
import adminService from "../../services/Admin";
import CourseService from "../../services/Course";
interface Course {

    id: number,
    author: string,
    title: string,
    description: string,
    fulldescription: string,


    course_for: String[],
    course_suitable: String[],
    for_what_reasons: String[],
    about_course: String[],
    tag: string,
    course_rate: string,
    release_date: string,
    course_logo: string,
}

interface SimplifiedCourse {
    id: number;
    author: string;
    title: string;
    description: string;
    course_for: String[];
    release_date: string;
    course_logo: string;
}


interface CourseNew {
    id: number,
    author: string,
    title: string,
    description: string,
    course_for: String[],
    release_date: string,
    course_logo: string,
}
const CategoriesComponent = () => {
    const [query, searchQuery] = useState("")
    const [newCards, setNewCards] = useState<Course[]>([])
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        searchQuery(event.target.value);
    };

    const navigate = useNavigate()

    /*
    interface Course {
    id: number,
    author: string,
    title: string,
    description: string,
    course_for: String[],
    release_date: string,
    course_logo: string,
} 
    */
    const handleSearch = async () => {
        try {
            const resp = await CourseService.GetCoursesQuery(1, 5, query)
            console.log(resp.data.courses)
            setNewCards(resp.data.courses)
        } catch (e) {
            console.log(e)
        }

    }
    const [courseNew, setCourseNew] = useState<CourseNew[]>([])
    const handleNewItem = (items: Course[]) => {
        let newArr = items.map(item => {
            return {
                id: item.id, author: item.author, title: item.title, description: item.description, course_for: item.course_for, release_date: item.release_date,
                course_logo: item.course_logo,
            }
        })
        setCourseNew(newArr)
}
useEffect(()=> {
handleNewItem(newCards)
}, [newCards])
    /*  const simplifyCourse = (course: Course): SimplifiedCourse => {
         return {
             id: course.id,
             author: course.author,
             title: course.title,
             description: course.description,
             course_for: course.course_for,
             release_date: course.release_date,
             course_logo: course.course_logo
         }
     }
     
 
     // Преобразуем курсы перед передачей в CoursesList
     const simplifiedCourses = newCards.map(simplifyCourse);
     const simplifiedNewCards = newCards.map(simplifyCourse);
  */
    return (

        <section className={styles.categories}>
            <div className={styles.categories__inner}>
                <SearchToolbar />

                <div className={styles.categories__content}>

                    <SearchPanel handleChange={handleChange}
                        handleSearch={handleSearch}
                    />
                    <CoursesList
                        courses={courseNew}
                    //  courses={newCards}
                    />
                </div>
            </div>
        </section>
    );
}

export default CategoriesComponent;

/*

interface Course {
 
    id: number,
    author: string,
    title: string,
    description:  string,
    fulldescription:  string,


    course_for:String[],
    course_suitable:  String[],
    for_what_reasons: String[],
    about_course:  String[],
    tag: string,
    course_rate:string,
    release_date: string,
    course_logo: string,
}

*/