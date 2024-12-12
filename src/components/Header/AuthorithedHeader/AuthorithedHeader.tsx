import { useEffect } from "react"
import styles from "../Header.module.scss"




import Logo from "../../../assets/logo.png"
import Search from "../../../assets/search.png"
import { Link, useNavigate } from "react-router-dom";
import { btns } from "../consts";
import { useSelector } from "react-redux";
import { HomepageSelector } from "../../../store/selectors/Homepage.selector";
import { useDispatch } from "react-redux";
import { setOpenBurger } from "../../../store/slices/Homepage.slice";
import BirdPanel from "../../../assets/BirdPanel.png"
import { useDebouncedCallback } from "use-debounce";
import { useState, ChangeEvent } from "react";
import ChatIcon from "../../../assets/icons/chat1.png"
const courses = [
    { id: 1, title: "Курс для программистов" },
    { id: 2, title: "Английский для начинающих" },
    { id: 3, title: "Разговорный английский" },
    { id: 4, title: "Английский для бизнеса" },
    { id: 5, title: "Подготовка к IELTS" },
    { id: 6, title: "Технический английский" },
    { id: 7, title: "Английский для путешествий" },
    { id: 8, title: "Английский для детей" },
    { id: 9, title: "Английский для инженеров" },
];
const AuthorithedHeader = () => {



    const navigate = useNavigate()
    const isOpen = useSelector(HomepageSelector)
    const dispatch = useDispatch()
    const handleNavigate = () => {
        navigate("/")
    }

    const handleOpen = () => {

        dispatch(setOpenBurger(!isOpen))
    }

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredCourses, setFilteredCourses] = useState<Array<{ id: number, title: string }>>([]);
    const debouncedSearch = useDebouncedCallback((query) => {
        const lowerCaseQuery = query.toLowerCase();
        const filtered = courses.filter((course) =>
            course.title.toLowerCase().includes(lowerCaseQuery)
        );
        if (filtered.length != courses.length) {

            setFilteredCourses(filtered);
        } else {
            setFilteredCourses([]);
        }
    }, 300);
    useEffect(() => {
        console.log(filteredCourses)
    }, [filteredCourses])
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);
        debouncedSearch(value);
    };


    const handleCatalog = () => {
        navigate("/catalog")
    }

    const handleChat = () => {
        navigate("/chat")
    }
    const scrollToJoin = () => {
        navigate("/")
        const element = document.getElementById("joinSection");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleSearch = () => {
        navigate(`/search/${searchQuery}`)
    }
const handlePersonal =()=> {
    navigate(`/personal`)
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
                            onChange={handleSearchChange}
                            className={styles.search__input} />

                        <div className={styles.search__params}>
                            {filteredCourses!.slice(0, 5).map((item) => (
                                <div className={styles.search__param} key={item.id}>
                                    {item.title}
                                </div>
                            ))}
                        </div>
                        <div className={styles.search__btn} onClick={handleSearch}>
                            <img src={Search} alt="Icon"
                                className={styles.search__icon}
                            />
                        </div>
                    </div>
                </div>
                <nav className={styles.navigation}>
                    <ul className={styles.navigation__list}>
                        <li className={styles.navigation__item}>

                            <div className={styles.navigation__text} onClick={handleCatalog}>
                                Каталог
                            </div>

                        </li>


                        <li className={styles.navigation__item}>
                            <div className={styles.navigation__image__wrapper}>

                                <img className={styles.navigation__image}

                                onClick={handleChat}
                                    src={ChatIcon}
                                    alt="chat"
                                />

                            </div>
                        </li>
                   


                        <li className={styles.navigation__item}>

                            <div className={styles.navigation__text} onClick={handlePersonal}   >
                                Профиль
                            </div>

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
                            className={styles.search__input}
                            onChange={handleSearchChange}
                        />

                        <div className={styles.search__params}>
                            {filteredCourses!.slice(0, 5).map((item) => (
                                <div className={styles.search__param} key={item.id}>
                                    {item.title}
                                </div>
                            ))}
                        </div>
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

export default AuthorithedHeader;