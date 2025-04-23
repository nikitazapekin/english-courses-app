// EditModal.tsx
import { useState } from "react";
import styles from "./ErrorsModal.module.scss";

interface Cards {
    user_id: number,
    username: string,
    email: string,
    role: string,
    warning_id: number,
    warning_text: string,
}

interface Props {
    item: Cards;
    onDelete: (warningId: number) => void;
    onUpdate: (warningId: number, newText: string) => void;
    handler: () => void;
}

const EditModal = ({ item, onDelete, onUpdate, handler }: Props) => {
    const [editedText, setEditedText] = useState(item.warning_text);
    const [isEditing, setIsEditing] = useState(false);

    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        handler();
    };

    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        onUpdate(item.warning_id, editedText);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setEditedText(item.warning_text);
    };

    return (
        <div className={styles.modal} onClick={handleClose}>
            <div className={styles.modal__content} onClick={handleContentClick}>
                <h1 className={styles.modal__title}>
                    Редактирование предупреждения
                </h1>
                <div className={styles.modal__info}>
                    <p><strong>Пользователь:</strong> {item.username}</p>
                    <p><strong>Email:</strong> {item.email}</p>
                    <p><strong>Роль:</strong> {item.role}</p>
                </div>
                <div className={styles.modal__field}>
                    <label>Текст предупреждения:</label>
                    {isEditing ? (
                        <textarea

                            className={styles.card__input}
                            value={editedText}
                            onChange={(e) => setEditedText(e.target.value)}
                        />
                    ) : (
                        <p>{item.warning_text}</p>
                    )}
                </div>
                <div className={styles.modal__buttons}>
                    {isEditing ? (
                        <>
                            <button className={styles.card__action} onClick={handleSaveClick}>✅</button>
                            <button className={styles.card__action} onClick={handleCancelEdit}>❎</button>
                        </>
                    ) : (
                        <>
                            <button className={styles.card__action} onClick={handleEditClick}>✏️</button>
                            <button className={styles.card__action} onClick={() => onDelete(item.warning_id)}>❌</button>
                        </>
                    )}

                    {/*
                    <button onClick={handler}>Закрыть</button>
                    */}

                    <div className={styles.btns}>
                        <button
                            className={`${styles.modal__btn} ${styles.modal__delete}`}
                            type="button"
                            onClick={handleClose}
                        >
                            Закрыть
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.modal__overlay} />
        </div>
    );
};

export default EditModal;


/* // EditModal.tsx


   <div className={styles.btns}>
                    <button
                        className={`${styles.modal__btn} ${styles.modal__delete}`}
                        type="button"
                        onClick={handleClose}
                    >
                        Закрыть
                    </button>
                </div>
import { useState } from "react";
import styles from "./ErrorsModal.module.scss";

interface Cards {
  

    user_id: number,
    username:  string,
    email:  string,
    role: string,
    warning_id: number,
    warning_text:  string,


}
interface Props {
    items: Cards[],
    onDelete: (banId: number, userId: number) => void;
    onUpdate: (id: number, newText: string, newDate: string) => void;
    handler: (e: React.MouseEvent) => void;
}

const EditModal = ({ items, onDelete, onUpdate, handler }: Props) => {
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editedText, setEditedText] = useState<string>("");
    const [editedDate, setEditedDate] = useState<string>("");

    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        handler(e);
    };

    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };
    
    const handleEditClick = (id: number, currentText: string, currentDate: string) => {
        setEditingId(id);
        setEditedText(currentText);
        setEditedDate(currentDate);
    };

    const handleSaveClick = (id: number) => {
        if (editedText.trim() && editedDate.trim()) {
            onUpdate(id, editedText, editedDate);
        }
        setEditingId(null);
    };
    const handleCancelEdit = () => {
        setEditingId(null);
    };

    return (
        <div className={styles.modal} onClick={handleClose}>
            <div className={styles.modal__content} onClick={handleContentClick}>
                <h1 className={styles.modal__title}>
                    Блокировка пользователя:
                </h1> 
            </div>
            <div className={styles.modal__overlay} />
        </div>
    );
};

export default EditModal;  */