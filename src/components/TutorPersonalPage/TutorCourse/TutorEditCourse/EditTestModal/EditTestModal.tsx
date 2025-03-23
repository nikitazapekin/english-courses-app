import React, { useEffect, useState } from "react";
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

interface ServerData {
    video: string;
    materials: string;
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
    /* title: string;
    answers: string[];
    answer: string;
    url: string; */


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


                        {/*
                                <input
                                placeholder="Введите вопрос теста"
                                    className={styles.questions__input}
                                />

                                <input
                                    placeholder="Добавь изображение вопроса"
                                    type="image"
                                    className={styles.questions__input}
                                />
                                </div>
                                ))}
                                */}
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

export default EditTestModal;

/* import React, { useEffect, useState } from "react";
import styles from "./EditTestModal.module.scss"
import LessonService from "../../../../../services/Lesson";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { editModalSelector } from "../../../../../store/selectors/EditLessonModal.selector";
import TestService from "../../../../../services/Test";

interface TestFormData {
    title: String,
    duration: String,
    description: String,
    topics: String[],
}

interface ServerData {
    video: string;
    materials: string;
}

const tutorLesson = [


    { id: 1, placeholder: "Введите название теста", title: "Название", type: "input", name: "name" },
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

    });

    const [serverData, setServerData] = useState<ServerData>({
        video: "",
        materials: "",
    });

    const editModal = useSelector(editModalSelector);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };





    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
      
        try {

            //    await LessonService.EditLesson(lastPathSegment!, editModal.lessonId, formDataToSend);
        } catch (error) {
            console.error("Ошибка при отправке данных:", error);
        }
    };

    useEffect(() => {
        const handleGet = async () => {
            try {

                const response = await TestService.GetQuestions(editModal.testId)
                console.log("questions", response.data)



            } catch (error) {
                console.error("Ошибка при получении урока:", error);
            }
        };

        handleGet();
    }, [lastPathSegment, editModal.lessonId]);


const [topics, setTopics] = useState([])
    const handleAddTopic = ()=> {
//setTopics ...
    }
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

                            {item.type === "file" && (
                                <>
                                    <input
                                        className={`${styles.modal__input} ${styles.modal__file}`}
                                        placeholder={item.placeholder}
                                        name={item.name}
                                        type="file"
                                        accept="image"
                                        multiple

                                    />
                                    <div className={styles.fileList}>

                                        {serverData.materials && (
                                            <div className={styles.fileItem}>
                                                {serverData.materials}
                                                <button
                                                    type="button"
                                                    className={styles.removeBtn}
                                                    onClick={() => setServerData((prev) => ({ ...prev, materials: "" }))}
                                                >
                                                    ❌
                                                </button>
                                            </div>
                                        )}

                                    </div>
                                </>
                            )}







                            {item.type === "select" && (
                                <>
                                    <div className={styles.modal__select}>
                                        <div className={styles.input__wrapper}>

                                            <input
                                                className={`${styles.modal__input}  `}
                                                placeholder={item.placeholder}
                                                name={item.name}

                                                accept="image"
                                              

                                            />
                                            <div className={styles.add}
                                            onClick={handleAddTopic}
                                            >
                                                Добавить
                                            </div>
                                        </div>
                                        <div className={styles.list}>



                                        </div>
                                    </div>
                                </>
                            )}
                        </div>


                    ))}
                    <button type="button" className={styles.modal__btn}
                        onClick={handleSubmit}
                    >
                        Сохранить
                    </button>
                </form>
            </div>

            <div className={styles.modal__overlay} />
        </div>
    );
};

export default EditTestModal;  */