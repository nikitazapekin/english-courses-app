import styles from "./WelcomeSection.module.scss"
const WelcomeSection = () => {
    return (
        <div className={styles.welcome}>
            <div className={styles.welcome__wrapper}>

                <div className={styles.welcome__inner}>
                    <div className={styles.welcome__preview}>

                        <h1 className={styles.welcome__title}>
                            Do you speak
                            english?
                        </h1>
                        <p className={styles.welcome__about}>
                            Добро пожаловать в онлайн
                            школу Edme
                        </p>
                        <div className={styles.welcome__btn}>
                            Начать учиться!
                        </div>
                    </div>
                    <img src="" alt="Preview" 
                    className={styles.welcome__image}
                    />
                </div>
            </div>
            <div className={styles.triangle__top}>

            </div>
        </div>
    );
}

export default WelcomeSection;