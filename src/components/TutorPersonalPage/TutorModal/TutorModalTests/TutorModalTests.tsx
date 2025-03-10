import styles from "./TutorModalTests.module.scss";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setTests, setOpenModal } from "../../../../store/slices/CreateCourseSlice/CreateCourseSlice";
import { setTest } from "../../../../store/slices/TestSlice/TestSlice";
import TestService from "../../../../services/Test";
import { useLocation } from "react-router-dom";

interface Question {
    title: string;
    answers: string[];
    answer: string;
    url: string;
}

interface FormData {
    title_test: string;
    description: string;
    topics: string[];
    questions: Question[];
}

const TutorModalTests = () => {
    const [formData, setFormData] = useState<FormData>({
        title_test: "",
        description: "",
        topics: [],
        questions: [],
    });

    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddQuestion = () => {
        setFormData((prev) => ({
            ...prev,
            questions: [...prev.questions, { title: "", answers: [""], answer: "", url: "" }],
        }));
    };
    
    const handleQuestionChange = (qIndex: number, value: string) => {

            setFormData((prev) => {
                const newQuestions = [...prev.questions];
            newQuestions[qIndex].title = value;
            return { ...prev, questions: newQuestions };
        });
    };
    

    const handleAddAnswer = (qIndex: number) => {
        setFormData((prev) => {
            const newQuestions = [...prev.questions];
            
           
            if (newQuestions[qIndex].answers.length === 0 || newQuestions[qIndex].answers[newQuestions[qIndex].answers.length - 1] !== "") {
                newQuestions[qIndex].answers.push("");
            }
    
            return { ...prev, questions: newQuestions };
        });
    };
    
  /*   const handleAddAnswer = (qIndex: number) => {
        let count=0;
        if(count<1) {
        setFormData((prev) => {
            const newQuestions = [...prev.questions];
            newQuestions[qIndex].answers.push("");
            return { ...prev, questions: newQuestions };
        });
        count++
    }
    };
 */
    const handleAnswerChange = (qIndex: number, aIndex: number, value: string) => {
        setFormData((prev) => {
            const newQuestions = [...prev.questions];
            newQuestions[qIndex].answers[aIndex] = value;
            return { ...prev, questions: newQuestions };
        });
    };

    const handleCorrectAnswerChange = (qIndex: number, value: string) => {
        setFormData(prev => {
            const newQuestions = [...prev.questions];
            newQuestions[qIndex].answer = value;
            return { ...prev, questions: newQuestions };
        });
    };

    const handleFileChange = (qIndex: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => {
                    const newQuestions = [...prev.questions];
                    newQuestions[qIndex].url = reader.result as string;
                    return { ...prev, questions: newQuestions };
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const location = useLocation();
    const lastPathSegment = location.pathname.split("/").pop();

    const handleSubmit = async () => {

        try {
            await TestService.CreateTest({ data: { ...formData, course_id: lastPathSegment } });


        } catch {

        }
        //  dispatch(setTest(formData));csa
        handleClose();
    };

    const handleClose = () => {
        dispatch(setOpenModal({ type: "" }));
    };

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    return (
        <div className={styles.modal__content}>
            <h3 className={styles.modal__title}>Добавить тест</h3>
            <form className={styles.modal__fields}>
                <input
                    className={styles.modal__input}
                    placeholder="Название теста"
                    name="title_test"
                    value={formData.title_test}
                    onChange={handleChange}
                />
                <input
                    className={styles.modal__input}
                    placeholder="Описание"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />

                {formData.questions.map((question, qIndex) => (
                    <div key={qIndex} className={styles.questionContainer}>
                        <input
                            className={styles.modal__input}
                            placeholder="Введите вопрос"
                            value={question.title}
                            onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
                        />

                        {question.answers.map((answer, aIndex) => (
                            <input
                                key={aIndex}
                                className={styles.modal__input}
                                placeholder="Вариант ответа"
                                value={answer}
                                onChange={(e) => handleAnswerChange(qIndex, aIndex, e.target.value)}
                            />
                        ))}
                        <button type="button" className={styles.addAnswerBtn} onClick={() => handleAddAnswer(qIndex)}>
                            ➕ Добавить ответ
                        </button>

                        <input
                            className={styles.modal__input}
                            placeholder="Правильный ответ"
                            value={question.answer}
                            onChange={(e) => handleCorrectAnswerChange(qIndex, e.target.value)}
                        />

                        <input
                            className={`${styles.modal__input} ${styles.modal__file}`}
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileChange(qIndex, e)}
                        />

                        {question.url && (
                            <div className={styles.imagePreview}>
                                <img src={question.url} alt="Загруженное изображение" className={styles.previewImage} />
                                <button
                                    type="button"
                                    className={styles.removeBtn}
                                    onClick={() => handleQuestionChange(qIndex, "")}
                                >
                                    ❌ Удалить
                                </button>
                            </div>
                        )}
                    </div>
                ))}
                <button type="button" className={styles.addQuestionBtn} onClick={handleAddQuestion}>
                    ➕ Добавить вопрос
                </button>
            </form>
            <button className={styles.modal__btn} onClick={handleSubmit}>Добавить тест</button>
        </div>
    );
};

export default TutorModalTests;


