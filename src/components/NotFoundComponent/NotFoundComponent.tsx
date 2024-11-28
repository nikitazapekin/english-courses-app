import styles from "./NotFoundComponent.module.scss"
const NotFoundComponent = () => {
    return (
        <div className={styles.not}>
            <h2 className={styles.not__title}>
                404
            </h2>
            <p className={styles.not__describtion}>
                Страница не найдена
            </p>
            <button className={styles.not__btn}>
                На главную
            </button>
        </div>
    );
}

export default NotFoundComponent;