import styles from "./Header.module.scss"
import Logo from "../../assets/logo.png"
import Search from "../../assets/search.png"
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__inner}>
                <div className={styles.header__preview}>
                    <img src={Logo} alt="Logo" />
                    <div className={styles.search}>
                        <input type="text"
                            placeholder="Найти..."
                            className={styles.search__input} />
                        <div className={styles.search__btn}>
                            <img src={Search} alt="Icon"
                                className={styles.search__icon}
                            />
                        </div>
                    </div>
                </div>
                <nav className={styles.navigation}>
                    <ul className={styles.navigation__list}>
                        <li className={styles.navigation__item}>

                            <div className={styles.navigation__text}>
                                Каталог
                            </div>
                            {/*
                                <select>
                                    <option>Test</option>
                                    <option>Test1</option>
                                </select>
                                    */}
                        </li>
                        <li className={styles.navigation__item}>
                            <div className={`${styles.navigation__btn} ${styles.navigation__text}`}>
                                Записаться на урок
                            </div>
                        </li>
                        <li className={styles.navigation__item}>
                            <div className={styles.navigation__text}>
                                Войти
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;