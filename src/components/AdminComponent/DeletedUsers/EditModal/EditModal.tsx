import { useState } from "react";
import styles from "./ErrorsModal.module.scss";

interface Warning {
    id: number;
    ban_text: string;
    ban_date: string;
    is_active: boolean;
}

interface Props {
 /*    bans: Warning[];
    handler: (e: React.MouseEvent) => void;
    onDelete: (id: number) => void;
    onUpdate: (id: number, newText: string) => void;
    onDeleteAll: () => void; */
}

const EditModal =  ( //{ bans, handler, onDelete, onUpdate, onDeleteAll }: Props

) => {
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editedText, setEditedText] = useState<string>("");

    const handleClose = (e: React.MouseEvent) => {
    /*     e.stopPropagation();
        handler(e); */
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

    const handleEditClick = (id: number, currentText: string) => {
        setEditingId(id);
        setEditedText(currentText);
    };

    const handleSaveClick = (id: number) => {
        if (editedText.trim()) {
//onUpdate(id, editedText);
        }
        setEditingId(null);
    };

    const handleCancelEdit = () => {
        setEditingId(null);
    };

    const handleDeleteAll = () => {
     
       //     onDeleteAll();
       
    };

    return (
        <div className={styles.modal} onClick={handleClose}>
            <div className={styles.modal__content} onClick={handleContentClick}>
                <h1 className={styles.modal__title}>
                    Блокировка пользователя:
                </h1>
                {/*
                {bans.length === 0 ? (
                    <div>Нет активных блокировок</div>
                    ) : (
                    bans.map(item => (
                        <div key={item.id} className={styles.card}>
                            <div className={styles.card__text}>
                                {editingId === item.id ? (
                                    <textarea
                                        className={styles.card__input}
                                        value={editedText}
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
                                    {formatDate(item.ban_date)}
                                </p>
                                <div className={styles.card__actions}>
                                    {editingId === item.id ? (
                                        <>
                                            <button
                                                className={styles.card__action}
                                                onClick={() => handleSaveClick(item.id)}
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
                                                onClick={() => handleEditClick(item.id, item.ban_text)}
                                                title="Редактировать"
                                            >
                                                ✏️
                                            </button>
                                            <button
                                                className={styles.card__action}
                                                onClick={() => {
                                                    if (window.confirm("Удалить эту блокировку?")) {
                                                        onDelete(item.id);
                                                    }
                                                }}
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
                        */}
                
                <div className={styles.btns}>
                    {/*
                    {bans.length > 0 && (
                        <button
                            className={styles.modal__btn}
                            type="button"
                            onClick={handleDeleteAll}
                        >
                            Удалить все
                        </button>
                    )}
                    */}
                    
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