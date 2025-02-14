/* 
import React, { useState } from "react";
import styles from "./LessonPanel.module.scss";
import Personal from "../../../assets/Personal/Avatar.png";

interface LessonPanelProps {
    addComment: (comment: string) => void; // Пропс для добавления комментария
}

const LessonPanel = ({ addComment }: LessonPanelProps) => {
    const [commentText, setCommentText] = useState("");

    const handleSend = () => {
        if (commentText.trim()) {
            addComment(commentText); // Добавляем комментарий
            setCommentText(""); // Очищаем текстовое поле
        }
    };

    return (
        <section className={styles.panel}>
            <div className={styles.panel__inner}>
                <div className={styles.panel__preview}>
                    <img src={Personal} alt="Logo" className={styles.panel__image} />
                    <p className={styles.panel__title}>
                        Вы <br /> (Запекин Никита)
                    </p>
                </div>
                <div className={styles.panel__content}>
                    <textarea
                        placeholder="Оставьте ваш комментарий"
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        className={styles.panel__area}
                        />
                        <div className={styles.panel__btn} onClick={handleSend}>
                        Отправить
                    </div>
                    </div>
                    </div>
        </section>
    );
};

export default LessonPanel;
 */
import styles from "./LessonPanel.module.scss"
import Personal from "../../../assets/Personal/Avatar.png"
import { useEffect, useState } from "react"
interface LessonPanelProps {
    handleAddComment: (text: string)=> void
}
const LessonPanel = ({handleAddComment}: LessonPanelProps) => {
const [text, setText] =useState("")
    const handleSend =()=> {
        handleAddComment(text)
    }
    const handleChange = (event:  React.ChangeEvent<HTMLTextAreaElement>) => {
setText(event.target.value)
    }
    return (
        <section className={styles.panel}>
            <div className={styles.panel__inner}>
                <div className={styles.panel__preview}>
                    <img src={Personal} alt="Logo"
                    className={styles.panel__image}
                    />
                    <p className={styles.panel__title}> 
                        Вы <br /> (Запекин Никита)
                    </p>
                </div>
                <div className={styles.panel__content}>
                    <textarea placeholder="Оставьте ваш комментарий" 
                    onChange={(event)=>handleChange(event)}
                    className={styles.panel__area}
                    />
                    <div className={styles.panel__btn} onClick={ handleSend}>
                        Отправить
                    </div>
                </div>
            </div>
        </section>);
}

export default LessonPanel;
/*
*/