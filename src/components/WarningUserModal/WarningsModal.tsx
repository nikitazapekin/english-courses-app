   import styles from "./WarningsModal.module.scss";

interface Warning {
  /*   id: number,
    warning_text: string,
    warning_date: string,
    is_active: boolean */

    
    id: number,
    user_id: number,
    warning_text:string,
    is_active: boolean
}

interface Props {
    warnings: Warning[],
    handler: (e: React.MouseEvent) => void
}
const WarningsUserModal = ({ warnings, handler }: Props) => {
    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        handler(e);
    };
  
    return (
        <div className={styles.modal} onClick={handleClose}>
            <div className={styles.modal__content} >
                <h1 className={styles.modal__title}>
                    Ваши предупреждения:
                </h1>
           
                <div className={styles.btns}>
                    <button
                        className={styles.modal__btn}
                        type="button"
                    >
                        Сообщить о правках
                    </button>
                    <button
                        className={styles.modal__btn}
                        type="button"
                    >
                        Связаться с администрацией
                    </button>
                <button
                    className={`${styles.modal__btn} ${styles.modal__delete}`}
                    type="button"
                >
                    Отмена
                </button>
                </div>

            </div>
            <div className={styles.modal__overlay} />
        </div>
    );
};

export default WarningsUserModal;
