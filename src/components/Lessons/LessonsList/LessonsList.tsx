import styles from "./LessonsList.module.scss"
import { useLocation, useParams } from "react-router-dom";
import { lessons, testing } from "./consts";
import LessonsCard from "../LessonsCard/LessonsCard";
import { useEffect, useState } from "react";
import LessonService from "../../../services/Lesson";
import CourseService from "../../../services/Course";

interface GetLessonsResponse {

 
    id: number,
    title: string,
    description: string,
    durability: string,
    video: String[],
    materials: String[]
  

}
 
const LessonsList = () => {

    const { id } = useParams();
    const [isLessons, setIsLessons] = useState(true);
    const [cards, setCards] = useState<GetLessonsResponse[]>()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const handleSelect = (value: boolean) => {
        setIsLessons(value)
    }

    const location = useLocation();
    const lastPathSegment = location.pathname.split("/").pop();

    useEffect(() => {
        const handleGet = async () => {
            try {
                const response = await LessonService.GetLessons(lastPathSegment!)
                if (response.data.lessons) {

                    setCards(response.data.lessons)
                }
            } catch {

            }
        }
        handleGet()

        const handleGetCourse = async () => {
            try {

                const response = await CourseService.GetCourseInfo(lastPathSegment!)
               setTitle(response.data.courses.course.title)
               setDescription(response.data.courses.course.description)
            } catch {

            }
        }
        handleGetCourse()
    }, [])
    return (
        <div className={styles.lessons}>
            <div className={styles.lessons__inner}>

                <h1 className={styles.lessons__title}>
                  {title}
                </h1>
                <h1 className={styles.lessons__text}>
               {description}
                </h1>
                <div className={styles.lessons__panel}>
                    <p className={styles.lessons__panel__text} onClick={() => handleSelect(true)}>
                        Уроки
                    </p>
                    <p className={styles.lessons__panel__text} onClick={() => handleSelect(false)}>
                        Тематические тесты
                    </p>
                </div>
                {isLessons && (
                    <div className={styles.lessons__list}>
                        {cards && cards.map((item, index) => (
                            <LessonsCard
                                key={item.id}
                                isLessons={true}
                                item={{
                                    title: item.title,
                                    timestampt: item.durability,
                                    id: index,
                                    lessonId: item.id, 
                                    courseId: Number(lastPathSegment!)

                                }
                                }
                            />
                        ))}

                    </div>
                )}
       
            </div>
        </div>
    );
}

export default LessonsList;


