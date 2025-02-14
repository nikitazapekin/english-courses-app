
import styles from "./HomepageComments.module.scss"
import Stars from "../../assets/icons/star.png"
import Avatar1 from "../../assets/avatars/avatar1.png"
import Avatar2 from "../../assets/avatars/avatar2.png"
import Avatar3 from "../../assets/avatars/avatar3.png"
import Avatar4 from "../../assets/avatars/avatar4.png"
const HomepageComments = () => {
    return (
        <section className={styles.comments}>
            <div className={styles.comments__inner}>
                <h2 className={styles.comments__title}>
                    Используйте английский легко, как 100 000+ наших учеников
                </h2>
                <div className={styles.comments__content}>
                    <div className={styles.comments__line}>
                        <div className={styles.info}>
                            <div className={styles.info__preview}>
                                <p className={styles.info__title}>
                                    90% из них
                                </p>
                                <img className={styles.info__image}
                                    src={Stars}
                                    alt="stars"
                                />
                            </div>
                            <p className={styles.info__describtion}>
                                Активно разговаривают уже после 30 уроков
                            </p>
                        </div>
                        <div className={`${styles.comment} ${styles.comment__bronze}`}>
                            <div className={styles.comment__header}>
                                <img src={Avatar1}
                                    className={styles.comment__avatar}
                                    alt="Avatar" />

                                <div className={styles.comment__info}>
                                    <h3 className={styles.comment__info__title}>
                                        Наталья
                                    </h3>
                                    <p className={styles.comment__info__date}>
                                        23.07.2023
                                    </p>
                                    <div className={styles.comment__stars}>
                                        <div className={styles.comment__star} />
                                        <div className={styles.comment__star} />
                                        <div className={styles.comment__star} />
                                        <div className={styles.comment__star} />
                                        <div className={styles.comment__star} />
                                    </div>
                                </div>
                            </div>

                            <p className={styles.comment__text}>
                                Начала заниматься в школе не так давно, но уже чувствуется результат. Так как моей
                                главной проблемой было отсутствие разговорной практики, а в Skyeng я могу получать
                                её ежедневно.
                            </p>
                        </div>
                    </div>
                    <div className={styles.comments__line}>
                    <div className={`${styles.comment} ${styles.comment__gray}`}>
                            <div className={styles.comment__header}>
                                <img src={Avatar4}
                                    className={styles.comment__avatar}
                                    alt="Avatar" />

                                <div className={styles.comment__info}>
                                    <h3 className={styles.comment__info__title}>
                                       Алексей
                                    </h3>
                                    <p className={styles.comment__info__date}>
                                        23.07.2023
                                    </p>
                                    <div className={styles.comment__stars}>
                                        <div className={styles.comment__star} />
                                        <div className={styles.comment__star} />
                                        <div className={styles.comment__star} />
                                        <div className={styles.comment__star} />
                                        <div className={styles.comment__starSliced} />
                                    </div>
                                </div>
                            </div>

                            <p className={styles.comment__text}>
                            Все было здорово! Мне понравилось! Курс позволяет подробно ознакомиться с сложными аспектами грамматики английского языка 

                            </p>
                        </div>
                        <div className={`${styles.comment} ${styles.comment__bronzeL}`}>
                            <div className={styles.comment__header}>
                                <img src={Avatar2}
                                    className={styles.comment__avatar}
                                    alt="Avatar" />

                                <div className={styles.comment__info}>
                                    <h3 className={styles.comment__info__title}>
                                     Виктория
                                    </h3>
                                    <p className={styles.comment__info__date}>
                                        23.07.2023
                                    </p>
                                    <div className={styles.comment__stars}>
                                        <div className={styles.comment__star} />
                                        <div className={styles.comment__star} />
                                        <div className={styles.comment__star} />
                                        <div className={styles.comment__star} />
                                        <div className={styles.comment__star} />
                                    </div>
                                </div>
                            </div>
                            <p className={styles.comment__text}>
                            Начала заниматься в школе совсем недавно. Больше всего не хватало разговорной практики, а теперь, благодаря ежедневным занятиям в Skyeng, уверенность в общении растёт с каждым уроком.
                            </p>
                        </div>
                        <div className={`${styles.comment} ${styles.comment__blue}`}>
                            <div className={styles.comment__header}>
                                <img src={Avatar3}
                                    className={styles.comment__avatar}
                                    alt="Avatar" />
                                <div className={styles.comment__info}>
                                    <h3 className={styles.comment__info__title}>
                                       Максим
                                    </h3>
                                    <p className={styles.comment__info__date}>
                                        23.07.2023
                                    </p>
                                    <div className={styles.comment__stars}>
                                        <div className={styles.comment__star} />
                                        <div className={styles.comment__star} />
                                        <div className={styles.comment__star} />
                                        <div className={styles.comment__star} />
                                        <div className={styles.comment__star}>
                                        <div className={styles.comment__starSliced} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className={styles.comment__text}>
                            Только недавно начала заниматься в школе, но уже вижу первые результаты. Раньше мне не хватало практики в разговорной речи, а теперь, в Skyeng, у меня есть возможность тренироваться ежедневно
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
}
export default HomepageComments;






