import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Mail from "../../assets/icons/mail.png";

import Lock from "../../assets/icons/lock.png";
import styles from "./SignInForm.module.scss";
import { SignInData } from "./types";
import Vk from "../../assets/networks/vk.png"
import Discord from "../../assets/networks/discord.png"
import Google from "../../assets/networks/google.png"
import { signInSchema } from "./schema";
import { useToast } from "../../hooks/useToast";
import Toast from "../Toast/Toast";
import { useEffect, useState } from "react";
import AuthService from "../../services/Auth";
interface SignInProps {
    toasts: { id: string; message: string }[],
    addToast: (message: string) => void
}
const SignInForm = ({ toasts, addToast }: SignInProps) => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("")
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInData>({
        resolver: yupResolver(signInSchema),
    });

    const onSubmit = (data: SignInData) => {
        localStorage.setItem("isAuthorized", JSON.stringify({ isAuthorized: true }));
        navigate("/personal/1/10")
    };
    const handleNavigate = () => {
        navigate("/sign-up");
    };
    useEffect(() => {
        if (Object.keys(errors).length != 0) {
            addToast("Пожалуйста, исправьте ошибки в форме.");
        }
    }, [errors])
    const handleClick = async (data: SignInData) => {
        if (Object.keys(errors).length == 0) {
            try {
                const response = await AuthService.login({ email: data.email, password: data.password });
                localStorage.setItem("accessToken", response.data.accessToken);
                if(response.data.role == "user") {

                    navigate("/personal/1/10");
                } else if(response.data.role == "tutor") {
                    navigate("/tutor/personal");
                } else {
                    navigate("/admin")
                }
            } catch (error: any) {
                console.error('Ошибка при регистрации:', error);
                if (error.response) {
                    console.log("err", JSON.stringify(error.response.data))
                    console.error('Ответ ошибки:', error.response);
               
                    setErrorMessage(error.response?.data?.message || "Произошла ошибка");
 
                } else if (error.request) {
                    console.error('Запрос был отправлен, но не получен ответ:', error.request);
                } else {
                    console.error('Ошибка при настройке запроса:', error.message);
                }
            }
        }
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

                    <div className={styles.form__field}>
                        <div
                            className={`${styles.form__input__wrapper} ${styles.form__confirm}`}>
                            <input
                                type="checkbox"
                                className={styles.form__checkbox}
                                id="agreeToTerms"

                            />
                            <p className={styles.form__text}>
                                Запомнить меня
                            </p>
                        </div>
                    </div>
                </div>
                <p>
                    {errorMessage}
                </p>
                <button className={styles.form__submit} type="submit"
                    onClick={handleSubmit(handleClick)}
                >Войти</button>
                <div className={styles.form__or}>
                    <hr className={styles.form__line} />
                    <p className={styles.form__or__text}>Или</p>
                    <hr className={styles.form__line} />
                </div>
                <p className={styles.form__or__text} >Войти через социальные сети</p>


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
