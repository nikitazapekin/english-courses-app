import styles from "./SignInForm.module.scss"
import Mail from "../../assets/icons/mail.png"
import User from "../../assets/icons/user.png"
import Lock from "../../assets/icons/lock.png"
import Vk from "../../assets/networks/vk.png"
import Discord from "../../assets/networks/discord.png"
import Google from "../../assets/networks/google.png"
import { useNavigate } from "react-router-dom"
const SignInForm = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
navigate("/sign-up")
    }
    return (
        <form className={styles.form}>
            <div className={styles.form__inner}>
                <div className={styles.form__header}>
                    <div className={styles.form__btns}>

                        <p className={styles.form__btn}>
                            Вход
                        </p>
                        <p className={styles.form__btn} onClick={handleNavigate}>
                            Регистрация
                        </p>
                    </div>

                    <hr className={styles.form__line} />
                </div>

                <h2 className={styles.form__title}>
                    Регистрация через почту и пароль
                </h2>
                <div className={styles.form__fields}>
                    <div className={styles.form__field}>
                        <p className={styles.form__error}>
                            error

                        </p>
                        <div className={styles.form__input__wrapper}>
                            <input className={styles.form__input} type="text"
                                name="name"
                                     placeholder="Введите имя или email"
                                     required
                            />
                            <img className={styles.form__icon} src={User} />

                        </div>
                    </div>




                    <div className={styles.form__field}>
                        <p className={styles.form__error}>
                            error

                        </p>
                        <div className={styles.form__input__wrapper}>
                            <input className={styles.form__input} type="email"
                                name="email"
                                placeholder="Введите почту"
                                required
                            />
                            <img className={styles.form__icon} src={Mail} />

                        </div>
                    </div>


                 


                    <div className={`${styles.form__input__wrapper} ${styles.form__input__checkbox}`}>
                    <input className={styles.form__input__checkbox} type="checkbox"
                                name="remember"
                                     
                            />
                            <p className={styles.form__checkbox}>Запомнить меня</p>
                        </div>


                </div>

                <hr className={styles.form__line} />

                <button className={styles.form__submit}
                    type="submit"
                >Войти</button>

                <div className={styles.form__or}>

                    <hr className={styles.form__line} />
                    <p className={styles.form__or__text}>Или</p>
                    <hr className={styles.form__line} />
                </div>
                    <p className={styles.form__or__text}>
                  Войти через социальные сети
                    </p>

                    <div className={styles.form__networks}>
                        <div className={styles.form__network}>
                            <img className={styles.form__network__image} src={Discord} alt="discord" />
                        </div>
                        <div className={styles.form__network}>
                            <img className={styles.form__network__image} src={Google} alt="discord" />
                        </div>
                        <div className={styles.form__network}>
                            <img className={styles.form__network__image} src={Vk} alt="discord" />
                        </div>
                    </div>




            </div>
        </form>
    );
}

export default SignInForm;