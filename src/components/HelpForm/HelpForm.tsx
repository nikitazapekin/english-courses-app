import styles from "./HelpForm.module.scss"

import { list } from "./consts";

import Cross from "../../assets/cross.png"
import Bird from "../../assets/SmallBird.png"
const HelpForm = () => {
    return (
        <section className={styles.join}  >
            <div className={styles.join__inner}>

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
                                        <div className={styles.join__item__block}>

                                        <p className={styles.join__text__title}>
                                            {item.title}
                                        </p>
                                        <p className={styles.join__text}>
                                            {item.about}
                                        </p>
                                        </div>
                                    </li>
                                    ))}
                                {/*
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
                                    */}
                            </ul>

                            <div className={`${styles.join__decor} ${styles.join__decorBottom} `}>
                                <div className={`${styles.join__circle} ${styles.join__circleS} ${styles.join__circleEnd}  `} />
                                <div className={`${styles.join__circle} ${styles.join__circleB}`} />
                            </div>
                        </div>
                        <img className={styles.join__image}
                            src={Bird}
                            alt="Bird"
                        />
                    </div>
                </div>



                <div className={styles.join__preview}>
                    <form className={styles.form}>
                        <div className={styles.form__content}>
                            <div className={styles.form__header}>
                                <h2 className={styles.form__title}>
                                    Связаться с нами
                                </h2>
                                <p className={styles.form__about}>
                                    Свяжитесь с нами и получите ответы на возникшие вопросы
                                </p>
                            </div>
                            <div className={styles.form__fields}>
                                <input name="name" type="text" className={styles.form__field} placeholder="Ваше имя" required />
                                <input name="name" type="email" className={styles.form__field} placeholder="Ваша электронная почта" required />
                                <input name="name" type="tel" className={styles.form__field} placeholder="Ваш телефон" required />
                                <select className={styles.form__select}>
                                    <option>
                                        Технические неполадки
                                    </option>
                                    <option>
                                        Проблема с оплатой
                                    </option>
                                    <option>
                                        Восстановить аккаунт
                                    </option>
                                    <option>
                                        Другое
                                    </option>
                                </select>
                                <textarea placeholder="Опишите вашу проблему"
                                    className={styles.form__textarea}

                                />
                            </div>
                            <button type="submit" className={styles.form__btn}>
                                Отправить
                            </button>
                        </div>
                    </form>
                </div>


            </div>
        </section>
    );
}

export default HelpForm;


/*
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
                        src={Bird}
                        alt="Bird"
                    />
                    </div>
                </div>
                  



                </div>
                </section>
            );
        }
        
        export default JoinTrial;
        */