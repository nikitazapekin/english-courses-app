import styles from "./LessonPanel.module.scss"
import Personal from "../../../assets/Personal/Avatar.png"
const LessonPanel = () => {
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
                    className={styles.panel__area}
                    />
                    <div className={styles.panel__btn}>
                        Отправить
                    </div>
                </div>
            </div>
        </section>);
}

export default LessonPanel;