import styles from "./BanModal.module.scss"
interface Props {
    handleClose: ()=> void
}

const BanModal = ({handleClose}: Props) => {
    return (

        <div className={styles.modal}>
            <div className={styles.modal__content}>
                <h1 className={styles.modal__title}>
                    Забанить пользователя
                </h1>
                <form className={styles.modal__fields}>
                    <div className={styles.modal__field}>

                        <div className={styles.modal__input__wrapper}>
                            <p className={styles.modal__field__title}>
                                Опишите что не так с заголовками курса
                            </p>
                            <textarea placeholder="Добавьте описание блокировки"
                                className={styles.textarea}
                            ></textarea>
                        </div>
                    </div>
                    <div className={styles.modal__field}>
                        <div className={styles.modal__input__wrapper}>
                            <p className={styles.modal__field__title}>
                                Укажите дату разблокировки пользователя
                            </p>
                            <input
                                className={styles.date}
                                alt="date"
                                type="date"
                            />


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
/* import { useState } from "react"
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





@import "../../../theme/theme";

.modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99999;


    &__title {
        font-weight: 700;
        font-size: 36px;
        color: #3a3a3a;
        font-family: "Nunito", sans-serif;

    }

    &__content {
        background-color: $white;
        z-index: 9999999;
        max-width: 1030px;
        width: 100%;
        height: auto;
        position: relative;
        border-radius: 20px;
        padding: 20px;

    }

    &__overlay {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: $black ;
        opacity: 0.4;

    }

    &__fields {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
    }

    &__field {
        display: flex;
        flex-direction: column;
        width: 100%;
        row-gap: 10px;

        &__title {
            font-weight: 700;
            font-size: 24px;
            color: #3a3a3a;
            font-family: "Nunito", sans-serif;

        }
    }

    &__input,
    &__textarea {
        border: none;
        outline: none;
        cursor: pointer;
        border-bottom: 2px solid $light-gray;
        padding: 5px;
        font-weight: 700;
        font-size: 24px;
        color: #3a3a3a;
        font-family: "Nunito", sans-serif;
        width: 100%;
    }


    &__btn {

        cursor: pointer;
        border-radius: 10px;
        border: none;
        outline: none;
        padding: 5px;
        background-color: $sliderGreen;
        color: $white;
        font-size: 20px;

        font-family: "Nunito", sans-serif;
        width: 100%;

        margin-top: 20px;

        &__disabled {
            background-color: transparent;
            color: #000;
        }

    }
}

.textarea {
    border: none;
    resize: none;
    outline: none;
 //   background-color: red;
    cursor: pointer;
   // border-bottom: 2px solid $light-gray;
    padding: 5px;
    font-weight: 700;
    font-size: 24px;
    color: #3a3a3a;
    font-family: "Nunito", sans-serif;
    width: 100%;
    border: 2px dashed $light-gray;
    margin-top: 10px;
} */