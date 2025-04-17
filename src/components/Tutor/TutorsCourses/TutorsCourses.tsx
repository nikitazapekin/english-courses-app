import TutorCourse from "../TutorCourse/TutorCourse";
import styles from "./TutorsCourses.module.scss"
/* 
interface TutorCoursesProps {
    cards: {

        id: number,
        author: string,
        title: string,
        description: string,
        course_for: String[],
        release_date: string,
        course_logo: string,


        
        bans:  number[],
        isvisible: boolean,
        warnings_data:  number[],
    }[]


} */

    
interface Warning {
    id: number,
    warning_text:string,
    warning_date: string,
    is_active: boolean
}

interface Ban {

    id: number,
    ban_text:string,
    ban_date: string,
    is_active: boolean
   
}
interface TutorCoursesProps {
    cards: {
    id: number,
    author: string,
    title: string,
    description: string,
    course_for: String[],
    release_date: string,
    course_logo: string,


    bans: number[],
    isvisible: boolean,
    warnings: number[],


    warnings_data: Warning[],
    bans_data:  Ban[],
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


            {cards.length == 0 && (
                <div className={styles.nothing}>
                    У вас еще нету ваших курсов
                </div>
            )}
        </div>);
}

export default TutorsCourses;