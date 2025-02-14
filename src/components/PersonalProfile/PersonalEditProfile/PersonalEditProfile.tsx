import PersonalHeader from "../PersonalHeader/PersonalHeader/PersonalHeader";
import styles from "./PersonalEditProfile.module.scss"
const PersonalEditProfile = () => {
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
                            Фамилия
                        </p>
                        <div className={styles.form__wrapper}>
                            <img className={styles.form__icon} src="" alt="Icon" />
                            <input className={styles.form__input} type="text" placeholder="Введите фамилию" />
                        </div>
                    </div>





                    <div className={styles.form__field}>
                        <p className={styles.form__text}>
                            Отчество
                        </p>
                        <div className={styles.form__wrapper}>
                            <img className={styles.form__icon} src="" alt="Icon" />
                            <input className={styles.form__input} type="text" placeholder="Введите отчество" />
                        </div>
                    </div>




                    <div className={styles.form__field}>
                        <p className={styles.form__text}>
                            Страна
                        </p>
                        <div className={styles.form__wrapper}>
                            <img className={styles.form__icon} src="" alt="Icon" />
                            <input className={styles.form__input} type="tel" placeholder="Введите страну" />
                        </div>
                    </div>



                    <div className={styles.form__field}>
                        <p className={styles.form__text}>
                            Город
                        </p>
                        <div className={styles.form__wrapper}>
                            <img className={styles.form__icon} src="" alt="Icon" />
                            <input className={styles.form__input} type="tel" placeholder="Введите город" />
                        </div>
                    </div>





                    <div className={styles.form__field}>
                        <p className={styles.form__text}>
                            Телефон
                        </p>
                        <div className={styles.form__wrapper}>
                            <img className={styles.form__icon} src="" alt="Icon" />
                            <input className={styles.form__input} type="tel" placeholder="Введите телефон" />
                        </div>
                    </div>





                    <div className={styles.form__field}>
                        <p className={styles.form__text}>
                            Почта
                        </p>
                        <div className={styles.form__wrapper}>
                            <img className={styles.form__icon} src="" alt="Icon" />
                            <input className={styles.form__input} type="tel" placeholder="Введите телефон" />
                        </div>
                    </div>




                    <div className={styles.form__field}>
                        <p className={styles.form__text}>
                            Пароль
                        </p>
                        <div className={styles.form__wrapper}>
                            <img className={styles.form__icon} src="" alt="Icon" />
                            <input className={styles.form__input} type="tel" placeholder="Введите пароль" />
                        </div>
                    </div>

                    <div className={styles.form__field}>
                        <p className={styles.form__text}>
                            Подтвержите пароль
                        </p>
                        <div className={styles.form__wrapper}>
                            <img className={styles.form__icon} src="" alt="Icon" />
                            <input className={styles.form__input} type="tel" placeholder="Подтвержите пароль" />
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

export default PersonalEditProfile;