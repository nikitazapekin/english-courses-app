import { useState, ChangeEvent, useEffect } from "react";
import { tutorLesson } from "./Consts";
import styles from "./TutorModal.module.scss";
import { useDispatch } from "react-redux";
import { setLessons, setOpenModal } from "../../../store/slices/CreateCourseSlice/CreateCourseSlice";
import TutorModalLessons from "./TutorModalLessons/TutorModalLessons";
import { useSelector } from "react-redux";
import { isOpenModalCreateLessonSelector } from "../../../store/selectors/CreateCourseSelector";
import TutorModalTests from "./TutorModalTests/TutorModalTests";


const TutorModal = () => {
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(setOpenModal({ type: "" }))
    }

    const { type } = useSelector(isOpenModalCreateLessonSelector)
    return (
        <div className={styles.modal}>
            {type == "lesson" ? (

                <TutorModalLessons />
            ) : (
                <TutorModalTests />
            )}
            <div className={styles.modal__overlay}
                onClick={handleClose}
            />
        </div>
    );
};

export default TutorModal;

