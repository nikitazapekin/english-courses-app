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
                <PersonalHeader title={"Мой профиль"} />
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
                   
                </div>
                <PersonalCourses />
            </div>
        </section>
    );
}

export default PersonalProfile;