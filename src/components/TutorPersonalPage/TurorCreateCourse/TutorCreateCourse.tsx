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

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
            const response = await CourseService.CreateCourse(formState);
            console.log("Курс создан:", response.data);
        } catch (error) {
            console.error("Ошибка при создании курса:", error);
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


                <TutorPamel   username={tutor.user.username}
                    email={tutor.user.email}
                />


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

                            {/* Отображение добавленных элементов */}
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
        </section>
    );
};

export default TutorCreateCourseComponent;

/* import { useState, ChangeEvent, useEffect, useRef } from "react";
import styles from "./TutorCreateCourse.module.scss";
import { dataPreview } from "./Consts";
import { useDispatch } from "react-redux";
import { setForm, setOpenModal } from "../../../store/slices/CreateCourseSlice/CreateCourseSlice";
import CourseService from "../../../services/Course";

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
    const [suggestions, setSuggestions] = useState<{ [key: string]: string[] }>({});
    const [activeSuggestions, setActiveSuggestions] = useState<{ [key: string]: boolean }>({});
    const autocompleteRef = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch();
    
    // Закрытие autocomplete при клике вне его
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (autocompleteRef.current && !autocompleteRef.current.contains(event.target as Node)) {
                setActiveSuggestions(prev => ({ ...prev, course_for: false }));
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSelectInputs(prev => ({ ...prev, [name]: value }));
        
        // Для autocomplete поля
        if (name === "course_for") {
            const fieldConfig = dataPreview.find(item => item.name === name);
            if (fieldConfig && fieldConfig.suggestions) {
                const filtered = fieldConfig.suggestions.filter(item =>
                    item.toLowerCase().includes(value.toLowerCase())
                );
                setSuggestions(prev => ({ ...prev, [name]: filtered }));
                setActiveSuggestions(prev => ({ ...prev, [name]: value.length > 0 }));
            }
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

    const handleAddItem = (name: keyof FormState, value?: string) => {
        const itemValue = value || selectInputs[name];
        if (!itemValue) return;
        
        setFormState(prevState => ({
            ...prevState,
            [name]: [...(prevState[name] as string[] || []), itemValue]
        }));
        setSelectInputs(prev => ({ ...prev, [name]: "" }));
        setActiveSuggestions(prev => ({ ...prev, [name]: false }));
    };

    const handleRemoveItem = (name: keyof FormState, index: number) => {
        setFormState(prevState => ({
            ...prevState,
            [name]: (prevState[name] as string[]).filter((_, i) => i !== index)
        }));
    };

    const handleSuggestionClick = (name: string, suggestion: string) => {
        setSelectInputs(prev => ({ ...prev, [name]: suggestion }));
        handleAddItem(name as keyof FormState, suggestion);
    };

    useEffect(() => {
        dispatch(setForm(formState));
    }, [formState]);

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
                        <div key={item.id} className={styles.panel__field}>
                            <label className={styles.panel__field__title}>{item.title}</label>

                            {item.type === "input" && (
                                <input
                                    className={styles.panel__field__input}
                                    placeholder={item.placeholder}
                                    name={item.name}
                                    value={formState[item.name as keyof FormState] as string || ""}
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
                                </div>
                            )}

                            {item.type === "autocomplete" && (
                                <div className={styles.autocompleteContainer} ref={autocompleteRef}>
                                    <input
                                        className={styles.panel__field__input}
                                        placeholder={item.placeholder}
                                        name={item.name}
                                        value={selectInputs[item.name] || ""}
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                    {activeSuggestions[item.name] && suggestions[item.name] && (
                                        <ul className={styles.suggestionsList}>
                                            {suggestions[item.name].map((suggestion, index) => (
                                                <li 
                                                    key={index}
                                                    className={styles.suggestionItem}
                                                    onClick={() => handleSuggestionClick(item.name, suggestion)}
                                                >
                                                    {suggestion}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    <button
                                        className={styles.addButton}
                                        type="button"
                                        onClick={() => handleAddItem(item.name as keyof FormState)}
                                    >
                                        Добавить
                                    </button>

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
                                </div>
                            )}
                        </div>
                    ))}

                    <button className={styles.panel__btn} type="submit" onClick={handleSubmit}>
                        Сохранить курс
                    </button>
                </form>
            </div>
        </section>
    );
};

export default TutorCreateCourseComponent; */
/* import { useState, ChangeEvent, useEffect } from "react";
import styles from "./TutorCreateCourse.module.scss";
import { dataPreview } from "./Consts";
import { useDispatch } from "react-redux";
import { setForm, setOpenModal } from "../../../store/slices/CreateCourseSlice/CreateCourseSlice";
import CourseService from "../../../services/Course";

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
            [name]: [...(prevState[name] as string[] || []), selectInputs[name]]
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
                        <div key={item.id} className={styles.panel__field}>
                            <label className={styles.panel__field__title}>{item.title}</label>

                            {item.type === "input" && (
                                <input
                                    className={styles.panel__field__input}
                                    placeholder={item.placeholder}
                                    name={item.name}
                                    value={formState[item.name as keyof FormState] as string || ""}
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
                                </div>
                            )}
                        </div>
                    ))}

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