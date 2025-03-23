import { useEffect, useState } from "react";
import TutorService from "../../../services/Tutor";
import styles from "./TutorStudentsComponent.module.scss";
interface Course {
    id: number;
    title: string;
    description: string;
    fulldescription: string;
    course_for: string[];
    course_suitable: string[];
    for_what_reasons: string[];
    about_course: string[];
    tag: string;
    course_rate: string;
    release_date: string;
    course_logo: string;
}

interface Student {
    id: number;
    username: string;
    email: string;
    courses: (string | null)[];
    avatar: string | null;
}

interface Students {
    message: string;
    students: {
        courses: Course[];
        students: Student[];
    };
}
const TutorStudentsComponent = () => {
    const [data, setData] = useState<Students | null>(null);

    useEffect(() => {
        const handleGet = async () => {
            try {
                const response = await TutorService.GetStudentsCourse();
                // Проверяем, что данные соответствуют ожидаемой структуре
                if (response.data && response.data.students && Array.isArray(response.data.students.courses) && Array.isArray(response.data.students.students)) {
                    setData(response.data);
                } else {
                    console.error("Invalid data format received from the server");
                }
            } catch (err) {
                console.log(err);
            }
        };

        handleGet();
    }, []);

    if (!data) return <div>Loading...</div>;

    // Извлекаем курсы и студентов из данных
    const { courses, students } = data.students;

    // Группируем студентов по курсам
    const coursesWithStudents = courses.map(course => {
        const studentsInCourse = students.filter(student => 
            student.courses.includes(course.id.toString())
        );
        return {
            ...course,
            students: studentsInCourse
        };
    });

    return (
        <div>
            <h1 className={styles.edit__title}>Студенты на ваших курсах</h1>
            <div className={styles.edit__content}>
                {coursesWithStudents.map(course => (
                    <div key={course.id}>
                        <h2>{course.title}</h2>
                        <ul>
                            {course.students.map(student => (
                                <li key={student.id}>{student.username}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <button className={styles.edit__btn} type="submit">
                Сохранить изменения
            </button>
        </div>
    );
};

export default TutorStudentsComponent;
/*  


   import { useEffect, useState } from "react";
import TutorService from "../../../services/Tutor";
import styles from "./TutorStudentsComponent.module.scss"






interface Course {
    id: number,
    title: string,
    description: string,
    fulldescription: string,
    course_for: string[],
    course_suitable: string[],
    for_what_reasons: string[],
    about_course: string[],
    tag:string,
    course_rate: string,
    release_date: string,
    course_logo:string,
}
interface Student {
    id:  number,
    username: string,
    email:string,
    courses:  string[]
    avatar: string
}
interface Students {
  
     
       
            courses:Course[]
            students: Student[]
        
    
}

 
const TutorStudentsComponent = () => {

    const [students, setStudents] = useState<Students>()
    useEffect(() => {
        const handleGet = async () => {
            try {

                const response = await TutorService.GetStudentsCourse()
                console.log(response)
                setStudents(response.data.students)
            } catch (err) {
                console.log(err)
            }
        }

        handleGet()
    }, [])
    return (<div>
{JSON.stringify(students)}

        <h1 className={styles.edit__title}>Студенты на ваших курсах</h1>
        <div className={styles.edit__content}>
 

        </div>
        <button className={styles.edit__btn} type="submit"  >
            Сохранить изменения
        </button>
    </div>);
}

export default TutorStudentsComponent;   */