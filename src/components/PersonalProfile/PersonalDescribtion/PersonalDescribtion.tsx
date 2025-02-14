import styles from "./PersonalDescribtion.module.scss"
import Discord from "../../../assets/networks/discord.png"
import Vk from "../../../assets/networks/vk.png"
import Google from "../../../assets/networks/google.png"
import Belarus from "../../../assets/Countries/Belarus.png"
const PersonalDescribtion = () => {
    return (
        <div className={styles.describtion}>
            <h3 className={styles.describtion__title}>
                Никита Запекин Андреевич
            </h3>
            <div className={styles.describtion__country}>

                <p className={styles.describtion__country__text}>
                    Минск, Беларусь
                </p>
                <img src={Belarus} alt="Belarus" className={styles.describtion__country__image} />
            </div>
            <p className={styles.describtion__telephone}>
                +375297542229
            </p>
            <p className={styles.describtion__text}>
                Ответственый и амбициозный. Считаю, что главный фактор успеха в чем-либо - это желание
                достижения цели путем упорного труда и настойчивости.
            </p>
            <p className={styles.describtion__subtitle}>
                Привязать аккаунт к социальным сетям:
            </p>
            <div className={styles.describtion__networks}>
                <div className={`${styles.describtion__network}  ${styles.describtion__network__purple}`}>
                    <img src={Discord} alt="Discord" className={`${styles.describtion__network__image} `} />
                </div>
                <div  className={`${styles.describtion__network}  ${styles.describtion__network__white}`}>
                    <img src={Google} alt="Google" className={`${styles.describtion__network__image}`} />
                </div>
                <div  className={`${styles.describtion__network}  ${styles.describtion__network__blue}`}>
                    <img src={Vk} alt="Vk" className={`${styles.describtion__network__image}`} />
                </div>
            </div>
        </div>
    );
}

export default PersonalDescribtion;














 