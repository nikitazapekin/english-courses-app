import styles from "./PersonalHeader.module.scss"
const btns = [
    "История покупок",
    "Редактировать"
]
const PersonalHeader = () => {
    return (<div className={styles.header}>
        <h1 className={styles.header__title}>
            Мой профиль
        </h1>
        <ul className={styles.header__btns}>
            {btns.map((item, index) => (
                <li className={styles.header__btn} key={index}>
                    {item}
                </li>
            ))}
        </ul>
    </div>);
}

export default PersonalHeader;