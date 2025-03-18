import { useDispatch } from "react-redux";
import { fields } from "./Consts";
import styles from "./Modal.module.scss"
import { setOpenModalAchievements } from "../../../../store/slices/AddAchievementSlice/AddAchievementSlice";
const Modal = () => {
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(setOpenModalAchievements())
    }
    return (
        <div className={styles.modal}>
            <div className={styles.modal__content}>
                <h1 className={styles.modal__title}>
                    Добавить достижение
                </h1>
                <form className={styles.modal__form}>
                    <div className={styles.modal__field}>
                        {fields.map(item => (
                            <div className={styles.modal__input__wrapper}>
                                <input
                                    className={styles.modal__field}
                                    placeholder={item.placeholder}
                                />
                            </div>
                        ))}
                    </div>
                </form>
            </div>
            <div className={styles.modal__overlay}
                onClick={handleClose}
            />
        </div>
    );
}
export default Modal;