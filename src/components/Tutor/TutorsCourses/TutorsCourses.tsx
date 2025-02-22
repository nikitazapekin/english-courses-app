import TutorCourse from "../TutorCourse/TutorCourse";
import styles from "./TutorsCourses.module.scss"

interface TutorCoursesProps {
    cards: {

        id: number,
        author: string,
        title: string,
        description: string,
        course_for: String[],
        release_date: string,
        course_logo: string,
    }[]


}
const TutorsCourses = ({ cards }: TutorCoursesProps) => {
    return (
        <div className={styles.cards}>

            {cards.length > 0 && cards != null && cards != undefined && (
                <>
                    {cards.map((item, index) => (
                        <TutorCourse
                            item={item}
                            key={index}
                        />
                    ))}
                </>
            )}
        </div>);
}

export default TutorsCourses;