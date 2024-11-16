import styles from "./ForWhatSection.module.scss"
import Lightning from "../../assets/lightning.png"
 import { data } from "./consts";
const ForWhatSection = () => {
    return (
        <section className={styles.what}>
            <div className={styles.what__inner}>
                <h2 className={styles.what__title}>
                    Зачем английский для программистов?
                </h2>
                <div className={styles.what__content}>
                    {data.map((item, index) => (

                        <div className={styles.what__item} key={index}>
                            <img src={Lightning} alt="Lightning"
                                className={styles.what__icon}
                            />
                            <p className={styles.what__text}>
                                {item}
                            </p>
                        </div>
                    ))
                    }
                </div>
            </div>
        </section>
    );
}

export default ForWhatSection;