import { useState, ChangeEvent, useEffect } from "react";
import styles from "./TutorCreateCourse.module.scss";
import { dataPreview } from "./Consts";
import { useDispatch } from "react-redux";
import { setForm, setOpenModal } from "../../../store/slices/CreateCourseSlice/CreateCourseSlice";
import CourseService from "../../../services/Course";

interface FormState {
    name: string;
    describtion: string;
    for: string;
    logo: string;
}

const TutorCreateCourseComponent: React.FC = () => {
    const [formState, setFormState] = useState<FormState>({ name: "", describtion: "", for: "", logo: "" });
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
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.result) {
                    const fileUrl = reader.result as string;
                    setFormState(prevState => ({
                        ...prevState,
                        logo: fileUrl 
                    }));
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setFormState(prevState => ({
            ...prevState,
            logo: ""
        }));
    };

    useEffect(()=> {
        console.log("FORM", formState)
    }, [formState]);

    useEffect(() => {
        dispatch(setForm(formState));
    }, [formState]);

    const handleOpenModal = (type: string) => {
        dispatch(setOpenModal({ type: type }));
    };

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
            const response = await CourseService.CreateCourse(formState);
            console.log("Курс создан:", response.data);
        } catch (error) {
            console.error("Ошибка при создании курса:", error);
        }
    };

    return (
        <section className={styles.panel}>
            <div className={styles.panel__container}>
                <div className={styles.panel__header}>
                    <h1 className={styles.panel__header__title}>Создайте свой курс</h1>
                </div>
                <form className={styles.panel__fields}>
                    {dataPreview.map(item => (
                        <div key={item.title} className={styles.panel__field}>
                            <label className={styles.panel__field__title}>{item.title}</label>
                            {item.type === "input" && (
                                <input
                                    className={styles.panel__field__input}
                                    placeholder={item.placeholder}
                                    name={item.name}
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
                        Сохранить курс
                    </button>
                </form>
            </div>
        </section>
    );
};

export default TutorCreateCourseComponent;



/* import { useState, ChangeEvent, useEffect } from "react";
import styles from "./TutorCreateCourse.module.scss";
import { dataPreview } from "./Consts";
import { useDispatch } from "react-redux";
import { setForm, setOpenModal } from "../../../store/slices/CreateCourseSlice/CreateCourseSlice";
import CourseService from "../../../services/Course";

interface FormState {
    name: string;
    describtion: string;
    for: string;
    logo: string;
}

const TutorCreateCourseComponent: React.FC = () => {
    const [formState, setFormState] = useState<FormState>({ name: "", describtion: "", for: "", logo: "" });
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
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.result) {
                    const fileUrl = reader.result as string;
                    setFormState(prevState => ({
                        ...prevState,
                        logo: fileUrl 
                    }));
                }
            };
            reader.readAsDataURL(file);
        }
    };

    useEffect(()=> {
console.log("FORM", formState)
    }, [formState])

    useEffect(() => {
        dispatch(setForm(formState));
    }, [formState]);

    const handleOpenModal = (type: string) => {
        dispatch(setOpenModal({ type: type }));
    };

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
            const response = await CourseService.CreateCourse(formState);
            console.log("Курс создан:", response.data);
        } catch (error) {
            console.error("Ошибка при создании курса:", error);
        }
    };

    return (
        <section className={styles.panel}>
            <div className={styles.panel__container}>
                <div className={styles.panel__header}>
                    <h1 className={styles.panel__header__title}>Создайте свой курс</h1>
                </div>
                <form className={styles.panel__fields}>
                    {dataPreview.map(item => (
                        <div key={item.title} className={styles.panel__field}>
                            <label className={styles.panel__field__title}>{item.title}</label>
                            {item.type === "input" && (
                                <input
                                    className={styles.panel__field__input}
                                    placeholder={item.placeholder}
                                    name={item.name}
                                    onChange={handleChange}
                                />
                            )}
                            {item.type === "image" && (
                                <div className={styles.panel__field__wrapper}>
                                    <p className={styles.panel__field__placeholder}>{item.placeholder}</p>
                                    <input
                                        className={styles.panel__field__imageInput}
                                        type="file"
                                        accept="image/*"
                                        name={item.name}
                                        onChange={handleFileChange} 
                                    />
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
                        Сохранить курс
                    </button>
                </form>
            </div>
        </section>
    );
};

export default TutorCreateCourseComponent;
  */