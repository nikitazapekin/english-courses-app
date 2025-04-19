import { useState } from "react"
import styles from "./WarningModal.module.scss"
import { useDispatch } from "react-redux"
import { setIsOpenAddWarningModal, setSelectBanCourse } from "../../../store/slices/AddWarningModal/AddWarningModal"
import WarningsService from "../../../services/Warnings"
import { useSelector } from "react-redux"
import { AddWarningSelectorPage } from "../../../store/selectors/AddWarningModal.selector"
const WarningModal = () => {

    const [text, setText] = useState("")

    const selector = useSelector(AddWarningSelectorPage)
    const handleChange = (query: string) => {
        setText(query)
    }
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(setIsOpenAddWarningModal())
    }

    const handleAdd = async () => {
        try {
            const response = await WarningsService.AddWarning(selector.selectedCourse, text)
            dispatch(setIsOpenAddWarningModal())

        } catch (e) {
            console.log(e)
        }
    }

    

    return (
        <div className={styles.modal}>
            <div className={styles.modal__content}>
                <h1 className={styles.modal__title}>
                    Добавить замечание
                </h1>
                <form className={styles.modal__fields}>
                    <div className={styles.modal__field}>

                        <div className={styles.modal__input__wrapper}>
                            <p className={styles.modal__field__title}>
                                Опишите что не так с заголовками курса
                            </p>
                            <textarea placeholder="Добавьте описание"
                                className={styles.textarea}
                                onChange={(e) => handleChange(e.target.value)}
                            ></textarea>
                        </div>
                    </div>

                    <button
                        className={styles.modal__btn}
                        onClick={handleAdd}
                        type="button"
                    >
                        Добавить
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

export default WarningModal;





