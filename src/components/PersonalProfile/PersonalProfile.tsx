import AvatarComponent from "./AvatarComponent/AvatarComponent";
import PersonalHeader from "./PersonalHeader/PersonalHeader/PersonalHeader";
import styles from "./PersonalProfile.module.scss"
import Discord from "../../assets/networks/discord.png"
import Vk from "../../assets/networks/vk.png"
import Google from "../../assets/networks/google.png"
import PersonalDescribtion from "./PersonalDescribtion/PersonalDescribtion";
import PersonalCourses from "./PersonalCourses/PersonalCourses";
const PersonalProfile = () => {
    return (
        <section className={styles.personal}>
            <div className={styles.personal__inner}>
                <PersonalHeader />
                <div className={styles.personal__info}>
                    <div className={styles.personal__actions}>
                        <AvatarComponent />
                        <div className={styles.personal__balance}>
                            <p className={styles.personal__balance__text}>
                                Баланс:
                            </p>
                            <p className={styles.personal__balance__number}>
                                200$
                            </p>
                        </div>
                        <button className={`${styles.personal__btn} ${styles.personal__btn__purple}`}>
                            Пополнить
                        </button>
                        <button className={`${styles.personal__btn} ${styles.personal__btn__red}`}>
                            Выйти
                        </button>
                    </div>

                    <PersonalDescribtion />
                    {/*
                    <div className={styles.describtion}>
                    <h3 className={styles.describtion__title}>
                            Никита Запекин Андреевич
                        </h3>
                        <p className={styles.describtion__country}>
                            Минск, Беларусь
                        </p>
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
                            <div className={styles.describtion__network}>
                                <img src={Discord} alt="Discord" className={styles.describtion__network__image}  />
                            </div>
                            <div className={styles.describtion__network}>
                            <img src={Google} alt="Google" className={styles.describtion__network__image}  />
                            </div>
                            <div className={styles.describtion__network}>
                            <img src={Vk} alt="Vk" className={styles.describtion__network__image}  />
                            </div>
                        </div>
                    </div>
                    */}
                </div>
                <PersonalCourses />
            </div>
        </section>
    );
}

export default PersonalProfile;