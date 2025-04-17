import styles from "./ErrorsModal.module.scss"

interface Warning {
    id: number,
    ban_text: string,
    ban_date: string,
    is_active: boolean
}

interface Props {
    bans: Warning[],
    handler: (e: React.MouseEvent) => void
}
const EditModal = ({ bans, handler }: Props) => {
    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        handler(e);
    };
    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
    };
    const formatWarningText = (text: string) => {
        return text.split('\n').map((paragraph, index) => (
            <p key={index} className={styles.card__paragraph}>
                {paragraph}
            </p>
        ));
    };
    return (
        <div className={styles.modal} onClick={handleClose}>
            <div className={styles.modal__content} onClick={handleContentClick}>
                <h1 className={styles.modal__title}>
                  Блокировки курса:
                </h1>
                {bans && bans.map(item => (
                    <div key={item.id} className={styles.card}>
                        <div className={styles.card__text}>
                            {formatWarningText(item.ban_text)}
                        </div>
                        <p className={styles.card__date}>
                            {formatDate(item.ban_date)}
                        </p>
                    </div>
                ))}
                <div className={styles.btns}>
                    <button
                        className={styles.modal__btn}
                        type="button"
                    >
                        Удалить все
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

export default EditModal;
