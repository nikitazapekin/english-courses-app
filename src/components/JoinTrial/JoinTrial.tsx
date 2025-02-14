import { list } from "./const";
import styles from "./JoinTrial.module.scss"
import Cross from "../../assets/cross.png"
import Bird from "../../assets/SmallBird.png"
const JoinTrial = () => {
    return (
        <section className={styles.join} id="joinSection">
            <div className={styles.join__inner}>
                <div className={styles.join__preview}>
                    <form className={styles.form}>
                        <div className={styles.form__content}>
                            <div className={styles.form__header}>
                                <h2 className={styles.form__title}>
                                    Обучайтесь вместе
                                    с Edme
                                </h2>
                                <p className={styles.form__about}>
                                    Оставь заявку - мы запишем тебя на пробное
                                    занятие
                                </p>
                            </div>
                            <div className={styles.form__fields}>
                                <input name="name" type="text" className={styles.form__field} placeholder="Ваше имя" required />
                                <input name="name" type="email" className={styles.form__field} placeholder="Ваша электронная почта" required />
                                <input name="name" type="tel" className={styles.form__field} placeholder="Ваш телефон" required />
                            </div>
                            <button type="submit" className={styles.form__btn}>
                                Отправить
                            </button>
                        </div>
                    </form>
                </div>
                <div className={styles.join__info}>
                    <div className={styles.join__info__wrapper}>
                        <div className={styles.join__content}>
                            <div className={`${styles.join__decor}`}>
                                <div className={`${styles.join__circle} ${styles.join__circleB}`} />
                                <div className={`${styles.join__circle} ${styles.join__circleS} ${styles.join__circleEnd}`} />
                            </div>
                            <ul className={styles.join__list}>
                                {list.map((item, index) => (
                                    <li key={index} className={styles.join__item} >
                                        <img src={Cross}
                                            className={styles.join__icon}
                                            alt="Icon"
                                        />
                                        <p className={styles.join__text}>
                                            {item}
                                        </p>
                                    </li>
                                ))}
                            </ul>

                            <div className={`${styles.join__decor} ${styles.join__decorBottom} `}>
                                <div className={`${styles.join__circle} ${styles.join__circleS} ${styles.join__circleEnd}  `} />
                                <div className={`${styles.join__circle} ${styles.join__circleB}`} />
                            </div>
                        </div>
                    <img className={styles.join__image}
                        src={Bird}  alt="Bird"
                    />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default JoinTrial;