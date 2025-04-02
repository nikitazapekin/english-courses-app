import { useState } from "react"
import styles from "./BanModal.module.scss"
import { useDispatch } from "react-redux"
import { setIsOpenAddWarningModal } from "../../../store/slices/AddWarningModal/AddWarningModal"
const BanModal = () => {
    const [text, setText] = useState("")
    const handleChange = (query: string) => {
        setText(query)
    }
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(setIsOpenAddWarningModal())
    }
    return (
        <div className={styles.modal}>
            <div className={styles.modal__content}>
                <h1 className={styles.modal__title}>
                    Забанить курс
                </h1>
                <form className={styles.modal__fields}>
                    <div className={styles.modal__field}>

                        <div className={styles.modal__input__wrapper}>
                            <p className={styles.modal__field__title}>
                                Укажите причину бана
                            </p>
                            <textarea placeholder="Добавьте описание"
                                className={styles.textarea}
                                onChange={(e) => handleChange(e.target.value)}
                            ></textarea>
                        </div>
                    </div>

                    <button
                        className={styles.modal__btn}

                        type="button"
                    >
                        Забанить
                    </button>
                    <button
                        className={`${styles.modal__btn} ${styles.modal__btn__disabled}`}
                        type="button"
                    >
                        Отмена
                    </button>
                </form>

            </div>
            <div className={styles.modal__overlay}
                onClick={handleClose}
            />
        </div>
    );
}

export default BanModal;





