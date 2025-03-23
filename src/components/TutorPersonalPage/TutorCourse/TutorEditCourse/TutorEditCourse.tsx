
import { useState, ChangeEvent, useEffect } from "react";
import styles from "./TutorEditCourse.module.scss";
import { dataPreview } from "./Consts";
import { useDispatch } from "react-redux";
import { setForm, setOpenModal } from "../../../../store/slices/CreateCourseSlice/CreateCourseSlice";
import CourseService from "../../../../services/Course";
import { useSelector } from "react-redux";
import { OpenCourseSelector } from "../../../../store/selectors/OpenCourseSelector";
import LessonService from "../../../../services/Lesson";
import Lesson from "./Lesson/Lesson";
import EditModalLessons from "./EditCourseCardsModal/EditCourseCardsModal";
import { setIsOpenEditModalLessons, setIsOpenTestsModal } from "../../../../store/slices/EditModalLesson/EditModalLesson";
import TestService from "../../../../services/Test";
import Test from "./Test/Test";
import { useNavigate } from "react-router-dom";

interface FormState {
    name: string;
    description: string;
    for: string;
    logo: string;
    course_for: String[];
    fulldescription: string;
    for_what_reasons: String[];
    about_course: String[];
    tag: string;
}
interface Props {
    id: string
}
interface Test {

    id: number;
    name: string,
    test_number: number;
    duration: string,
    description: string,
    topics: String[],
    course_id: number;

}

type Lesson = {
    id: number;
    title: string;
    description: string;
    durability: string;
    video: String[];
    materials: String[];
};

type Lessons = Lesson[];
const TutorEditCourse = ({ id }: Props) => {
    const editCourse = useSelector(OpenCourseSelector)
    const [lessons, setLessons] = useState<Lessons>()
    const [tests, setTests] = useState<Test[]>()
    const [formState, setFormState] = useState<FormState>({
        name: "", description: "", for: "",
        logo: "",
        fulldescription: "", for_what_reasons: [], about_course: [], tag: "",
        course_for: []
    });

    useEffect(() => {
        const handleGet = async () => {
            try {
                const repsonse = await LessonService.GetLessons(id)
                console.log(repsonse)
                if (repsonse.data.lessons) {

                    setLessons(repsonse.data.lessons)
                }
            } catch {

            }
        }
        handleGet()
    }, [])


    useEffect(() => {
        const handleGetTests = async () => {
            try {
                const repsonse = await TestService.GetTest(id)
                console.log("TEST", repsonse)
                if (repsonse.data.tests) {
                    setTests(repsonse.data.tests)

                }
            } catch {

            }
        }
        handleGetTests()
    }, [])



    useEffect(() => {
        if (editCourse.course) {
            setFormState({
                name: editCourse.course.title || "",
                description: editCourse.course.description || "",
                for: "",
                logo: editCourse.course.course_logo || "",
                fulldescription: editCourse.course.fulldescription || "",
                for_what_reasons: editCourse.course.course_for || [],
                about_course: editCourse.course.about_course || [],
                tag: editCourse.course.tag || "",
                course_for: editCourse.course.course_for || []
            });
        }

    }, [editCourse])

    const [selectInputs, setSelectInputs] = useState<{ [key: string]: string }>({});

    const dispatch = useDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));



    };


    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.result) {
                    setFormState(prevState => ({ ...prevState, logo: reader.result as string }));
                }
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    const handleRemoveImage = () => {
        setFormState(prevState => ({ ...prevState, logo: "" }));
    };


    const handleAddItem = (name: keyof FormState) => {
        if (!selectInputs[name]) return;
        setFormState(prevState => ({
            ...prevState,
            [name]: [...prevState[name] as string[], selectInputs[name]]
        }));
        setSelectInputs(prev => ({ ...prev, [name]: "" }));
    };


    const handleRemoveItem = (name: keyof FormState, index: number) => {
        setFormState(prevState => ({
            ...prevState,
            [name]: (prevState[name] as string[]).filter((_, i) => i !== index)
        }));
    };

    useEffect(() => {
        dispatch(setForm(formState));
    }, [formState]);

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
            const response = await CourseService.EditCourseInfo({ data: { ...formState, id: id } }, id);

        } catch (error) {
            console.error("Ошибка при создании курса:", error);
        }
    };
    const handleOpenModal = (type: string) => {
        dispatch(setOpenModal({ type: type }));
    };
    const handleOpenModalLessons = (lessonId: string) => {

        dispatch(setIsOpenEditModalLessons({ lessonId: lessonId }))
    }


    const handleOpenModalTests = (testId: string) => {
        dispatch(setIsOpenTestsModal({ testId: testId }))
    }

const navigate =  useNavigate()
    const handleDelete = async () => {
        try {
            const response = await CourseService.DeleteCourse(id)
            console.log(response)
            navigate(`/tutor/personal/courses`)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <section className={styles.panel}>
            <div className={styles.panel__container}>
                <div className={styles.panel__header}>
                    <h1 className={styles.panel__header__title}>Редактировать курс</h1>
                </div>
                <form className={styles.panel__fields}>
                    {dataPreview.map(item => (
                        <div key={item.id} className={styles.panel__field}>
                            <label className={styles.panel__field__title}>{item.title}</label>

                            {item.type === "input" && (
                                <input
                                    className={styles.panel__field__input}
                                    placeholder={item.placeholder}
                                    name={item.name}
                                    value={formState[item.name as keyof FormState] as string}
                                    onChange={handleChange}
                                />
                            )}

                            {item.type === "image" && (
                                <div className={styles.panel__field__wrapper}>
                                    {formState.logo ? (
                                        <div className={styles.imagePreview}>
                                            <img src={formState.logo} alt="Выбранное изображение" className={styles.previewImg} />
                                            <button type="button" className={styles.removeBtn} onClick={handleRemoveImage}>Удалить</button>
                                        </div>
                                    ) : (
                                        <>
                                            <p className={styles.panel__field__placeholder}>{item.placeholder}</p>
                                            <input
                                                className={styles.panel__field__imageInput}
                                                type="file"
                                                accept="image/*"
                                                name={item.name}
                                                onChange={handleFileChange}
                                            />
                                        </>
                                    )}
                                </div>
                            )}

                            {item.type === "select" && (
                                <div className={styles.selectContainer}>
                                    <div className={styles.selectContainer__wrapper}>

                                        <input
                                            className={styles.panel__field__input}
                                            placeholder={`Добавить ${item.placeholder.toLowerCase()}`}
                                            value={selectInputs[item.name] || ""}
                                            onChange={(e) => setSelectInputs(prev => ({ ...prev, [item.name]: e.target.value }))}
                                        />
                                        <button
                                            className={styles.addButton}
                                            type="button"
                                            onClick={() => handleAddItem(item.name as keyof FormState)}
                                        >
                                            Добавить
                                        </button>

                                    </div>
                                    <ul className={styles.selectList}>
                                        {(formState[item.name as keyof FormState] as string[]).map((value, index) => (
                                            <li key={index} className={styles.selectItem}>
                                                {value}
                                                <button
                                                    className={styles.removeBtn}
                                                    type="button"
                                                    onClick={() => handleRemoveItem(item.name as keyof FormState, index)}
                                                >
                                                    ❌
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                    <section className={styles.lessons}>
                        <h2 className={styles.lessons__title}>
                            Список уроков
                        </h2>
                        <div className={styles.lessons__list}>
                            {lessons?.map((item, index) => (
                                <Lesson
                                    key={index}
                                    item={item}
                                    index={index}
                                    handler={handleOpenModalLessons}
                                />
                            ))}
                        </div>
                    </section>







                    <section className={styles.lessons}>
                        <h2 className={styles.lessons__title}>
                            Список тестов
                        </h2>
                        <div className={styles.lessons__list}>
                            {tests?.map((item, index) => (
                                <Test
                                    key={index}
                                    item={item}
                                    index={index}
                                    handler={handleOpenModalTests}
                                />


                            ))}

                        </div>
                    </section>






                    <button className={styles.panel__btn} type="button" onClick={() => handleOpenModal("lesson")}>
                        Добавить урок
                    </button>
                    <button className={`${styles.panel__btn} ${styles.panel__btn__test}`} type="button"
                        onClick={() => handleOpenModal("test")}
                    >
                        Добавить тест
                    </button>

                    <button className={styles.panel__btn} type="button" onClick={handleSubmit}>
                        Сохранить изменения
                    </button>

                    <button className={`${styles.panel__btn} ${styles.panel__delete}`} type="button" onClick={handleDelete}>
                        Удалить курс
                    </button>
                </form>
            </div>


        </section>
    );
};

export default TutorEditCourse;
