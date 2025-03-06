import { useDispatch } from "react-redux";
import styles from "./CourseModal.module.scss"
import { setOpenCourseModal } from "../../../store/slices/CourseModal/CourseModal";
import { useLocation } from "react-router-dom";
const CourseModal = () => {
 const location = useLocation();
    const lastPathSegment = location.pathname.split("/").pop();
 


    const dispatch = useDispatch()
    const handleSubmit = () => {
        dispatch(setOpenCourseModal())
    }
    const handleCancel = () => {
        dispatch(setOpenCourseModal())
    }
    return (<div className={styles.modal}>
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
    </div>);
}

export default CourseModal;