import styles from "./LessonsList.module.scss"
import { useLocation, useParams } from "react-router-dom";
import { lessons, testing } from "./consts";
import LessonsCard from "../LessonsCard/LessonsCard";
import { useEffect, useState } from "react";
import LessonService from "../../../services/Lesson";
import CourseService from "../../../services/Course";
import TestService from "../../../services/Test";
import { setTest } from "../../../store/slices/TestSlice/TestSlice";

interface GetLessonsResponse {


    id: number,
    title: string,
    description: string,
    durability: string,
    video: String[],
    materials: String[]


}

interface GetTestResponse {



    id: number;
    name: string,
    test_number: number;
    duration: string,
    description: string,
    topics: String[],
    course_id: number;




}


const LessonsList = () => {

    const { id } = useParams();
    const [isLessons, setIsLessons] = useState(true);
    const [cards, setCards] = useState<GetLessonsResponse[]>()
    const [title, setTitle] = useState("")

    const [tests, setTests] = useState<GetTestResponse[]>()
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




        const handleGetTests = async () => {
            try {

                const response = await TestService.GetTest(lastPathSegment!)
                setTests(response.data.tests)
            } catch {

            }
        }
        handleGetTests()


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


                        {cards && cards.length > 0 && cards.map((item, index) => (
                            <LessonsCard
                                key={item.id}
                                isLessons={true}
                                item={{
                                    title: item.title,
                                    timestampt: item.durability,
                                    id: index,
                                    lessonId: item.id,
                                    courseId: Number(lastPathSegment!),
                                    isLesson: true
                                }}
                            />
                        ))}


                        {
                         cards?.length==0 && (
                            <h3>
                                Пока тут нету уроков...
                            </h3>
                          )
                        }
                    </div>
                )}





                {!isLessons && (
                    <div className={styles.lessons__list}>
                        {tests && tests.map((item, index) => (
                            <LessonsCard
                                key={item.id}
                                isLessons={true}
                                item={{
                                    title: item.name,
                                    timestampt: item.description,
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


