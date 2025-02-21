import styles from "./TutorModalTests.module.scss"
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import React from "react";
import { setLessons, setOpenModal } from "../../../../store/slices/CreateCourseSlice/CreateCourseSlice";
import { tutorLesson } from "../Consts";
 
interface FormData {
    title: string;
    describtion: string;
    video: File[];
    materials: File[];
}

const TutorModalTests = () => {

    

    const [formData, setFormData] = useState<FormData>({
        title: "",
        describtion: "",
        video: [],
        materials: [],
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
        dispatch(setLessons(formData))
        handleClose()

    }

    const handleClose = ()=> {
        dispatch(setOpenModal({type: ""}))
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
             >Добавить урок</button>
     
  </div>
      );
}
 
export default TutorModalTests;