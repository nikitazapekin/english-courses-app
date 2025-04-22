import { useState } from "react"
import BanService from "../../../services/Ban"
import styles from "./BanModal.module.scss"
interface Props {
    handleClose: (id: number) => void
    selectedUser: number,
    handleFilterComments: (authorId: number)=> void
}
const BanModal = ({ handleClose, selectedUser , handleFilterComments}: Props) => {
    const [date, setDate] = useState("")
    const [message, setMessage] = useState("")
    const handleBan = async () => {
      
        try {
            const resp = await BanService.AddBanUser(selectedUser, date, message)
            handleFilterComments(selectedUser)

            handleClose(0)
        } catch (e) {
            console.log(e)
        }
    }
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
                                onChange={(e) => setMessage(e.target.value)}
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
                                onChange={(e) => setDate(e.target.value)}
                                className={styles.date}
                                alt="date"
                                type="date"
                            />
                        </div>
                    </div>
                    <button

                        onClick={handleBan}
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
                onClick={() => handleClose(0)}
            />
        </div>
    );
}

export default BanModal;