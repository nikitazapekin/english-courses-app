import { useDispatch } from "react-redux";
import { fields } from "./Consts";
import styles from "./Modal.module.scss"
import { setOpenModalAchievements } from "../../../../store/slices/AddAchievementSlice/AddAchievementSlice";
const Modal = () => {
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(setOpenModalAchievements())
    }
    const handleAdd = () => {

    }
    return (
        <div className={styles.modal}>
            <div className={styles.modal__content}>
                <h1 className={styles.modal__title}>
                    Добавить достижение
                </h1>
                <form className={styles.modal__fields}>
                    <div className={styles.modal__field}>
                        {fields.map(item => (
                            <div className={styles.modal__input__wrapper}>
                                <p className={styles.modal__field__title}>
                                    {item.title}
                                </p>
                                <input
                                    className={styles.modal__input}
                                    placeholder={item.placeholder}
                                />
                            </div>
                        ))}
                    </div>

                    <button
                    className={styles.modal__btn}
                    onClick={handleAdd}
                    type="button"
                    >
                        Добавить
                    </button>
                </form>
            </div>
            <div className={styles.modal__overlay}
                onClick={handleClose}
            />
        </div>
    );
}
export default Modal;