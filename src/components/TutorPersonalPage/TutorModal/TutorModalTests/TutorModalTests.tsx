 

import styles from "./TutorModalTests.module.scss";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setTests, setOpenModal } from "../../../../store/slices/CreateCourseSlice/CreateCourseSlice";
import { setTest } from "../../../../store/slices/TestSlice/TestSlice";

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
        let count = 0
        setFormData((prev) => {
            const newQuestions = [...prev.questions];
           if(count<1) {

               newQuestions[qIndex].answers.push("");
            
            count++
            }
            return { ...prev, questions: newQuestions };
        });
    };

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
    
    const handleSubmit = () => {
        dispatch(setTest(formData));
        handleClose();
    };

    const handleClose = () => {
        dispatch(setOpenModal({ type: "" }));
    };

    useEffect(()=> {
console.log(formData)
    }, [formData])
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


 
                            <>
                
                            </>
              




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











/*  


 



import styles from "./TutorModalTests.module.scss";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setTests, setOpenModal } from "../../../../store/slices/CreateCourseSlice/CreateCourseSlice";
import { setTest } from "../../../../store/slices/TestSlice/TestSlice";
import { modalTest } from "./Consts";

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

    const handleQuestionChange = (index: number, field: keyof Question, value: string) => {
        setFormData((prev) => {
            const newQuestions = [...prev.questions];
            newQuestions[index] = { ...newQuestions[index], [field]: value };
            return { ...prev, questions: newQuestions };
        });
    };

    const handleAddAnswer = (qIndex: number) => {
        console.log("Добавляем ответ");
        let count=0;
        setFormData((prev) => {
            const newQuestions = [...prev.questions];
            if(count<1) {

                newQuestions[qIndex].answers.push("");
             count++   
            }
            return { ...prev, questions: newQuestions };
        });
    };

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
            newQuestions[qIndex] = { ...newQuestions[qIndex], answer: value };
            return { ...prev, questions: newQuestions };
        });
    };
    
    const handleSubmit = () => {
        dispatch(setTest(formData));
        handleClose();
    };

    const handleClose = () => {
        dispatch(setOpenModal({ type: "" }));
    };

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
                       //     onChange={(e) => handleAnswerChange(qIndex, aIndex, e.target.value)}
                    //   onChange={(e) => 
                    //   handleAnswerChange(qIndex, aIndex, e.target.value)}

                //    onChange={(e) => handleCorrectAnswerChange( e.target.value)}
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
                                name= "answer"
                                onChange={(e) => handleCorrectAnswerChange(qIndex, e.target.value)}
                               // onChange={(e) => handleAnswerChange(qIndex, aIndex, e.target.value)}
                            />
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

   */