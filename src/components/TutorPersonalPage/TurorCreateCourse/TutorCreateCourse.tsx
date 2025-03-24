import { useState, ChangeEvent, useEffect } from "react";
import styles from "./TutorCreateCourse.module.scss";
import { dataPreview } from "./Consts";
import { useDispatch, useSelector } from "react-redux";
import { setForm, setOpenModal } from "../../../store/slices/CreateCourseSlice/CreateCourseSlice";
import CourseService from "../../../services/Course";
import TutorPamel from "../TutorPanel/TutorPanel";
import { setCourse } from "../../../store/slices/OpenCourseDetails/OpenCourseDetails";
import { TutorSelector } from "../../../store/selectors/Tutor.selector";
import { useLocation } from "react-router-dom";
import ErrorModal from "./ErrorModal/ErrorModal";

interface FormState {
    name: string;
    description: string;
    for: string;
    logo: string;
    course_for: string[];
    fulldescription: string;
    for_what_reasons: string[];
    about_course: string[];
    tag: string;
}

const TutorCreateCourseComponent: React.FC = () => {
    const [formState, setFormState] = useState<FormState>({
        name: "", description: "", for: "", logo: "",
        fulldescription: "", for_what_reasons: [], about_course: [], tag: "",
        course_for: []
    });

    const [selectInputs, setSelectInputs] = useState<{ [key: string]: string }>({});
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleError = () => setIsError(prev => !prev);
    const dispatch = useDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        
        // Обновляем основные поля формы напрямую в formState
        if (['name', 'description', 'for', 'fulldescription'].includes(name)) {
            setFormState(prev => ({ ...prev, [name]: value }));
        } 
        // Для тега обновляем и formState и selectInputs
        else if (name === 'tag') {
            setFormState(prev => ({ ...prev, tag: value }));
            setSelectInputs(prev => ({ ...prev, [name]: value }));
        }
        // Для остальных полей обновляем только selectInputs
        else {
            setSelectInputs(prev => ({ ...prev, [name]: value }));
        }
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
        const value = selectInputs[name];
        if (!value) return;

        setFormState(prevState => ({
            ...prevState,
            [name]: [...(prevState[name] as string[] || []), value]
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

    const validateForm = (): boolean => {
        if (!formState.name.trim()) {
            setIsError(true);
            setErrorMessage("Пожалуйста, введите название курса");
            return false;
        }
        if (!formState.description.trim()) {
            setIsError(true);
            setErrorMessage("Пожалуйста, введите описание курса");
            return false;
        }
     
        if (!formState.logo) {
            setIsError(true);
            setErrorMessage("Пожалуйста, загрузите логотип курса");
            return false;
        }
        if (formState.course_for.length === 0) {
            setIsError(true);
            setErrorMessage("Пожалуйста, добавьте хотя бы одну целевую аудиторию");
            return false;
        }
        if (!formState.fulldescription.trim()) {
            setIsError(true);
            setErrorMessage("Пожалуйста, введите полное описание курса");
            return false;
        }
        if (formState.for_what_reasons.length === 0) {
            setIsError(true);
            setErrorMessage("Пожалуйста, добавьте хотя бы одну причину для прохождения курса");
            return false;
        }
        if (formState.about_course.length === 0) {
            setIsError(true);
            setErrorMessage("Пожалуйста, добавьте хотя бы один пункт о курсе");
            return false;
        }
        if (!formState.tag) {
            setIsError(true);
            setErrorMessage("Пожалуйста, выберите тег для курса");
            return false;
        }
        return true;
    };

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const response = await CourseService.CreateCourse(formState);
            console.log("Курс создан:", response.data);
        } catch (error) {
            console.error("Ошибка при создании курса:", error);
            setIsError(true);
            setErrorMessage("Произошла ошибка при создании курса");
        }
    };

    const location = useLocation();
    const lastPathSegment = location.pathname.split("/").pop();

    useEffect(() => {
        const handleGetUser = async () => {
            try {
                const response = await CourseService.GetCourseInfo(lastPathSegment!);
                dispatch(setCourse(response.data.courses));
            } catch (err) {
                console.error("Ошибка при получении информации о курсе:", err);
            }
        };
        handleGetUser();
    }, []);

    const tutor = useSelector(TutorSelector);

    return (
        <section className={styles.panel}>
            <div className={styles.panel__container}>
                <TutorPamel username={tutor.user.username} email={tutor.user.email} />
                <div className={styles.panel__content}>
                    <div className={styles.panel__header}>
                        <h1 className={styles.panel__header__title}>Создайте свой курс</h1>
                    </div>
                    <form className={styles.panel__fields}>
                        {dataPreview.map(item => item.options && (
                            <datalist key={`datalist-${item.id}`} id={item.list}>
                                {item.options.map((option, index) => (
                                    <option key={index} value={option} />
                                ))}
                            </datalist>
                        ))}
                        {dataPreview.map(item => (
                            <div key={item.id} className={styles.panel__field}>
                                <label className={styles.panel__field__title}>{item.title}</label>

                                {item.type === "input" && !['course_for', 'for_what_reasons', 'about_course'].includes(item.name) && (
                                    <input
                                        className={styles.panel__field__input}
                                        placeholder={item.placeholder}
                                        name={item.name}
                                        value={formState[item.name as keyof FormState] || ""}
                                        onChange={handleChange}
                                        autoComplete={item.autocomplete || "off"}
                                        list={item.list || undefined}
                                    />
                                )}

                                {item.type === "input" && ['course_for', 'for_what_reasons', 'about_course'].includes(item.name) && (
                                    <div className={styles.inputWithAutocomplete}>
                                        <input
                                            className={styles.panel__field__input}
                                            placeholder={item.placeholder}
                                            name={item.name}
                                            value={selectInputs[item.name] || ""}
                                            onChange={handleChange}
                                            autoComplete={item.autocomplete || "off"}
                                            list={item.list || undefined}
                                        />
                                        <button
                                            className={styles.addButton}
                                            type="button"
                                            onClick={() => handleAddItem(item.name as keyof FormState)}
                                        >
                                            Добавить
                                        </button>
                                    </div>
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
                                        {item.name === "tag" ? (
                                            <select
                                                className={styles.panel__field__input}
                                                name="tag"
                                                value={formState.tag}
                                                onChange={handleChange}
                                            >
                                                <option value="">{item.placeholder}</option>
                                                {item.options?.map(option => (
                                                    <option key={option} value={option}>{option}</option>
                                                ))}
                                            </select>
                                        ) : (
                                            <input
                                                className={styles.panel__field__input}
                                                placeholder={`Добавить ${item.placeholder.toLowerCase()}`}
                                                name={item.name}
                                                value={selectInputs[item.name] || ""}
                                                onChange={handleChange}
                                            />
                                        )}
                                        {item.name !== "tag" && (
                                            <button
                                                className={styles.addButton}
                                                type="button"
                                                onClick={() => handleAddItem(item.name as keyof FormState)}
                                            >
                                                Добавить
                                            </button>
                                        )}
                                    </div>
                                )}

                                {(item.type === "input" || item.type === "select") && 
                                ['course_for', 'for_what_reasons', 'about_course'].includes(item.name) && (
                                    <ul className={styles.selectList}>
                                        {(formState[item.name as keyof FormState] as string[] || []).map((value, index) => (
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
                                )}
                            </div>
                        ))}

                        <button className={styles.panel__btn} type="submit" onClick={handleSubmit}>
                            Сохранить курс
                        </button>
                    </form>
                </div>
            </div>
            {isError && (
                <ErrorModal
                    message={errorMessage}
                    handler={handleError}
                />
            )}
        </section>
    );
};

export default TutorCreateCourseComponent;

/* import { useState, ChangeEvent, useEffect } from "react";
import styles from "./TutorCreateCourse.module.scss";
import { dataPreview } from "./Consts";
import { useDispatch, useSelector } from "react-redux";
import { setForm, setOpenModal } from "../../../store/slices/CreateCourseSlice/CreateCourseSlice";
import CourseService from "../../../services/Course";
import TutorPamel from "../TutorPanel/TutorPanel";
import { setCourse } from "../../../store/slices/OpenCourseDetails/OpenCourseDetails";
import { TutorSelector } from "../../../store/selectors/Tutor.selector";
import { useLocation } from "react-router-dom";
import ErrorModal from "./ErrorModal/ErrorModal";

interface FormState {
    name: string;
    description: string;
    for: string;
    logo: string;
    course_for: string[];
    fulldescription: string;
    for_what_reasons: string[];
    about_course: string[];
    tag: string;
}

const TutorCreateCourseComponent: React.FC = () => {
    const [formState, setFormState] = useState<FormState>({
        name: "", description: "", for: "", logo: "",
        fulldescription: "", for_what_reasons: [], about_course: [], tag: "",
        course_for: []
    });

    const [selectInputs, setSelectInputs] = useState<{ [key: string]: string }>({});
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const handleError = () => {
        setIsError(prev => !prev)
    }
    const dispatch = useDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSelectInputs(prev => ({ ...prev, [name]: value }));
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
        const value = selectInputs[name];
        if (!value) return;

        setFormState(prevState => ({
            ...prevState,
            [name]: [...(prevState[name] as string[] || []), value]
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
 

    const validateForm = (): boolean => {
        if (!formState.name.trim()) {
            setIsError(true);
            setErrorMessage("Пожалуйста, введите название курса");
            return false;
        }
        if (!formState.description.trim()) {
            setIsError(true);
            setErrorMessage("Пожалуйста, введите описание курса");
            return false;
        }
        if (!formState.for.trim()) {
            setIsError(true);
            setErrorMessage("Пожалуйста, укажите, для кого предназначен курс");
            return false;
        }
        if (!formState.logo) {
            setIsError(true);
            setErrorMessage("Пожалуйста, загрузите логотип курса");
            return false;
        }
        if (formState.course_for.length === 0) {
            setIsError(true);
            setErrorMessage("Пожалуйста, добавьте хотя бы одну целевую аудиторию");
            return false;
        }
        if (!formState.fulldescription.trim()) {
            setIsError(true);
            setErrorMessage("Пожалуйста, введите полное описание курса");
            return false;
        }
        if (formState.for_what_reasons.length === 0) {
            setIsError(true);
            setErrorMessage("Пожалуйста, добавьте хотя бы одну причину для прохождения курса");
            return false;
        }
        if (formState.about_course.length === 0) {
            setIsError(true);
            setErrorMessage("Пожалуйста, добавьте хотя бы один пункт о курсе");
            return false;
        }
        if (!formState.tag) {
            setIsError(true);
            setErrorMessage("Пожалуйста, выберите тег для курса");
            return false;
        }
        return true;
    };
    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const response = await CourseService.CreateCourse(formState);
            console.log("Курс создан:", response.data);
        
        } catch (error) {
            console.error("Ошибка при создании курса:", error);
            alert("Произошла ошибка при создании курса");
        }
    };

    const location = useLocation();
    const lastPathSegment = location.pathname.split("/").pop();

    useEffect(() => {
        const handleGetUser = async () => {
            try {
                const response = await CourseService.GetCourseInfo(lastPathSegment!)
                dispatch(setCourse(response.data.courses))
            } catch (err) {
                //   navigate("/sign-in")
            }
        };
        handleGetUser();
    }, [])

    const tutor = useSelector(TutorSelector)

    return (
        <section className={styles.panel}>
            <div className={styles.panel__container}>
                <TutorPamel username={tutor.user.username} email={tutor.user.email} />
                <div className={styles.panel__content}>
                    <div className={styles.panel__header}>
                        <h1 className={styles.panel__header__title}>Создайте свой курс</h1>
                    </div>
                    <form className={styles.panel__fields}>
                        {dataPreview.map(item => item.options && (
                            <datalist key={`datalist-${item.id}`} id={item.list}>
                                {item.options.map((option, index) => (
                                    <option key={index} value={option} />
                                ))}
                            </datalist>
                        ))}
                        {dataPreview.map(item => (
                            <div key={item.id} className={styles.panel__field}>
                                <label className={styles.panel__field__title}>{item.title}</label>

                                {item.type === "input" && (
                                    <div className={styles.inputWithAutocomplete}>
                                        <input
                                            className={styles.panel__field__input}
                                            placeholder={item.placeholder}
                                            name={item.name}
                                            value={selectInputs[item.name] || ""}
                                            onChange={handleChange}
                                            autoComplete={item.autocomplete || "off"}
                                            list={item.list || undefined}
                                        />
                                        {item.name === "course_for" && (
                                            <button
                                                className={styles.addButton}
                                                type="button"
                                                onClick={() => handleAddItem(item.name as keyof FormState)}
                                            >
                                                Добавить
                                            </button>
                                        )}
                                    </div>
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
                                        {item.name === "tag" ? (
                                            <select
                                                className={styles.panel__field__input}
                                                value={selectInputs[item.name] || ""}
                                                onChange={(e) => setSelectInputs(prev => ({ ...prev, [item.name]: e.target.value }))}
                                            >
                                                <option value="">{item.placeholder}</option>
                                                {item.options?.map(option => (
                                                    <option key={option} value={option}>{option}</option>
                                                ))}
                                            </select>
                                        ) : (
                                            <input
                                                className={styles.panel__field__input}
                                                placeholder={`Добавить ${item.placeholder.toLowerCase()}`}
                                                value={selectInputs[item.name] || ""}
                                                onChange={(e) => setSelectInputs(prev => ({ ...prev, [item.name]: e.target.value }))}
                                            />
                                        )}
                                        <button
                                            className={styles.addButton}
                                            type="button"
                                            onClick={() => handleAddItem(item.name as keyof FormState)}
                                        >
                                            Добавить
                                        </button>
                                    </div>
                                )}

                                {(item.type === "input" || item.type === "select") && item.name !== "name" && item.name !== "description" && (
                                    <ul className={styles.selectList}>
                                        {(formState[item.name as keyof FormState] as string[] || []).map((value, index) => (
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
                                )}
                            </div>
                        ))}

                        <button className={styles.panel__btn} type="submit" onClick={handleSubmit}>
                            Сохранить курс
                        </button>
                    </form>
                </div>
            </div>
            {isError && (

                <ErrorModal
                    message={errorMessage}
                    handler={handleError}
                />
            )}
        </section>
    );
};

export default TutorCreateCourseComponent; */