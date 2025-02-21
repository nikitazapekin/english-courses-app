import { useState, ChangeEvent, useEffect } from "react";
import { Placeholder } from "react-bootstrap";
import styles from "./TutorCreateCourse.module.scss";
import { dataPreview } from "./Consts";
import { useDispatch } from "react-redux";
import { setForm, setOpenModal } from "../../../store/slices/CreateCourseSlice/CreateCourseSlice";

interface FormState {
    name: string,
    describtion: string,
    for: string,
    logo: string
}

const TutorCreateCourseComponent: React.FC = () => {
    const [formState, setFormState] = useState<FormState>({ name: "", describtion: "", for: "", logo: "" });
    const dispatch = useDispatch()
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, files } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: type === "file" && files ? files[0] : value
        }));
    };
    useEffect(() => {
        dispatch(setForm(formState))
    }, [formState])

    const handleOpenModal = (type: string) => {
        dispatch(setOpenModal({ type: type }))
    }

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); 
    };
    
    return (
        <section className={styles.panel}>
            <div className={styles.panel__container}>
                <div className={styles.panel__header}>
                    <h1 className={styles.panel__header__title}>
                        Создайте свой курс
                    </h1>

                </div>
                <form className={styles.panel__fields}>
                    {dataPreview.map(item => (
                        <div key={item.title} className={styles.panel__field}>
                            <label className={styles.panel__field__title}>
                                {item.title}
                            </label>
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
                                    <p className={styles.panel__field__placeholder}>
                                        {item.placeholder}
                                    </p>
                                    <input
                                        className={styles.panel__field__imageInput}
                                        type="file"
                                        accept="image/*"
                                        name={item.name}
                                        onChange={handleChange}
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
                    <button className={styles.panel__btn} type="submit"
                        onClick={ handleSubmit}
                    >
                        Сохранить курс
                    </button>
                </form>
            </div>
        </section>
    );
};

export default TutorCreateCourseComponent;


/*
import { Placeholder } from "react-bootstrap";
import styles from "./TutorCreateCourse.module.scss"

import { dataPreview } from "./Consts";
const TutorCreateCourseComponent = () => {
    return (
        <section className={styles.panel}>
            <div className={styles.panel__container}>

                <div className={styles.panel__header}>
                    <h1 className={styles.panel__header__title}>
                        Создайте свой курс
                    </h1>
                </div>
                <form className={styles.panel__fields}>
                    {dataPreview.map(item => (
                        <div className={styles.panel__field}>
                            <label
                                className={styles.panel__field__title}
                            >
                                {item.title}
                            </label>
                            {item.type == "input" && (
                                <input
                                    className={styles.panel__field__input}
                                    placeholder={item.placeholder}
                                />
                            )}
                            {
                                item.type == "image" && (
                                    <div className={styles.panel__field__wrapper}>
                                        <p className={styles.panel__field__placeholder}>
                                            {item.placeholder}
                                        </p>
                                        <input
                                            className={styles.panel__field__imageInput}
                                            placeholder={item.placeholder}
                                            type="file"
                                            accept="image/*"
                                       
                                        />
                                    </div>
                                )
                            }
                        </div>
                    ))}

                    <button className={styles.panel__btn}>
                        Добавить урок
                    </button>
                    <button className={`${styles.panel__btn} ${styles.panel__btn__test}`}>
                        Добавить тест
                    </button>


                    <button className={styles.panel__btn}>
                       Сохранить курс
                    </button>
                </form>
            </div>
        </section>);
}

export default TutorCreateCourseComponent; */