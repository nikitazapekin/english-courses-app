import { useEffect } from "react";
import styles from "./DeletedCourses.module.scss"
import adminService from "../../../services/Admin";
const DeletedCourses = () => {
    useEffect(() => {
        const handleGet = async () => {
            try {
                const resp = await adminService.GetBannedCourses()
                console.log(resp.data)
            } catch (e) {
                console.log(e)
            }
        }

        handleGet()
    }, [])
    return (
        <div className={styles.banned}>
            <h1 className={styles.banned__title}>
                Заблокированные курсы
            </h1>
            <div className={styles.cards}>

            </div>
        </div>);
}

export default DeletedCourses;



/*

import TutorCourse from "../TutorCourse/TutorCourse";
import styles from "./TutorsCourses.module.scss"
 
    
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

/*
@import "../../../theme/theme";

.cards {
    width: 100%;
    display: flex;
    flex-direction: column;
 
}

.nothing {
  font-weight: 700;
  @include fontSize(32px);
  color: $black;
  font-family: "Inter", sans-serif;
  text-align: center;
  margin-top: 50px;
}
  */
