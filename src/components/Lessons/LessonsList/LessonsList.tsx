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



/*

 
interface CourseDetails {
    message:string,
    courses: {
        course: {
 

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


    },
    tutor: {
        id: number,
        username:string,
        email: string,
        description: string,
        rate:string,
        specialization: string,
        english_level:string,
        full_description: string,
        avatar_base64: null,
        experience: String[],
        work_experience: number,
    }
    }
}
    */
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
                                    id: index

                                }
                                }
                            />
                        ))}

                    </div>
                )}
                {/*
                    title: string,
        timestampt: string,
        id: number,
                {isLessons && (
                    <div className={styles.lessons__list}>
                        {lessons.map(item => (
                            <LessonsCard key={item.id} item={item} isLessons={isLessons} />
                        ))}
                    </div>
                )}
                {!isLessons && (
                    <div className={styles.lessons__list}>
                        {testing.map(item => (
                            <LessonsCard key={item.id} item={item}  isLessons={isLessons}  />
                        ))}
                    </div>
                )}
                */}
            </div>
        </div>
    );
}

export default LessonsList;


