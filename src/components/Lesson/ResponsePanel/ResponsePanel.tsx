import styles from "./ResponsePanel.module.scss"
const ResponsePanel = () => {
    return (
        <div className={styles.reply}>
            <input type="text" className={styles.reply__input} placeholder="Напишите ваш ответ" />
            <div className={styles.reply__btns}>
                <div className={styles.reply__btn}>Отмена</div>
                <div className={`${styles.reply__btn} ${styles.reply__btn__send}`}> Отправить</div>
            </div>
        </div>);
}

export default ResponsePanel;