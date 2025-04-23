// EditModal.tsx
import { useState } from "react";
import styles from "./ErrorsModal.module.scss";

interface Cards {
    user_id: number,
    username: string,
    email: string,
    role: string,
    ban_id: number,
    ban_text: string,
    ban_date: string,
    is_active: boolean,
}

interface Props {
    items: Cards[],
    onDelete: (id: number) => void;
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
                {items.length === 0 ? (
                    <div>Нет активных блокировок</div>
                ) : (
                    items.map(item => (
                        <div key={item.ban_id} className={styles.card}>
                            <div className={styles.card__text}>
                                {editingId === item.ban_id ? (
                                    <>
                                        <div className={styles.inputGroup}>
                                            <label className={styles.label}>Дата блокировки:</label>
                                            <textarea
                                                className={styles.card__input}
                                                value={editedText}
                                                onChange={(e) => setEditedText(e.target.value)}
                                                autoFocus
                                            />
                                        </div>
                                        <div className={styles.inputGroup}>
                                            <label className={styles.label}>Причина блокировки:</label>
                                            <textarea
                                                className={styles.card__input}
                                                value={editedDate}
                                                onChange={(e) => setEditedDate(e.target.value)}
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className={styles.infoGroup}>
                                            <strong className={styles.label}>Дата:</strong>
                                            {item.ban_text.split('\n').map((paragraph, index) => (
                                                <p key={`text-${index}`} className={styles.card__paragraph}>
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                        <div className={styles.infoGroup}>
                                                    <strong className={styles.label}>Причина:</strong>
                                            <p key="date" className={styles.card__paragraph}>{item.ban_date}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className={styles.card__footer}>
                                <div className={styles.card__actions}>
                                    {editingId === item.ban_id ? (
                                        <>
                                            <button
                                                className={styles.card__action}
                                                onClick={() => handleSaveClick(item.ban_id)}
                                                title="Сохранить"
                                            >
                                                ✅
                                            </button>
                                            <button
                                                className={styles.card__action}
                                                onClick={handleCancelEdit}
                                                title="Отменить"
                                            >
                                                ❎
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                className={styles.card__action}
                                                onClick={() => handleEditClick(item.ban_id, item.ban_text, item.ban_date)}
                                                title="Редактировать"
                                            >
                                                ✏️
                                            </button>
                                            <button
                                                className={styles.card__action}
                                                onClick={() => onDelete(item.ban_id)}
                                                title="Удалить"
                                            >
                                                ❌
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                )}
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
            <div className={styles.modal__overlay} />
        </div>
    );
};

export default EditModal;
/* // EditModal.tsx
import { useState } from "react";
import styles from "./ErrorsModal.module.scss";

interface Cards {
    user_id: number,
    username: string,
    email: string,
    role: string,
    ban_id: number,
    ban_text: string,
    ban_date: string,
    is_active: boolean,
}

interface Props {
    items: Cards[],
    onDelete: (id: number) => void;
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
                {items.length === 0 ? (
                    <div>Нет активных блокировок</div>
                ) : (
                    items.map(item => (
                        <div key={item.ban_id} className={styles.card}>
                            <div className={styles.card__text}>
                                {editingId === item.ban_id ? (
                                    <>
                                        <label>Причина блокировки:</label>
                                        <textarea
                                            className={styles.card__input}
                                            value={editedDate}
                                            onChange={(e) => setEditedText(e.target.value)}
                                            autoFocus
                                        />
                                        <label>Дата блокировки:</label>
                                        <textarea
                                            className={styles.card__input}
                                            value={editedText}
                                            onChange={(e) => setEditedDate(e.target.value)}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <div>
                                            <strong>Причина:</strong>
                                            {item.ban_text.split('\n').map((paragraph, index) => (
                                                <p key={index} className={styles.card__paragraph}>
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                        <div>
                                            <strong>Дата:</strong>
                                            <p className={styles.card__paragraph}>{item.ban_date}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className={styles.card__footer}>
                                <div className={styles.card__actions}>
                                    {editingId === item.ban_id ? (
                                        <>
                                            <button
                                                className={styles.card__action}
                                                onClick={() => handleSaveClick(item.ban_id)}
                                                title="Сохранить"
                                            >
                                                ✅
                                            </button>
                                            <button
                                                className={styles.card__action}
                                                onClick={handleCancelEdit}
                                                title="Отменить"
                                            >
                                                ❎
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                className={styles.card__action}
                                                onClick={() => handleEditClick(item.ban_id, item.ban_text, item.ban_date)}
                                                title="Редактировать"
                                            >
                                                ✏️
                                            </button>
                                            <button
                                                className={styles.card__action}
                                                onClick={() => onDelete(item.ban_id)}
                                                title="Удалить"
                                            >
                                                ❌
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                )}
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
            <div className={styles.modal__overlay} />
        </div>
    );
};

export default EditModal; */
/* // EditModal.tsx
import { useState } from "react";
import styles from "./ErrorsModal.module.scss";

interface Cards {
    user_id: number,
    username: string,
    email: string,
    role: string,
    ban_id: number,
    ban_text: string,
    ban_date: string,
    is_active: boolean,
}

interface Props {
    items: Cards[],
    onDelete: (id: number) => void;
    onUpdate: (id: number, newText: string) => void;
    handler: (e: React.MouseEvent) => void;
}

const EditModal = ({ items, onDelete, onUpdate, handler }: Props) => {
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editedText, setEditedText] = useState<string>("");

    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        handler(e); 
    };

    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    
    const handleEditClick = (id: number, currentText: string) => {
        setEditingId(id);
        setEditedText(currentText);
    };

    const handleSaveClick = (id: number) => {
        if (editedText.trim()) {
            onUpdate(id, editedText);
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
                {items.length === 0 ? (
                    <div>Нет активных блокировок</div>
                ) : (
                    items.map(item => (
                        <div key={item.ban_id} className={styles.card}>
                            <div className={styles.card__text}>
                                {editingId === item.ban_id ? (
                                    <textarea
                                        className={styles.card__input}
                                        value={item.}
                                        onChange={(e) => setEditedText(e.target.value)}
                                        autoFocus
                                    />
                                ) : (
                                    item.ban_text.split('\n').map((paragraph, index) => (
                                        <p key={index} className={styles.card__paragraph}>
                                            {paragraph}
                                        </p>
                                    ))
                                )}
                            </div>
                            <div className={styles.card__footer}>
                                <p className={styles.card__date}>
                             {item.ban_date}
                                </p>
                                <div className={styles.card__actions}>
                                    {editingId === item.ban_id ? (
                                        <>
                                            <button
                                                className={styles.card__action}
                                                onClick={() => handleSaveClick(item.ban_id)}
                                                title="Сохранить"
                                            >
                                                ✅
                                            </button>
                                            <button
                                                className={styles.card__action}
                                                onClick={handleCancelEdit}
                                                title="Отменить"
                                            >
                                                ❎
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                className={styles.card__action}
                                                onClick={() => handleEditClick(item.ban_id, item.ban_text)}
                                                title="Редактировать"
                                            >
                                                ✏️
                                            </button>
                                            <button
                                                className={styles.card__action}
                                                onClick={() => onDelete(item.ban_id)}
                                                title="Удалить"
                                            >
                                                ❌
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                )}
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
            <div className={styles.modal__overlay} />
        </div>
    );
};

export default EditModal;
  */