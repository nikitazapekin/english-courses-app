
import { useState, ChangeEvent, useEffect } from "react";
import styles from "./TutorEditCourse.module.scss";
import { dataPreview } from "./Consts";
import { useDispatch } from "react-redux";
import { setForm, setOpenModal } from "../../../../store/slices/CreateCourseSlice/CreateCourseSlice";
import CourseService from "../../../../services/Course";
import { useSelector } from "react-redux";
import { OpenCourseSelector } from "../../../../store/selectors/OpenCourseSelector";

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
const TutorEditCourse = ({id}: Props) => {
    const editCourse = useSelector(OpenCourseSelector)
 //   console.log("JSON", JSON.stringify(editCourse))
    const [formState, setFormState] = useState<FormState>({
        name: "", description: "", for: "",
        logo: "",
        fulldescription: "", for_what_reasons: [], about_course: [], tag: "",
        course_for: []
    });

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
            const response = await CourseService.EditCourseInfo({data: {...formState, id: id}}, id);
         //   console.log("Курс создан:", response.data);
        } catch (error) {
            console.error("Ошибка при создании курса:", error);
        }
    };
    const handleOpenModal = (type: string) => {
        dispatch(setOpenModal({ type: type }));
    };

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


                    <button className={styles.panel__btn} type="button" onClick={() => handleOpenModal("lesson")}>
                        Добавить урок
                    </button>
                    <button className={`${styles.panel__btn} ${styles.panel__btn__test}`} type="button"
                        onClick={() => handleOpenModal("test")}
                    >
                        Добавить тест
                    </button>
            
                    <button className={styles.panel__btn} type="submit" onClick={handleSubmit}>
                        Сохранить изменения
                    </button>
                </form>
            </div>
        </section>
    );
};

export default TutorEditCourse;
 