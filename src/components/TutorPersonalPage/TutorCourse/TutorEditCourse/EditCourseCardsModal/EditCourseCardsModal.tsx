import React, { useEffect, useState } from "react";
import styles from "./EditCourseCardsModal.module.scss";
import LessonService from "../../../../../services/Lesson";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { editModalSelector } from "../../../../../store/selectors/EditLessonModal.selector";
import { useDispatch } from "react-redux";
import { setClose } from "../../../../../store/slices/EditModalLesson/EditModalLesson";
import { deleteLesson, editLesson } from "../../../../../store/slices/Lessons/Lessons";
interface LessonFormData {
    title: string;
    description: string;
    durability: string;
 

    video: string[];   
    materials: string[];


}

interface ServerData {
    video: string;
    materials: string;
}

interface LessonResp {
    id: number;
    title: string;
    description: string;
    durability: string;
    video: string;
    materials: { filename: string; data: string };
}

const tutorLesson = [
    { id: 1, placeholder: "Введите название урока", title: "Название", type: "input", name: "title" },
    { id: 2, placeholder: "Введите описание урока", title: "Описание", type: "input", name: "description" },
    { id: 3, placeholder: "Введите продолжительность", title: "Продолжительность", type: "input", name: "durability" },
    { id: 4, placeholder: "Добавьте видео урока", title: "Видео", type: "video", name: "video" },
    { id: 5, placeholder: "Добавьте материалы урока", title: "Материалы", type: "file", name: "materials" },
];

const EditModalLessons: React.FC = () => {
    const location = useLocation();
    const lastPathSegment = location.pathname.split("/").pop();

 
    const [formData, setFormData] = useState<LessonFormData>({
        title: "",
        description: "",
        durability: "",
        video: [],
        materials: [],
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

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (files) {
            setFormData((prev) => ({
                ...prev,
                [name]: [...(prev[name as keyof LessonFormData] as unknown as File[]), ...Array.from(files)],
            }));
        }
    };

    const handleRemoveFile = (name: "video" | "materials", index: number) => {
        setFormData((prev) => ({
            ...prev,
            [name]: (prev[name] as unknown as File[]).filter((_, i) => i !== index),
        }));
    };

    const handleRemoveServerVideo = () => {
        setServerData((prev) => ({
            ...prev,
            video: "",
        }));
    };



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append("title", formData.title);
        formDataToSend.append("description", formData.description);
        formDataToSend.append("durability", formData.durability);
        formDataToSend.append("id", lastPathSegment!);

        if (!serverData.video) {
            formDataToSend.append("removeVideo", "true");
        }
        if (!serverData.materials) {
            formDataToSend.append("removeMaterials", "true");
        }

        formData.video.forEach((file) => {
            formDataToSend.append("video", file);
        });

        formData.materials.forEach((file) => {
            formDataToSend.append("materials", file);
        });

        try {
            await LessonService.EditLesson(lastPathSegment!, editModal.lessonId, formDataToSend);
            dispatch(setClose())
            dispatch(editLesson({
                data:formData, 
                id: Number(editModal.lessonId)
            }))
        } catch (error) {
            console.error("Ошибка при отправке данных:", error);
        }
    };

    useEffect(() => {
        const handleGet = async () => {
            try {
                const response = await LessonService.GetLesson(lastPathSegment!, editModal.lessonId);
                console.log(response.data);
                const { title, description, durability, video, materials } = response.data.lesson;

                setFormData((prev) => ({
                    ...prev,
                    title,
                    description,
                    durability,
                }));


                setServerData({
                    video: video || "",
                    materials: materials?.filename || "",
                });
            } catch (error) {
                console.error("Ошибка при получении урока:", error);
            }
        };

        handleGet();
    }, [lastPathSegment, editModal.lessonId]);
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(setClose())
    }
    const navigate = useNavigate()
    const handleDelete = async () => {
        try {

            const repsonce = await LessonService.DeleteLesson(editModal.lessonId)
            dispatch(setClose())
            dispatch(deleteLesson({id: Number(editModal.lessonId) }))
            navigate(`/tutor/personal/courses/${lastPathSegment}`)
        } catch (e) {

            console.log(e)
        }



    }
    return (
        <div className={styles.modal}>
            <div className={styles.modal__content}>
                <h2 className={styles.modal__title}>Редактировать урок</h2>
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
                                        {/* Отображаем видео с сервера */}
                                        {serverData.video.length > 100 && (
                                            <div className={styles.fileItem}>
                                                <video
                                                    className={styles.lesson__video}
                                                    controls
                                                    src={`data:video/mp4;base64,${serverData.video}`}
                                                    title="Video lesson"
                                                >
                                                    Ваш браузер не поддерживает видео.
                                                </video>
                                                <button
                                                    type="button"
                                                    className={styles.removeBtn}
                                                    onClick={handleRemoveServerVideo}
                                                >
                                                    ❌
                                                </button>
                                            </div>
                                        )}

{/*
                                        {formData.video.length > 0 && formData.video.map((file, index) => (
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
                                        */}



 




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
{formData.materials.map((fileName, index) => (
    <div key={index} className={styles.fileItem}>
        {fileName}  
        <button
            type="button"
            className={styles.removeBtn}
            onClick={() => handleRemoveFile("materials", index)}
        >
            ❌
        </button>
    </div>
))}
{/*
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
                                            */}
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


                    <button type="button" className={`${styles.modal__btn} ${styles.modal__delete}`}
                        onClick={handleDelete}
                    >
                        Удалить
                    </button>
                </form>
            </div>

            <div className={styles.modal__overlay}
                onClick={handleClose}
            />
        </div>
    );
};

export default EditModalLessons; 