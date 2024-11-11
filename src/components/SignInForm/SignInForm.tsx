import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Mail from "../../assets/icons/mail.png";
import User from "../../assets/icons/user.png";
import Lock from "../../assets/icons/lock.png";
import styles from "./SignInForm.module.scss";

import { SignInData } from "./types";





import Vk from "../../assets/networks/vk.png"
import Discord from "../../assets/networks/discord.png"
import Google from "../../assets/networks/google.png"
import { signInSchema } from "./schema";

const SignInForm = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInData>({
        resolver: yupResolver(signInSchema),
    });

    const onSubmit = (data: SignInData) => {

        console.log(data);
        navigate("/dashboard");
    };

    const handleNavigate = () => {
        navigate("/sign-up");
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form__inner}>
                <div className={styles.form__header}>
                    <div className={styles.form__btns}>
                        <p className={styles.form__btn}>Вход</p>
                        <p className={styles.form__btn} onClick={handleNavigate}>Регистрация</p>
                    </div>
                    <hr className={styles.form__line} />
                </div>

                <h2 className={styles.form__title}>Вход через почту и пароль</h2>
                <div className={styles.form__fields}>
                    <div className={styles.form__field}>
                        <p className={styles.form__error}>{errors.email?.message}</p>
                        <div className={styles.form__input__wrapper}>
                            <input
                                {...register("email")}
                                className={styles.form__input}
                                type="email"
                                placeholder="Введите почту"
                                required
                            />
                            <img className={styles.form__icon} src={Mail} alt="Mail Icon" />
                        </div>
                    </div>

                    <div className={styles.form__field}>
                        <p className={styles.form__error}>{errors.password?.message}</p>
                        <div className={styles.form__input__wrapper}>
                            <input
                                {...register("password")}
                                className={styles.form__input}
                                type="password"
                                placeholder="Введите пароль"
                                required
                            />
                            <img className={styles.form__icon} src={Lock} alt="Lock Icon" />
                        </div>
                    </div>



                    {/*
          <div className={`${styles.form__input__wrapper} ${styles.form__input__checkbox}`}>
          <input className={styles.form__checkbox} type="checkbox" />
            <p className={styles.form__checkboxLabel}>Запомнить меня</p>
          </div>
          */}

                    <div className={styles.form__field}>

                        <div
                            className={`${styles.form__input__wrapper} ${styles.form__confirm}`}>

                            <input

                                type="checkbox"
                                className={styles.form__checkbox}
                                id="agreeToTerms"
                                required
                            />
                            <p className={styles.form__text}>
                                Запомнить меня
                            </p>
                        </div>



                    </div>









                </div>

                <button className={styles.form__submit} type="submit">Войти</button>

                <div className={styles.form__or}>
                    <hr className={styles.form__line} />
                    <p className={styles.form__or__text}>Или</p>
                    <hr className={styles.form__line} />
                </div>
                <p className={styles.form__or__text}>Войти через социальные сети</p>
                {/*
        <div className={styles.form__networks}>
        <img className={styles.form__network__image} src={Vk} alt="VK" />
        <img className={styles.form__network__image} src={Discord} alt="Discord" />
        <img className={styles.form__network__image} src={Google} alt="Google" />
        </div>
        */}

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
};

export default SignInForm;

/*
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
                                name="password"
                                placeholder="Введите пароль"
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

*/