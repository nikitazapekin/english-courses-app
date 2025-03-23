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
    const handleRemove = async (email: string, courseId: string) => {
        try {
          
            const response = await TutorService.removeStudentsCourse(email, courseId);

            if (response.data && response.data.success) {
              
                setData(prevData => {
                    if (!prevData) return prevData;
 
                    const updatedStudents = prevData.students.students.map(student => {
                        if (student.email === email) {
                           
                            const updatedCourses = student.courses.filter(id => id !== courseId);
                            return {
                                ...student,
                                courses: updatedCourses
                            };
                        }
                        return student;
                    });
 
                    return {
                        ...prevData,
                        students: {
                            ...prevData.students,
                            students: updatedStudents
                        }
                    };
                });

                console.log("Студент успешно удален с курса");
            } else {
                console.error("Ошибка при удалении студента с курса");
            }
        } catch (err) {
            console.error("Ошибка при удалении студента:", err);
        }
    };

 
    useEffect(() => {
        const handleGet = async () => {
            try {
                const response = await TutorService.GetStudentsCourse();

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
    }, [handleRemove]);
    if (!data) return <div>Loading...</div>;

    const { courses, students } = data.students;

    // Формируем список курсов с привязанными студентами
    const coursesWithStudents = courses.map(course => {
        const studentsInCourse = students.filter(student =>
            student.courses.includes(course.id.toString())
        );
        return {
            ...course,
            students: studentsInCourse
        };
    });

    // Обработчик удаления студента с курса
     









 

    return (
        <div className={styles.students}>
            <h1 className={styles.edit__title}>Студенты на ваших курсах</h1>
            <div className={styles.edit__content}>
                {coursesWithStudents.map(course => (
                    <div key={course.id} className={styles.course}>
                        <h2>{course.title}</h2>
                        <div className={styles.list}>
                            {course.students.map((student, index) => (
                                <div key={student.id} className={styles.list__item}>
                                    <span className={styles.list__item__text}>
                                        {index + 1}. {student.username}
                                    </span>
                                    <p
                                        className={styles.list__item__remove}
                                        onClick={() => handleRemove(student.email, String(course.id))}
                                    >
                                        Удалить
                                    </p>
                                </div>
                            ))}
                        </div>

                        {course.students.length === 0 && (
                            <div>На данный курс еще никто не записался</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TutorStudentsComponent;

/* import { useEffect, useState } from "react";
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

    const { courses, students } = data.students;

    const coursesWithStudents = courses.map(course => {
        const studentsInCourse = students.filter(student =>
            student.courses.includes(course.id.toString())
        );
        return {
            ...course,
            students: studentsInCourse
        };
    });
 



    const handleRemove = async (email: string, courseId: string) => {
        try {
       
         const response = await TutorService.removeStudentsCourse(email, courseId);
    
          if (response.data && response.data.success) {
         
                setData(prevData => {
                    if (!prevData) return prevData;
     
                    const updatedData = { ...prevData };
     
                    updatedData.students.students = prevData.students.students.filter(
                        student => student.email !== email || !student.courses.includes(courseId)
                    );
    
                    return updatedData;
                });
    
                console.log("Студент успешно удален с курса");
            } else {
                console.error("Ошибка при удалении студента с курса");
            }
        } catch (err) {
            console.error("Ошибка при удалении студента:", err);
        }
    };

    return (
        <div className={styles.students}>
            <h1 className={styles.edit__title}>Студенты на ваших курсах</h1>
            <div className={styles.edit__content}>
                {coursesWithStudents.map(course => (
                    <div key={course.id} className={styles.course}>
                        <h2>{course.title}</h2>
                        <div className={styles.list}>
                            {course.students.map((student, index) => (
                                <div key={student.id}

                                    className={styles.list__item}
                                >

                                    <span className={styles.list__item__text}>
                                        {index + 1}. {student.username}
                                    </span>
                                    <p className={styles.list__item__remove} 
                                    onClick={()=>handleRemove(student.email, String(course.id))}
                                    >
                                        Удалить
                                    </p>

                                </div>
                            ))}
                        </div>

                        {course.students.length == 0 && (
                            <div>
                                На данный курс еще никто не записался
                            </div>
                        )}
                    </div>
                ))}
            </div>

          
        </div>
    );
};

export default TutorStudentsComponent;  */