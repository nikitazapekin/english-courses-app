import styles from "./BanModal.module.scss"
interface Props {
    handleClose: (id: number) => void
    selectedUser: number
}
const BanModal = ({ handleClose }: Props) => {
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
                onClick={() => handleClose(0)}
            />
        </div>
    );
}

export default BanModal;