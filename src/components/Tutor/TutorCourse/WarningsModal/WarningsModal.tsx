import styles from "./WarningsModal.module.scss";

interface Warning {
    id: number,
    warning_text: string,
    warning_date: string,
    is_active: boolean
}

interface Props {
    warnings: Warning[],
    handler: (e: React.MouseEvent) => void
}

const WarningsModal = ({ warnings, handler }: Props) => {
    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        handler(e);
    };

    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    // Функция для форматирования даты
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
    };

    // Функция для форматирования текста с сохранением переносов строк
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
                    Предупреждения курса:
                </h1>
                {warnings.map(item => (
                    <div key={item.id} className={styles.card}>
                        <div className={styles.card__text}>
                            {formatWarningText(item.warning_text)}
                        </div>
                        <p className={styles.card__date}>
                            {formatDate(item.warning_date)}
                        </p>
                    </div>
                ))}
            </div>
            <div className={styles.modal__overlay} />
        </div>
    );
};

export default WarningsModal;

/* import styles from "./WarningsModal.module.scss";

interface Warning {
    id: number,
    warning_text: string,
    warning_date: string,
    is_active: boolean
}

interface Props {
    warnings: Warning[],
    handler: (e: React.MouseEvent) => void
}

const WarningsModal = ({ warnings, handler }: Props) => {
    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        handler(e);
    };

    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className={styles.modal} onClick={handleClose}>
            <div className={styles.modal__content} onClick={handleContentClick}>
                <h1 className={styles.modal__title}>
                    Предупреждения курса:
                </h1>
                {warnings.map(item => (
                    <div key={item.id} className={styles.card}>
                        <p className={styles.card__text}>
                            {item.warning_text}
                        </p>
                        <p className={styles.card__date}>
                            {item.warning_date}
                        </p>
                    </div>
                ))}
            </div>
            <div className={styles.modal__overlay} />

           
        </div>
    );
};

export default WarningsModal;  */