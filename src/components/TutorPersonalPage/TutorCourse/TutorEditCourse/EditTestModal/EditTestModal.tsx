import React, { useEffect, useState } from "react";
import styles from "./EditTestModal.module.scss";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { editModalSelector } from "../../../../../store/selectors/EditLessonModal.selector";
import TestService from "../../../../../services/Test";

interface TestFormData {
    title: string;
    duration: string;
    description: string;
    topics: string[];
    questions: Question[];
}

interface Question {
    id?: number;
    question: string;
    answers: string[];
    correct_answer: string;
    question_image: string | null;
}
 
const tutorLesson = [
    { id: 1, placeholder: "Введите название теста", title: "Название", type: "input", name: "title" },
    { id: 2, placeholder: "Продолжительность теста", title: "Продолжительность", type: "input", name: "duration" },
    { id: 3, placeholder: "Описание теста", title: "Описание", type: "input", name: "description" },
    { id: 4, placeholder: "Темы теста", title: "Темы", type: "select", name: "topics" },
];

const EditTestModal: React.FC = () => {
    const location = useLocation();
    const lastPathSegment = location.pathname.split("/").pop();
    const [formData, setFormData] = useState<TestFormData>({
        title: "",
        duration: "",
        description: "",
        topics: [],
        questions: [],
    });

    const [newTopic, setNewTopic] = useState<string>("");
    const [newAnswer, setNewAnswer] = useState<string>("");  
    const editModal = useSelector(editModalSelector);

    useEffect(() => {
        const handleGetTest = async () => {
            try {
                const response = await TestService.GetTestById(editModal.testId);
                const testData = response.data.test;
                setFormData({
                    title: testData.name,
                    duration: testData.duration,
                    description: testData.description,
                    topics: testData.topics,
                    questions: testData.questions.map((q) => ({
                        ...q,
                        question_image: q.question_image || null,
                    })),
                });
            } catch (error) {
                console.error("Ошибка при получении теста:", error);
            }
        };

        handleGetTest();
    }, [editModal.testId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddTopic = () => {
        if (newTopic.trim() !== "") {
            setFormData((prev) => ({
                ...prev,
                topics: [...prev.topics, newTopic.trim()],
            }));
            setNewTopic("");
        }
    };

    const handleRemoveTopic = (index: number) => {
        setFormData((prev) => ({
            ...prev,
            topics: prev.topics.filter((_, i) => i !== index),
        }));
    };

    const handleQuestionChange = (questionIndex: number, field: keyof Question, value: string) => {
        setFormData((prev) => {
            const updatedQuestions = [...prev.questions];
            updatedQuestions[questionIndex] = {
                ...updatedQuestions[questionIndex],
                [field]: value,
            };
            return { ...prev, questions: updatedQuestions };
        });
    };

    const handleAnswerChange = (questionIndex: number, answerIndex: number, value: string) => {
        setFormData((prev) => {
            const updatedQuestions = [...prev.questions];
            const updatedAnswers = [...updatedQuestions[questionIndex].answers];
            updatedAnswers[answerIndex] = value;
            updatedQuestions[questionIndex] = {
                ...updatedQuestions[questionIndex],
                answers: updatedAnswers,
            };
            return { ...prev, questions: updatedQuestions };
        });
    };

    const handleRemoveAnswer = (questionIndex: number, answerIndex: number) => {
        setFormData((prev) => {
            const updatedQuestions = [...prev.questions];
            const updatedAnswers = updatedQuestions[questionIndex].answers.filter((_, i) => i !== answerIndex);
            updatedQuestions[questionIndex] = {
                ...updatedQuestions[questionIndex],
                answers: updatedAnswers,
            };
            return { ...prev, questions: updatedQuestions };
        });
    };

    const handleAddAnswer = (questionIndex: number) => {
        if (newAnswer.trim() !== "") {
            setFormData((prev) => {
                const updatedQuestions = [...prev.questions];
                updatedQuestions[questionIndex] = {
                    ...updatedQuestions[questionIndex],
                    answers: [...updatedQuestions[questionIndex].answers, newAnswer.trim()],
                };
                return { ...prev, questions: updatedQuestions };
            });
            setNewAnswer("");  
        }
    };

    const handleRemoveQuestion = (questionIndex: number) => {
        setFormData((prev) => ({
            ...prev,
            questions: prev.questions.filter((_, i) => i !== questionIndex),
        }));
    };

    const handleImageChange = (questionIndex: number, file: File | null) => {
        setFormData((prev) => {
            const updatedQuestions = [...prev.questions];
            updatedQuestions[questionIndex] = {
                ...updatedQuestions[questionIndex],
                question_image: file ? URL.createObjectURL(file) : null,
            };
            return { ...prev, questions: updatedQuestions };
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            console.log("Form Data:", formData);

            const response = await TestService.EditTestById({id: editModal.testId, formData: formData})
            console.log(response)
          
        } catch (error) {
            console.error("Ошибка при отправке данных:", error);
        }
    };

    return (
        <div className={styles.modal}>
            <div className={styles.modal__content}>
                <h2 className={styles.modal__title}>Редактировать тест</h2>
                <form className={styles.modal__fields} onSubmit={handleSubmit}>
                    {tutorLesson.map((item) => (
                        <div className={styles.modal__field} key={item.id}>
                            <label className={styles.modal__field__title}>{item.title}</label>
                            {item.type === "input" && (
                                <input
                                    className={styles.modal__input}
                                    placeholder={item.placeholder}
                                    name={item.name}
                                    value={formData[item.name as keyof TestFormData] as string}
                                    onChange={handleChange}
                                />
                            )}

                            {item.type === "select" && (
                                <>
                                    <div className={styles.modal__select}>
                                        <div className={styles.input__wrapper}>
                                            <input
                                                className={`${styles.modal__input}`}
                                                placeholder={item.placeholder}
                                                value={newTopic}
                                                onChange={(e) => setNewTopic(e.target.value)}
                                            />
                                            <div className={styles.add} onClick={handleAddTopic}>
                                                Добавить
                                            </div>
                                        </div>
                                        <div className={styles.list}>
                                            {formData.topics.map((topic, index) => (
                                                <div key={index} className={styles.topicItem}>
                                                    {topic}
                                                    <button
                                                        type="button"
                                                        className={styles.removeBtn}
                                                        onClick={() => handleRemoveTopic(index)}
                                                    >
                                                        ❌
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                    <h2 className={styles.modal__title}>Вопросы</h2>
                    <div className={styles.questions__list}>
                        {formData.questions.map((question, questionIndex) => (
                            <div className={styles.questions__question} key={questionIndex}>
                                <div className={styles.modal__field}>
                                    <label className={styles.modal__field__title}>Вопрос теста</label>
                                    <input
                                        className={styles.modal__input}
                                        placeholder="Введите вопрос теста"
                                        value={question.question}
                                        onChange={(e) =>
                                            handleQuestionChange(questionIndex, "question", e.target.value)
                                        }
                                    />

                                    <label className={styles.modal__field__title}>Правильный ответ</label>
                                    <input
                                        className={styles.modal__input}
                                        placeholder="Введите правильный ответ"
                                        value={question.correct_answer}
                                        onChange={(e) =>
                                            handleQuestionChange(questionIndex, "correct_answer", e.target.value)
                                        }
                                    />

                                    <label className={styles.modal__field__title}>Варианты ответа</label>
                                    {question.answers.map((answer, answerIndex) => (
                                        <div key={answerIndex} className={styles.answerItem}>
                                            <input
                                                className={styles.modal__input}
                                                placeholder="Введите вариант ответа"
                                                value={answer}
                                                onChange={(e) =>
                                                    handleAnswerChange(questionIndex, answerIndex, e.target.value)
                                                }
                                            />
                                            <button
                                                type="button"
                                                className={styles.removeBtn}
                                                onClick={() => handleRemoveAnswer(questionIndex, answerIndex)}
                                            >
                                                ❌
                                            </button>
                                        </div>
                                    ))}
 
                                    <div className={styles.addAnswerWrapper}>
                                        <input
                                            className={styles.modal__input}
                                            placeholder="Введите новый вариант ответа"
                                            value={newAnswer}
                                            onChange={(e) => setNewAnswer(e.target.value)}
                                        />
                                        <button
                                            type="button"
                                            className={styles.addBtn}
                                            onClick={() => handleAddAnswer(questionIndex)}
                                        >
                                            Добавить вариант
                                        </button>
                                    </div>

                                    <label className={styles.modal__field__title}>Изображение</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) =>
                                            handleImageChange(
                                                questionIndex,
                                                e.target.files ? e.target.files[0] : null
                                            )
                                        }
                                    />
                                    {question.question_image && (
                                        <div className={styles.imagePreview}>
                                            <img src={question.question_image} alt="Question" />
                                            <button
                                                type="button"
                                                className={styles.removeBtn}
                                                onClick={() => handleImageChange(questionIndex, null)}
                                            >
                                                Удалить изображение
                                            </button>
                                        </div>
                                    )}
                                </div>
                                <button
                                    type="button"
                                    className={styles.removeBtn}
                                    onClick={() => handleRemoveQuestion(questionIndex)}
                                >
                                    Удалить вопрос
                                </button>
                            </div>
                        ))}
                    </div>
                    <button type="submit" className={styles.modal__btn}>
                        Сохранить
                    </button>
                </form>
            </div>
            <div className={styles.modal__overlay} />
        </div>
    );
};

export default EditTestModal;
/* import React, { useEffect, useState } from "react";
import styles from "./EditTestModal.module.scss";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { editModalSelector } from "../../../../../store/selectors/EditLessonModal.selector";
import TestService from "../../../../../services/Test";

interface TestFormData {
    title: string;
    duration: string;
    description: string;
    topics: string[];
    questions: Question[];
}

interface Question {
    id?: number;
    question: string;
    answers: string[];
    correct_answer: string;
    question_image: string | null;
}

interface Response {
    id: number;
    name: string;
    test_number: number;
    duration: string;
    description: string;
    topics: string[];
    course_id: number;
    questions: Question[];
}

const tutorLesson = [
    { id: 1, placeholder: "Введите название теста", title: "Название", type: "input", name: "title" },
    { id: 2, placeholder: "Продолжительность теста", title: "Продолжительность", type: "input", name: "duration" },
    { id: 3, placeholder: "Описание теста", title: "Описание", type: "input", name: "description" },
    { id: 4, placeholder: "Темы теста", title: "Темы", type: "select", name: "topics" },
];

const EditTestModal: React.FC = () => {
    const location = useLocation();
    const lastPathSegment = location.pathname.split("/").pop();
    const [formData, setFormData] = useState<TestFormData>({
        title: "",
        duration: "",
        description: "",
        topics: [],
        questions: [],
    });

    const [newTopic, setNewTopic] = useState<string>("");
    const editModal = useSelector(editModalSelector);

    useEffect(() => {
        const handleGetTest = async () => {
            try {
                const response = await TestService.GetTestById(editModal.testId);
                const testData = response.data.test;
                setFormData({
                    title: testData.name,
                    duration: testData.duration,
                    description: testData.description,
                    topics: testData.topics,
                    questions: testData.questions.map((q) => ({
                        ...q,
                        question_image: q.question_image || null,
                    })),
                });
            } catch (error) {
                console.error("Ошибка при получении теста:", error);
            }
        };

        handleGetTest();
    }, [editModal.testId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddTopic = () => {
        if (newTopic.trim() !== "") {
            setFormData((prev) => ({
                ...prev,
                topics: [...prev.topics, newTopic.trim()],
            }));
            setNewTopic("");
        }
    };

    const handleRemoveTopic = (index: number) => {
        setFormData((prev) => ({
            ...prev,
            topics: prev.topics.filter((_, i) => i !== index),
        }));
    };

    const handleQuestionChange = (index: number, field: keyof Question, value: string) => {
        setFormData((prev) => {
            const updatedQuestions = [...prev.questions];
            updatedQuestions[index] = {
                ...updatedQuestions[index],
                [field]: value,
            };
            return { ...prev, questions: updatedQuestions };
        });
    };

    const handleAnswerChange = (questionIndex: number, answerIndex: number, value: string) => {
        setFormData((prev) => {
            const updatedQuestions = [...prev.questions];
            const updatedAnswers = [...updatedQuestions[questionIndex].answers];
            updatedAnswers[answerIndex] = value;
            updatedQuestions[questionIndex] = {
                ...updatedQuestions[questionIndex],
                answers: updatedAnswers,
            };
            return { ...prev, questions: updatedQuestions };
        });
    };

    const handleRemoveAnswer = (questionIndex: number, answerIndex: number) => {
        setFormData((prev) => {
            const updatedQuestions = [...prev.questions];
            const updatedAnswers = updatedQuestions[questionIndex].answers.filter((_, i) => i !== answerIndex);
            updatedQuestions[questionIndex] = {
                ...updatedQuestions[questionIndex],
                answers: updatedAnswers,
            };
            return { ...prev, questions: updatedQuestions };
        });
    };

    const handleRemoveQuestion = (questionIndex: number) => {
        setFormData((prev) => ({
            ...prev,
            questions: prev.questions.filter((_, i) => i !== questionIndex),
        }));
    };

    const handleImageChange = (questionIndex: number, file: File | null) => {
        setFormData((prev) => {
            const updatedQuestions = [...prev.questions];
            updatedQuestions[questionIndex] = {
                ...updatedQuestions[questionIndex],
                question_image: file ? URL.createObjectURL(file) : null,
            };
            return { ...prev, questions: updatedQuestions };
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            console.log("Form Data:", formData);
            // Логика отправки данных на сервер
        } catch (error) {
            console.error("Ошибка при отправке данных:", error);
        }
    };

    return (
        <div className={styles.modal}>
            <div className={styles.modal__content}>
                <h2 className={styles.modal__title}>Редактировать тест</h2>
                <form className={styles.modal__fields} onSubmit={handleSubmit}>
                    {tutorLesson.map((item) => (
                        <div className={styles.modal__field} key={item.id}>
                            <label className={styles.modal__field__title}>{item.title}</label>
                            {item.type === "input" && (
                                <input
                                    className={styles.modal__input}
                                    placeholder={item.placeholder}
                                    name={item.name}
                                    value={formData[item.name as keyof TestFormData] as string}
                                    onChange={handleChange}
                                />
                            )}

                            {item.type === "select" && (
                                <>
                                    <div className={styles.modal__select}>
                                        <div className={styles.input__wrapper}>
                                            <input
                                                className={`${styles.modal__input}`}
                                                placeholder={item.placeholder}
                                                value={newTopic}
                                                onChange={(e) => setNewTopic(e.target.value)}
                                            />
                                            <div className={styles.add} onClick={handleAddTopic}>
                                                Добавить
                                            </div>
                                        </div>
                                        <div className={styles.list}>
                                            {formData.topics.map((topic, index) => (
                                                <div key={index} className={styles.topicItem}>
                                                    {topic}
                                                    <button
                                                        type="button"
                                                        className={styles.removeBtn}
                                                        onClick={() => handleRemoveTopic(index)}
                                                    >
                                                        ❌
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                    <h2 className={styles.modal__title}>Вопросы</h2>
                    <div className={styles.questions__list}>
                        {formData.questions.map((question, questionIndex) => (
                            <div className={styles.questions__question} key={questionIndex}>
                                <div className={styles.modal__field}>
                                    <label className={styles.modal__field__title}>Вопрос теста</label>
                                    <input
                                        className={styles.modal__input}
                                        placeholder="Введите вопрос теста"
                                        value={question.question}
                                        onChange={(e) =>
                                            handleQuestionChange(questionIndex, "question", e.target.value)
                                        }
                                    />

                                    <label className={styles.modal__field__title}>Правильный ответ</label>
                                    <input
                                        className={styles.modal__input}
                                        placeholder="Введите правильный ответ"
                                        value={question.correct_answer}
                                        onChange={(e) =>
                                            handleQuestionChange(questionIndex, "correct_answer", e.target.value)
                                        }
                                    />

                                    <label className={styles.modal__field__title}>Варианты ответа</label>
                                    {question.answers.map((answer, answerIndex) => (
                                        <div key={answerIndex} className={styles.answerItem}>
                                            <input
                                                className={styles.modal__input}
                                                placeholder="Введите вариант ответа"
                                                value={answer}
                                                onChange={(e) =>
                                                    handleAnswerChange(questionIndex, answerIndex, e.target.value)
                                                }
                                            />
                                            <button
                                                type="button"
                                                className={styles.removeBtn}
                                                onClick={() => handleRemoveAnswer(questionIndex, answerIndex)}
                                            >
                                                ❌
                                            </button>
                                        </div>
                                    ))}

                                    <label className={styles.modal__field__title}>Изображение</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) =>
                                            handleImageChange(
                                                questionIndex,
                                                e.target.files ? e.target.files[0] : null
                                            )
                                        }
                                    />
                                    {question.question_image && (
                                        <div className={styles.imagePreview}>
                                            <img src={question.question_image} alt="Question" />
                                            <button
                                                type="button"
                                                className={styles.removeBtn}
                                                onClick={() => handleImageChange(questionIndex, null)}
                                            >
                                                Удалить изображение
                                            </button>
                                        </div>
                                    )}
                                </div>
                                <button
                                    type="button"
                                    className={styles.removeBtn}
                                    onClick={() => handleRemoveQuestion(questionIndex)}
                                >
                                    Удалить вопрос
                                </button>
                            </div>
                        ))}
                    </div>
                    <button type="submit" className={styles.modal__btn}>
                        Сохранить
                    </button>
                </form>
            </div>
            <div className={styles.modal__overlay} />
        </div>
    );
};

export default EditTestModal; */
/* import React, { useEffect, useState } from "react";
import styles from "./EditTestModal.module.scss";
import LessonService from "../../../../../services/Lesson";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { editModalSelector } from "../../../../../store/selectors/EditLessonModal.selector";
import TestService from "../../../../../services/Test";

interface TestFormData {
    title: string;
    duration: string;
    description: string;
    topics: string[];
}
 
interface Questions {

    id: number,
    test_id: number,
    question: string,
    answers: String[],
    correct_answer: string,
    question_image: string,

}
interface Question {
    question: string;
    answers: string[];
    correct_answer: string;
    question_image: string;

}
interface Response {

    id: 2,
    name: string,
    test_number: 1,
    duration: string,
    description: string,
    topics: String[],
    course_id: 6,
    questions: Question[]


}


const tutorLesson = [
    { id: 1, placeholder: "Введите название теста", title: "Название", type: "input", name: "title" },
    { id: 2, placeholder: "Продолжительность теста", title: "Продолжительность", type: "input", name: "duration" },
    { id: 3, placeholder: "Описание теста", title: "Описание", type: "input", name: "description" },
    { id: 4, placeholder: "Темы теста", title: "Темы", type: "select", name: "topics" },
];

const EditTestModal: React.FC = () => {
    const location = useLocation();
    const lastPathSegment = location.pathname.split("/").pop();
    const [test, setTest] = useState<Response>()
    const [formData, setFormData] = useState<TestFormData>({
        title: "",
        duration: "",
        description: "",
        topics: [],
    });


    const [newTopic, setNewTopic] = useState<string>("");
    const [questions, setQuestions] = useState<Questions[]>([])

    const editModal = useSelector(editModalSelector);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddTopic = () => {
        if (newTopic.trim() !== "") {
            setFormData((prev) => ({
                ...prev,
                topics: [...prev.topics, newTopic.trim()],
            }));
            setNewTopic("");
        }
    };

    const handleRemoveTopic = (index: number) => {
        setFormData((prev) => ({
            ...prev,
            topics: prev.topics.filter((_, i) => i !== index),
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {

            console.log("Form Data:", formData);
        } catch (error) {
            console.error("Ошибка при отправке данных:", error);
        }
    };

    useEffect(() => {

        const handleGetTest = async () => {
            try {
                const response = await TestService.GetTestById(editModal.testId)
                console.log("test", editModal.testId, response.data);
                setTest(response.data.test)
            } catch (error) {
                console.error("Ошибка при получении урока:", error);
            }
        };

        handleGetTest();

    }, [lastPathSegment, editModal.testId]);

    return (
        <div className={styles.modal}>
            <div className={styles.modal__content}>
                <h2 className={styles.modal__title}>Редактировать тест</h2>
                <form className={styles.modal__fields} onSubmit={handleSubmit}>
                    {tutorLesson.map((item) => (
                        <div className={styles.modal__field} key={item.id}>
                            <label className={styles.modal__field__title}>{item.title}</label>
                            {item.type === "input" && (
                                <input
                                    className={styles.modal__input}
                                    placeholder={item.placeholder}
                                    name={item.name}
                                    value={formData[item.name as keyof TestFormData] as string}
                                    onChange={handleChange}
                                />
                            )}

                            {item.type === "select" && (
                                <>
                                    <div className={styles.modal__select}>
                                        <div className={styles.input__wrapper}>
                                            <input
                                                className={`${styles.modal__input}`}
                                                placeholder={item.placeholder}
                                                value={newTopic}
                                                onChange={(e) => setNewTopic(e.target.value)}
                                            />
                                            <div className={styles.add} onClick={handleAddTopic}>
                                                Добавить
                                            </div>
                                        </div>
                                        <div className={styles.list}>
                                            {formData.topics.map((topic, index) => (
                                                <div key={index} className={styles.topicItem}>
                                                    {topic}
                                                    <button
                                                        type="button"
                                                        className={styles.removeBtn}
                                                        onClick={() => handleRemoveTopic(index)}
                                                    >
                                                        ❌
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                    <h2 className={styles.modal__title}>Вопросы</h2>
                    <div className={styles.questions__list}>
                        {test?.questions.map((item, index) => (
                            <div className={styles.questions__question} key={index}>

                                <div className={styles.modal__field}  >
                                    <label className={styles.modal__field__title}>Вопрос теста</label>

                                    <input
                                        className={styles.modal__input}
                                        placeholder={"Введите вопрос теста"}
                                        defaultValue={item.question}

                                    />

                                    <label className={styles.modal__field__title}>Ответ на вопрос теста</label>

                                    <input
                                        className={styles.modal__input}
                                        placeholder={"Введите ответ на вопросы"}
                                        defaultValue={item.correct_answer}

                                    />



<label className={styles.modal__field__title}>Варианты ответа на вопрос</label>

<input
    className={styles.modal__input}
    placeholder={"Введите ответ на вопросы"}
/>
{item.answers.map((item, index)=> (
    <div key={index}>
        {item}
    </div>
))}



<label className={styles.modal__field__title}>Изображение на вопрос теста</label>

<input
    className={styles.modal__input}
    placeholder={"Введите ответ на вопросы"}
    
    type="image"

/>
<img 
 
src={item.question_image}
/>

                                </div>
                            </div>
                        ))}

 
                    </div>


                    <button type="button" className={styles.modal__btn} onClick={handleSubmit}>
                        Сохранить
                    </button>
                </form>
            </div>
            <div className={styles.modal__overlay} />
        </div>
    );
};

export default EditTestModal;  */