import styles from "./TutorModalTests.module.scss";
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

/* import styles from "./TutorModalTests.module.scss"
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import React from "react";
import { setLessons, setOpenModal } from "../../../../store/slices/CreateCourseSlice/CreateCourseSlice";
import { modalTest } from "./Consts";

interface FormData {
    title: string;
    answers: String[],
    answer: string,
    url: string,
    
}

const TutorModalTests = () => {
    const [formData, setFormData] = useState<FormData>({
        title: "",
      answer: "", 
      answers: [], 
      url: ""
    });
    const dispatch = useDispatch()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (files) {
            setFormData((prev) => ({
                ...prev,
                [name]: [...(prev[name as keyof FormData] as File[]), ...Array.from(files)],
            }));
        }
    };

    const handleRemoveFile = (name: "video" | "materials", index: number) => {
        setFormData((prev) => ({
            ...prev,
            [name]: (prev[name] as File[]).filter((_, i) => i !== index),
        }));
    };

    const handleSubmit = () => {
    
        handleClose()

    }

    const handleClose = () => {
        dispatch(setOpenModal({ type: "" }))
    }



    return (
        <div className={styles.modal__content}>

            <h3 className={styles.modal__title}>Добавить тест</h3>
            <form className={styles.modal__fields}>



            
                
                 {tutorLesson.map((item) => (
                     <div className={styles.modal__field} key={item.id}>
                         <label className={styles.modal__field__title}>
                             {item.title}
                         </label>
                         {item.type === "video" && (
                             <>
                                 <input
                                     className={`${styles.modal__input} ${styles.modal__file}`}
                                     placeholder={item.placeholder}
                                     name={item.name}
                                     type="file"
                                     accept="video/*"
                                     multiple
                                     onChange={handleFileChange}
                                 />
                                 <div className={styles.fileList}>
                                     {(formData.video as File[]).map((file, index) => (
                                         <div key={index} className={styles.fileItem}>
                                             {file.name}
                                             <button
                                                 type="button"
                                                 className={styles.removeBtn}
                                                 onClick={() => handleRemoveFile("video", index)}
                                             >
                                                 ❌
                                             </button>
                                         </div>
                                     ))}
                                 </div>
                             </>
                         )}
                         {item.type === "file" && (
                             <>
                                 <input
                                     className={`${styles.modal__input} ${styles.modal__file}`}
                                     placeholder={item.placeholder}
                                     name={item.name}
                                     type="file"
                                     accept=".txt, .docx, .csv, .pptx"
                                     multiple
                                     onChange={handleFileChange}
                                 />
                                 <div className={styles.fileList}>
                                     {(formData.materials as File[]).map((file, index) => (
                                         <div key={index} className={styles.fileItem}>
                                             {file.name}
                                             <button
                                                 type="button"
                                                 className={styles.removeBtn}
                                                 onClick={() => handleRemoveFile("materials", index)}
                                             >
                                                 ❌
                                             </button>
                                         </div>
                                     ))}
                                 </div>
                             </>
                         )}
                         {item.type === "input" && (
                             <input
                                 className={styles.modal__input}
                                 placeholder={item.placeholder}
                                 name={item.name}
                                 value={formData[item.name as keyof FormData] as string}
                                 onChange={handleChange}
                             />
                         )}
                     </div>
                 ))}

                 
            </form>

            <button className={styles.modal__btn}
                onClick={handleSubmit}
            >Добавить тест</button>

        </div>
    );
}

export default TutorModalTests; */