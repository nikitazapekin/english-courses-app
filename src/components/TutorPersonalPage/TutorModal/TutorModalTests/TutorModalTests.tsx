import styles from "./TutorModalTests.module.scss"; 
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setLessons, setOpenModal, setTests } from "../../../../store/slices/CreateCourseSlice/CreateCourseSlice";
import { modalTest } from "./Consts";

interface FormData {
    title_test: string;
    description_test: string;
    topics: string[];
    title: string;
    answers: string[];
    answer: string;
    url: File | null;
}

const TutorModalTests = () => {
    const [formData, setFormData] = useState<FormData>({
        title_test: "",
        description_test: "",
        topics: [],
        title: "",
        answer: "",
        answers: [],
        url: null
    });

    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if (files && files.length > 0) {
            setFormData((prev) => ({
                ...prev,
                url: files[0],
            }));
        }
    };

    const handleAddAnswer = () => {
        setFormData((prev) => ({
            ...prev,
            answers: [...prev.answers, ""],
        }));
    };

    const handleAnswerChange = (index: number, value: string) => {
        setFormData((prev) => {
            const newAnswers = [...prev.answers];
            newAnswers[index] = value;
            return { ...prev, answers: newAnswers };
        });
    };

    const handleRemoveAnswer = (index: number) => {
        setFormData((prev) => ({
            ...prev,
            answers: prev.answers.filter((_, i) => i !== index),
        }));
    };

    const handleAddTopic = () => {
        setFormData((prev) => ({
            ...prev,
            topics: [...prev.topics, ""],
        }));
    };

    const handleTopicChange = (index: number, value: string) => {
        setFormData((prev) => {
            const newTopics = [...prev.topics];
            newTopics[index] = value;
            return { ...prev, topics: newTopics };
        });
    };

    const handleRemoveTopic = (index: number) => {
        setFormData((prev) => ({
            ...prev,
            topics: prev.topics.filter((_, i) => i !== index),
        }));
    };

    const handleSubmit = () => {
        //dispatch(setTests(formData));
        handleClose();
    };

    const handleClose = () => {
        dispatch(setOpenModal({ type: "" }));
    };

    return (
        <div className={styles.modal__content}>
            <h3 className={styles.modal__title}>Добавить тест</h3>
            <form className={styles.modal__fields}>
                {modalTest.map((item) => (
                    <div className={styles.modal__field} key={item.id}>
                        <label className={styles.modal__field__title}>{item.title}</label>

                        {item.type === "input" && (
                            <input
                                className={styles.modal__input}
                                placeholder={item.placeholder}
                                name={item.name}
                                value={formData[item.name as keyof FormData] as string}
                                onChange={handleChange}
                            />
                        )}

                        {item.type === "array" && item.name === "answers" && (
                            <div className={styles.answersContainer}>
                                {formData.answers.map((answer, index) => (
                                    <div key={index} className={styles.answerItem}>
                                        <input
                                            className={styles.modal__input}
                                            placeholder="Введите вариант ответа"
                                            value={answer}
                                            onChange={(e) => handleAnswerChange(index, e.target.value)}
                                        />
                                        <button
                                            type="button"
                                            className={styles.removeBtn}
                                            onClick={() => handleRemoveAnswer(index)}
                                        >
                                            ❌
                                        </button>
                                    </div>
                                ))}
                                <button type="button" className={styles.addAnswerBtn} onClick={handleAddAnswer}>
                                    ➕ Добавить ответ
                                </button>
                            </div>
                        )}

                        {item.type === "array" && item.name === "topics" && (
                            <div className={styles.answersContainer}>
                                {formData.topics.map((topic, index) => (
                                    <div key={index} className={styles.answerItem}>
                                        <input
                                            className={styles.modal__input}
                                            placeholder="Введите тему теста"
                                            value={topic}
                                            onChange={(e) => handleTopicChange(index, e.target.value)}
                                        />
                                        <button
                                            type="button"
                                            className={styles.removeBtn}
                                            onClick={() => handleRemoveTopic(index)}
                                        >
                                            ❌
                                        </button>
                                    </div>
                                ))}
                                <button type="button" className={styles.addAnswerBtn} onClick={handleAddTopic}>
                                    ➕ Добавить тему
                                </button>
                            </div>
                        )}

                        {item.type === "image" && (
                            <>
                                <input
                                    className={`${styles.modal__input} ${styles.modal__file}`}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                                {formData.url && (
                                    <div className={styles.imagePreview}>
                                        <span>{formData.url.name}</span>
                                        <button
                                            type="button"
                                            className={styles.removeBtn}
                                            onClick={() => setFormData((prev) => ({ ...prev, url: null }))}
                                        >
                                            ❌
                                        </button>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                ))}
            </form>

            <button className={styles.modal__btn} onClick={handleSubmit}>
                Добавить тест
            </button>
        </div>
    );
};

export default TutorModalTests;




/* import styles from "./TutorModalTests.module.scss";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setLessons, setOpenModal, setTests } from "../../../../store/slices/CreateCourseSlice/CreateCourseSlice";
import { modalTest } from "./Consts";

interface FormData {
    title: string;
    answers: string[];
    answer: string;
    url: File | null;
}

const TutorModalTests = () => {
    const [formData, setFormData] = useState<FormData>({
        title: "",
        answer: "",
        answers: [],
        url: null
    });

    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if (files && files.length > 0) {
            setFormData((prev) => ({
                ...prev,
                url: files[0],
            }));
        }
    };
    const handleAddAnswer = () => {
        setFormData((prev) => ({
            ...prev,
            answers: [...prev.answers, ""],
        }));
    };

    const handleAnswerChange = (index: number, value: string) => {
        setFormData((prev) => {
            const newAnswers = [...prev.answers];
            newAnswers[index] = value;
            return { ...prev, answers: newAnswers };
        });
    };

    const handleRemoveAnswer = (index: number) => {
        setFormData((prev) => ({
            ...prev,
            answers: prev.answers.filter((_, i) => i !== index),
        }));
    };

    const handleSubmit = () => {
     //   dispatch(setTests(formData))
    
        handleClose();
    };

    const handleClose = () => {
        dispatch(setOpenModal({ type: "" }));
    };

    return (
        <div className={styles.modal__content}>
            <h3 className={styles.modal__title}>Добавить тест</h3>
            <form className={styles.modal__fields}>
                {modalTest.map((item) => (
                    <div className={styles.modal__field} key={item.id}>
                        <label className={styles.modal__field__title}>{item.title}</label>

                        {item.type === "input" && (
                            <input
                                className={styles.modal__input}
                                placeholder={item.placeholder}
                                name={item.name}
                                value={formData[item.name as keyof FormData] as string}
                                onChange={handleChange}
                            />
                        )}

                        {item.type === "array" && (
                            <div className={styles.answersContainer}>
                                {formData.answers.map((answer, index) => (
                                    <div key={index} className={styles.answerItem}>
                                        <input
                                            className={styles.modal__input}
                                            placeholder="Введите вариант ответа"
                                            value={answer}
                                            onChange={(e) => handleAnswerChange(index, e.target.value)}
                                        />
                                        <button
                                            type="button"
                                            className={styles.removeBtn}
                                            onClick={() => handleRemoveAnswer(index)}
                                        >
                                            ❌
                                        </button>
                                    </div>
                                ))}
                                <button type="button" className={styles.addAnswerBtn} onClick={handleAddAnswer}>
                                    ➕ Добавить ответ
                                </button>
                            </div>
                        )}

                        {item.type === "image" && (
                            <>
                                <input
                                    className={`${styles.modal__input} ${styles.modal__file}`}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                                {formData.url && (
                                    <div className={styles.imagePreview}>
                                        <span>{formData.url.name}</span>
                                        <button
                                            type="button"
                                            className={styles.removeBtn}
                                            onClick={() => setFormData((prev) => ({ ...prev, url: null }))}
                                        >
                                            ❌
                                        </button>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                ))}
            </form>

            <button className={styles.modal__btn} onClick={handleSubmit}>
                Добавить тест
            </button>
        </div>
    );
};

export default TutorModalTests;
  */