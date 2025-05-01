import { useState } from "react"
import BanService from "../../../services/Ban"
import styles from "./WarningModal.module.scss"
import WarningsService from "../../../services/Warnings"
interface Props {
    handleClose: (id: number) => void
    selectedUser: number,
    
}
const WarningModal = ({ handleClose, selectedUser  }: Props) => {
   
    const [message, setMessage] = useState("")
    const handleBan = async () => {
      
        try {
         //   const resp = await BanService.AddBanUser(selectedUser, , message)
         handleClose(0)
           const resp = await WarningsService.AddUserWarnings(message, selectedUser)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className={styles.modal}>
            <div className={styles.modal__content}>
                <h1 className={styles.modal__title}>
                  Добавить предупреждение
                </h1>
                <form className={styles.modal__fields}>
                    <div className={styles.modal__field}>
                        <div className={styles.modal__input__wrapper}>
                            <p className={styles.modal__field__title}>
                                Опишите причину жалобы
                            </p>
                            <textarea placeholder="Добавьте описание блокировки"
                                onChange={(e) => setMessage(e.target.value)}
                                className={styles.textarea}
                            ></textarea>
                        </div>
                    </div>
                    <button

                        onClick={handleBan}
                        className={styles.modal__btn}
                        type="button"
                    >
                       Добавить предупреждение
                    </button>
                    <button
                        className={`${styles.modal__btn} ${styles.modal__btn__disabled}`}
                        type="button"
                        onClick={() => handleClose(0)}
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

export default WarningModal;