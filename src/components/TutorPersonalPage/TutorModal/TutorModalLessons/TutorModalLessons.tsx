import React, { useState } from "react";
import styles from "./TutorModalLessons.module.scss";
import LessonService from "../../../../services/Lesson";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setOpenModal } from "../../../../store/slices/CreateCourseSlice/CreateCourseSlice";

interface LessonFormData {
    title: string;
    description: string;
    durability: string;
    video: File[];
    materials: File[];
}

const tutorLesson = [
    { id: 1, placeholder: "Введите название урока", title: "Название", type: "input", name: "title" },
    { id: 2, placeholder: "Введите описание урока", title: "Описание", type: "input", name: "description" },
    { id: 3, placeholder: "Введите продолжительность", title: "Продолжительность", type: "input", name: "durability" },
    { id: 4, placeholder: "Добавьте видео урока", title: "Видео", type: "video", name: "video" },
    { id: 5, placeholder: "Добавьте материалы урока", title: "Материалы", type: "file", name: "materials" },
];

const TutorModalLessons: React.FC = () => {
    const location = useLocation();
    const lastPathSegment = location.pathname.split("/").pop();

    const [formData, setFormData] = useState<LessonFormData>({
        title: "",
        description: "",
        durability: "",
        video: [],
        materials: [],
    });

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
                [name]: [...(prev[name as keyof LessonFormData] as File[]), ...Array.from(files)],
            }));
        }
    };

    const handleRemoveFile = (name: "video" | "materials", index: number) => {
        setFormData((prev) => ({
            ...prev,
            [name]: (prev[name] as File[]).filter((_, i) => i !== index),
        }));
    };
const dispatch = useDispatch()
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append("title", formData.title);
        formDataToSend.append("description", formData.description);
        formDataToSend.append("durability", formData.durability);
        formDataToSend.append("id", lastPathSegment!);

        formData.video.forEach((file) => {
            formDataToSend.append("video", file);
        });

        formData.materials.forEach((file) => {
            formDataToSend.append("materials", file);
        });

        try {
            await LessonService.CreateLesson(formDataToSend);

             
                    dispatch(setOpenModal({ type: ""  }));
              
        } catch (error) {
            console.error("Ошибка при отправке данных:", error);
        }
    };

    return (
        <div className={styles.modal__content}>
            <h2 className={styles.modal__title}>Добавить урок</h2>
            <form className={styles.modal__fields} onSubmit={handleSubmit}>
                {tutorLesson.map((item) => (
                    <div className={styles.modal__field} key={item.id}>
                        <label className={styles.modal__field__title}>{item.title}</label>

                        {item.type === "input" && (
                            <input
                                className={styles.modal__input}
                                placeholder={item.placeholder}
                                name={item.name}
                                value={formData[item.name as keyof LessonFormData] as string}
                                onChange={handleChange}
                            />
                        )}

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
                                    {formData.video.map((file, index) => (
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
                                    {formData.materials.map((file, index) => (
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
                    </div>
                ))}
                <button type="submit" className={styles.modal__btn}>
                    Сохранить
                </button>
            </form>
        </div>
    );
};

export default TutorModalLessons;
 