import { useState, ChangeEvent, useEffect } from "react";
import { tutorLesson } from "./Consts";
import styles from "./TutorModal.module.scss";
import { useDispatch } from "react-redux";
import { setLessons, setOpenModal } from "../../../store/slices/CreateCourseSlice/CreateCourseSlice";
import TutorModalLessons from "./TutorModalLessons/TutorModalLessons";


const TutorModal = () => {
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(setOpenModal())
    }
    return (
        <div className={styles.modal}>
            <TutorModalLessons />
            <div className={styles.modal__overlay}
                onClick={handleClose}
            />
        </div>
    );
};

export default TutorModal;

