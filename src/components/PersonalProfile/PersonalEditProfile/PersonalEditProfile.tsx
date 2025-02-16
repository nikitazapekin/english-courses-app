import { useState } from "react";
import PersonalService from "../../../services/Personal";
import PersonalHeader from "../PersonalHeader/PersonalHeader/PersonalHeader";
import styles from "./PersonalEditProfile.module.scss";

interface EditProps {
    email: string;
    password: string;
    phone: string;
    country: string;
    city: string;
    name: string;
    shortName: string;
    describtion: string;
    theme: string;
}

const PersonalEditProfile = () => {
    const [data, setData] = useState<EditProps>({
        email: "",
        password: "",
        phone: "",
        country: "",
        city: "",
        name: "",
        shortName: "",
        describtion: "",
        theme: ""
    });

    const handleEdit = () => {
        try {
            PersonalService.EditUser({ data: data });
        } catch (error) {
            console.error("Ошибка при редактировании профиля", error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name != "confirmPassword") {

            setData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    return (
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.form__inner}>
                <PersonalHeader title={"Настройки"} />

                <div className={styles.form__forms}>
                    {[
                        { label: "Имя", name: "name", type: "text", placeholder: "Введите имя" },
                        { label: "Страна", name: "country", type: "text", placeholder: "Введите страну" },
                        { label: "Город", name: "city", type: "text", placeholder: "Введите город" },
                        { label: "Телефон", name: "phone", type: "text", placeholder: "Введите телефон" },
                        { label: "Короткое имя", name: "shortName", type: "text", placeholder: "Введите короткое имя" },
                        { label: "Почта", name: "email", type: "email", placeholder: "Введите почту" },
                        { label: "Пароль", name: "password", type: "password", placeholder: "Введите пароль" },
                        { label: "Подтвердите пароль", name: "confirmPassword", type: "password", placeholder: "Введите пароль" },
                    ].map(({ label, name, type, placeholder }) => (
                        <div className={styles.form__field} key={name}>
                            <p className={styles.form__text}>{label}</p>
                            <div className={styles.form__wrapper}>
                                <img className={styles.form__icon} src="" alt="Icon" />
                                <input
                                    className={styles.form__input}
                                    type={type}
                                    name={name}
                                    value={data[name as keyof EditProps]}
                                    placeholder={placeholder}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    ))}

                    <div className={`${styles.form__field} ${styles.form__desc}`}>
                        <p className={styles.form__text}>Введите описание</p>
                        <div className={styles.form__wrapper}>
                            <textarea
                                className={styles.form__textarea}
                                name="describtion"
                                value={data.describtion}
                                placeholder="Введите ваше описание"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.form__theme}>
                    <select
                        name="theme"
                        id="theme"
                        className={styles.form__theme__select}
                        value={data.theme}
                        onChange={handleChange}
                    >
                        <option value="dark">Темная</option>
                        <option value="light">Светлая</option>
                    </select>
                    <p className={styles.form__theme__text}>Выберите тему</p>
                </div>

                <div className={styles.form__btns}>
                    <button className={`${styles.form__btn} ${styles.form__btn__purple}`} onClick={handleEdit}>
                        Сохранить
                    </button>
                    <button className={`${styles.form__btn} ${styles.form__btn__red}`} type="button">
                        Отмена
                    </button>
                </div>
            </div>
        </form>
    );
};

export default PersonalEditProfile;

/* import { useState } from "react";
import PersonalService from "../../../services/Personal";
import PersonalHeader from "../PersonalHeader/PersonalHeader/PersonalHeader";
import styles from "./PersonalEditProfile.module.scss"
interface EditProps {
 
        email: string,
        password: string, 
        phone: string,
        country: string,
        city: string, 
        name: string,
        shortName: string,
        describtion: string,
         theme: string 
   
}
const PersonalEditProfile = () => {
    const [data, setData] = useState<EditProps>({
        email: "",
        password: "", 
        phone: "",
        country: "",
        city: "", 
        name: "",
        shortName: "",
        describtion: "",
         theme: "" 
    }
    )
    const handleEdit = ()=> {
        try {

            PersonalService.EditUser({data: data})
        } catch {
            
        }
    }
    const handleChange = (e: ) => {
setData()
    }
    return (
        <form className={styles.form}>
            <div className={styles.form__inner}>
                <PersonalHeader title={"Настройки"} />

                <div className={styles.form__forms}>

                    <div className={styles.form__field}>
                        <p className={styles.form__text}>
                            Имя
                        </p>
                        <div className={styles.form__wrapper}>
                            <img className={styles.form__icon} src="" alt="Icon" />
                            <input className={styles.form__input} type="text" placeholder="Введите имя" />
                        </div>
                    </div>
 

                    <div className={styles.form__field}>
                        <p className={styles.form__text}>
                            Страна
                        </p>
                        <div className={styles.form__wrapper}>
                            <img className={styles.form__icon} src="" alt="Icon" />
                            <input className={styles.form__input} type="text" placeholder="Введите страну" />
                        </div>
                    </div>

                    <div className={styles.form__field}>
                        <p className={styles.form__text}>
                            Город
                        </p>
                        <div className={styles.form__wrapper}>
                            <img className={styles.form__icon} src="" alt="Icon" />
                            <input className={styles.form__input} type="text" placeholder="Введите город" />
                        </div>
                    </div>

                    <div className={styles.form__field}>
                        <p className={styles.form__text}>
                            Телефон
                        </p>
                        <div className={styles.form__wrapper}>
                            <img className={styles.form__icon} src="" alt="Icon" />
                            <input className={styles.form__input} type="text" placeholder="Введите телефон" />
                        </div>
                    </div>
                    <div className={styles.form__field}>
                        <p className={styles.form__text}>
                            Короткое имя
                        </p>
                        <div className={styles.form__wrapper}>
                            <img className={styles.form__icon} src="" alt="Icon" />
                            <input className={styles.form__input} type="tel" placeholder="Введите короткое имя" />
                        </div>
                    </div>
                    <div className={styles.form__field}>
                        <p className={styles.form__text}>
                            Почта
                        </p>
                        <div className={styles.form__wrapper}>
                            <img className={styles.form__icon} src="" alt="Icon" />
                            <input className={styles.form__input} type="email" placeholder="Введите телефон" />
                        </div>
                    </div>

                    <div className={styles.form__field}>
                        <p className={styles.form__text}>
                            Пароль
                        </p>
                        <div className={styles.form__wrapper}>
                            <img className={styles.form__icon} src="" alt="Icon" />
                            <input className={styles.form__input} type="text" placeholder="Введите пароль" />
                        </div>
                    </div>

                    <div className={styles.form__field}>
                        <p className={styles.form__text}>
                            Подтвержите пароль
                        </p>
                        <div className={styles.form__wrapper}>
                            <img className={styles.form__icon} src="" alt="Icon" />
                            <input className={styles.form__input} type="text" placeholder="Подтвержите пароль" />
                        </div>
                    </div>





                  







                    <div className={`${styles.form__field} ${styles.form__desc}`}>
                        <p className={styles.form__text}>
                            Введите описание
                        </p>
                        <div className={styles.form__wrapper}>

                            <textarea className={styles.form__textarea} placeholder="Введите ваше описание" />
                        </div>
                    </div>
                </div>





                <div className={styles.form__theme}>
                    <select name="theme" id="theme" className={styles.form__theme__select}>
                        <option>Темная</option>
                        <option>Светлая</option>
                    </select>
                    <p className={styles.form__theme__text}>
                        Выберите тему
                    </p>
                </div>

                <div className={styles.form__btns}>
                    <button className={`${styles.form__btn} ${styles.form__btn__purple}`}>
                        Сохранить
                    </button>
                    <button className={`${styles.form__btn} ${styles.form__btn__red}`}>
                        Отмена
                    </button>
                </div>


            </div>
        </form>
    );
}

export default PersonalEditProfile; */