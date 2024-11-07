import styles from "./Header.module.scss"
import Logo from "../../assets/logo.png"
import Search from "../../assets/search.png"
import { Link, useNavigate } from "react-router-dom";
import { btns } from "./consts";
import { useSelector } from "react-redux";
import { HomepageSelector } from "../../store/selectors/Homepage.selector";
import { useDispatch } from "react-redux";
import { setOpenBurger } from "../../store/slices/Homepage.slice";
import BirdPanel from "../../assets/BirdPanel.png"
const Header = () => {
    const navigate = useNavigate()
    const isOpen = useSelector(HomepageSelector)
    const dispatch = useDispatch()
    const handleNavigate = () => {
        navigate("/")
    }

    const handleOpen = () => {
        console.log("click")
        dispatch(setOpenBurger(!isOpen))
    }
    return (
        <header className={styles.header}>
            <div className={styles.header__inner}>
                <div className={styles.header__preview}>
                    <img src={Logo} alt="Logo"
                        className={styles.header__logo}
                        onClick={handleNavigate} />
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
                            {/*
                      
                      <div className={styles.navigation__text}>
                      Войти
                      </div>
                      */}

                            {/*
                            
                            */}
                            <Link to="/sign-in"
                                className={styles.navigation__text}
                            >
                                Войти
                            </Link>

                        </li>
                    </ul>
                </nav>
            </div>



            <div className={styles.burger}>
                <div className={styles.burger__inner}>
                    <div className={styles.burger__btn} onClick={handleOpen}>

                        <div className={styles.burger__line} />
                        <div className={styles.burger__line} />
                        <div className={styles.burger__line} />
                    </div>
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

                <div className={`${styles.panel} ${isOpen ? styles.panel__open : ""}`}>
                    <div className={styles.panel__header}>
                        <img src={Logo} alt="logo" className={styles.panel__logo} />
                        <div className={styles.panel__btn} onClick={handleOpen}>

                            <div className={`${styles.panel__line} ${styles.panel__line1}`} />
                            <div className={`${styles.panel__line} ${styles.panel__line2}`} />

                        </div>
                    </div>
                    <ul className={styles.panel__content} >
                        {btns.map((item, index) => (
                            <li className={styles.panel__item} key={index}>
                                <p className={`${styles.panel__text} ${item == "Записаться на урок" ? styles.panel__text__border : ""}`}>

                                    {item}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <img src={BirdPanel} alt="Bird" className={styles.panel__image} />

                </div>
            </div>
        </header>
    );
}

export default Header;