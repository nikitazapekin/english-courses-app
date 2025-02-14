import styles from "./WelcomeSection.module.scss"
import Bird from "../../assets/bird.png"
const WelcomeSection = () => {
    const scrollToJoin = () => {
        const element = document.getElementById("joinSection");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <section className={styles.welcome}>
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
                        <div className={styles.welcome__btn} onClick={scrollToJoin}>
                            Начать учиться!
                        </div>
                    </div>
                    <img src={Bird} alt="Preview" 
                    className={styles.welcome__image}
                    />
                </div>
            </div>  
        </section>
    );
}

export default WelcomeSection;