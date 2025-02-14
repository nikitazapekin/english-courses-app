import styles from "./LessonCommentsHeader.module.scss"
const LessonCommentsHeader = () => {
    return (<div className={styles.header}>
        <h2 className={styles.header__title}>
            Комментарии
        </h2>
        <select className={styles.header__select}>
            <option >Самые новые</option>
            <option >Самые популярные</option>
            <option >Самые старые</option>
        </select>
    </div>);
}

export default LessonCommentsHeader;