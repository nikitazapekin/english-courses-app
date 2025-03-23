import { useDispatch } from "react-redux";
import styles from "./CourseModal.module.scss"
import { setOpenCourseModal } from "../../../store/slices/CourseModal/CourseModal";
import { useLocation } from "react-router-dom";
import PersonalService from "../../../services/Personal";
import { useState } from "react";
const CourseModal = () => {
    const [isUnauthorized, setIsUnauthorized] = useState(false)
    const location = useLocation();
    const lastPathSegment = location.pathname.split("/").pop();
    const dispatch = useDispatch()


    const handleClose =() => {
        dispatch(setOpenCourseModal())

    }
    const handleSubmit = async () => {
        try {
            const resp = await PersonalService.SubscribeToCourse(lastPathSegment!)
            console.log(resp)
            handleClose()
        }
        catch {
            setIsUnauthorized(true)
            console.log("err")
        }
    }
    const handleCancel = () => {
        dispatch(setOpenCourseModal())
    }
    return (
    <> {!isUnauthorized ? (

        <div className={styles.modal}>
        <div className={styles.modal__content}>
            <h2 className={styles.modal__title}>
                Вы действительно желаете  записаться на курс?
            </h2>

            <div className={styles.modal__btns}>
                <div className={`${styles.modal__btn} ${styles.modal__agree}`}
                    onClick={handleSubmit}
                >
                    Записаться
                </div>
                <div className={`${styles.modal__btn} ${styles.modal__cancel}`}
                    onClick={handleCancel}
                >
                    Отмена
                </div>
            </div>
        </div>
        <div
            onClick={handleCancel}
            className={styles.modal__overlay}
        />
    </div>
     ) : (
        <div className={styles.modal}>
        <div className={styles.modal__content}>
            <h2 className={styles.modal__title}>
            Невозможно записаться на курс. Вы не авторизованы
            </h2>

            <div className={styles.modal__btns}>
                <div className={`${styles.modal__btn} ${styles.modal__agree}`}
                    onClick={handleClose}
                >
                   Ок
                </div> 

                {/*
                <div className={`${styles.modal__btn} ${styles.modal__cancel}`}
                onClick={handleCancel}
                >
                Отмена
                </div>
                */}
            </div>
        </div>
        <div
            onClick={handleCancel}
            className={styles.modal__overlay}
        />
    </div>
     )}
    </>
    );
}

export default CourseModal;