import styles from "./Footer.module.scss"
import { columns, networks } from "./consts";
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__inner}>
                <div className={styles.footer__header}>
                    <div className={styles.preview}>
                        <div className={styles.contacts}>
                            <div className={styles.contacts__block}>
                                <a href="tel:+375292557677" className={styles.contacts__title}>
                                    +375 (29) 255-76-77
                                </a>
                                <p className={styles.contacts__text}>
                                    Контактный центр
                                </p>
                            </div>
                            <div className={styles.contacts__block}>
                                <a href="mailto:edme@gmail.com" className={styles.contacts__title}>
                                    edme@gmail.com
                                </a>
                                <p className={styles.contacts__text}>
                                    Электронная почта
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.about}>
                        <div className={styles.about__block}>
                            <h2 className={styles.about__title}>
                                Занятия
                            </h2>
                            <hr />
                            {columns.col1.map((item, index) => (
                                <p key={index} className={styles.about__text}>
                                    {item}
                                </p>
                            ))}
                        </div>
                        <div className={styles.about__block}>
                            <h2 className={styles.about__title}>
                                Программы
                            </h2>
                            <hr />
                            {columns.col2.map((item, index) => (
                                <p key={index} className={styles.about__text}>
                                    {item}
                                </p>
                            ))}

                        </div>
                        <div className={styles.about__block}>
                            <h2 className={styles.about__title}>
                                О школе
                            </h2>
                            <hr />
                            {columns.col3.map((item, index) => (
                                <p key={index} className={styles.about__text}>
                                    {item}
                                </p>
                            ))}

                        </div>
                    </div>
                </div>
                <iframe className={styles.card} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.9127596688495!2d27.549856477075576!3d53.89775453332256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfe8262c4f7d%3A0x9c685623d5f0fb00!2z0KbRjdC90YLRgNCw0LvRjNC90Ys!5e0!3m2!1sru!2suk!4v1729360505197!5m2!1sru!2suk" width="600" height="450" loading="lazy" />
                <div className={styles.networks}>
                    {networks.map((item, index) => (
                        <img src={item}
                            key={index}
                            className={styles.networks__network}
                            alt="Network" />
                    ))}
                </div>
                <hr className={styles.line} />
                <div className={styles.copyright}>
                    <p className={styles.copyright__text}>
                        © Edme, 2024
                    </p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;