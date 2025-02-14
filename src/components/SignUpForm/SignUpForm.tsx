
import { useNavigate } from "react-router-dom";
import Mail from "../../assets/icons/mail.png"
import User from "../../assets/icons/user.png"
import Lock from "../../assets/icons/lock.png"
import styles from "./SignUpForm.module.scss"
import Vk from "../../assets/networks/vk.png"
import Discord from "../../assets/networks/discord.png"
import Google from "../../assets/networks/google.png"
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema"
import { useForm } from "react-hook-form";
import { RegisterInterface } from "./types"
import { useSelector } from "react-redux";
import { getPasswordStrength } from "../../helpers/getPaswordStrenth";
import { formsSelector } from "../../store/selectors/Forms.selector";
import Placeholder from "../../assets/icons/location.png"
import { useEffect } from "react";
import AuthService from "../../services/Auth";

interface SignUpProps {
    toasts: { id: string; message: string }[],
    addToast: (message: string) => void
}
const SignUpForm = ({ toasts, addToast }: SignUpProps) => {
    const navigate = useNavigate();
    const countries = useSelector(formsSelector)
    const handleNavigate = () => {
        navigate("/sign-in")
    }

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        watch,
        formState: { errors },
    } = useForm<RegisterInterface>({
        resolver: yupResolver(schema),
        context: { countries },
    });
    const submitForm = (data: RegisterInterface) => {

        localStorage.setItem("isAuthorized", JSON.stringify({ isAuthorized: true }));
        navigate("/personal")
        reset();

    };

    useEffect(() => {
        if (Object.keys(errors).length != 0) {
            addToast("Пожалуйста, исправьте ошибки в форме.");
        }
        console.log(errors)
    }, [errors])



     const handleClick = async () => {
            try {
                const response = await AuthService.login("user@example.com", "password123");
                console.log('Ответ сервера:', response.data);
            } catch (error: any) {
                console.error('Ошибка при логине:', error);
                if (error.response) {
                    console.error('Ответ ошибки:', error.response);
                } else if (error.request) {
                    console.error('Запрос был отправлен, но не получен ответ:', error.request);
                } else {
                    console.error('Ошибка при настройке запроса:', error.message);
                }
            }
        };



        
    const passwordValue = watch("password", "");

    return (
        <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
            <div className={styles.form__inner}>
                <div className={styles.form__header}>
                    <div className={styles.form__btns}>
                        <p className={styles.form__btn} onClick={handleNavigate}>
                            Вход
                        </p>
                        <p className={styles.form__btn} >
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
                            {errors.name?.message}

                        </p>
                        <div className={styles.form__input__wrapper}>
                            <input
                                {...register("name")}
                                className={styles.form__input} type="text"
                                name="name"
                                placeholder="Введите имя"
                                required

                            />
                            <img className={styles.form__icon} src={User} />

                        </div>
                    </div>




                    <div className={styles.form__field}>
                        <p className={styles.form__error}>
                            {errors.email?.message}

                        </p>
                        <div className={styles.form__input__wrapper}>
                            <input
                                {...register("email")}
                                className={styles.form__input} type="email"
                                name="email"
                                placeholder="Введите почту"
                                required

                            />
                            <img className={styles.form__icon} src={Mail} />

                        </div>
                    </div>


                    <div className={styles.form__field}>
                        <p className={styles.form__error}>
                            {errors.password?.message}
                        </p>
                        <div className={styles.form__input__wrapper}>
                            <input
                                {...register("password")}
                                className={styles.form__input} type="password"
                                name="password"
                                placeholder="Введите пароль"
                                required

                            />
                            <img className={styles.form__icon} src={Lock} />

                        </div>
                    </div>

                    <div className={styles.form__field}>
                        <p className={styles.form__text}>
                            Пароль {getPasswordStrength(passwordValue).message}
                        </p>
                        <progress
                            className={`${styles.form__progress} ${getPasswordStrength(passwordValue).class}`}

                            max={100}
                            value={getPasswordStrength(passwordValue).value}
                        />
                    </div>
                    <div className={styles.form__field}>
                        <p className={styles.form__error}>
                            {errors.confirmPassword?.message}
                        </p>
                        <div
                            className={styles.form__input__wrapper}>
                            <input
                                {...register("confirmPassword")}
                                className={styles.form__input} type="password"

                                placeholder="Введите пароль еще раз"
                                required

                            />
                            <img className={styles.form__icon} src={Lock} />
                        </div>
                    </div>
                    <div className={styles.form__field}>
                        <p className={styles.form__error}>
                            {errors.country?.message}
                        </p>
                        <div
                            className={styles.form__input__wrapper}>
                            <input
                                className={styles.form__input}
                                {...register("country")}
                                type="text" id="country" list="countriesList" autoComplete="on" name="country" placeholder="Введите страну"
                                required />

                            <datalist id="countriesList">
                                {countries.map((country) => (
                                    <option key={country}>{country}</option>
                                ))}
                            </datalist>
                            <img className={styles.form__icon} src={Placeholder} />

                        </div>
                    </div>
                    <div className={styles.form__field}>
                        <p className={styles.form__error}>
                            {errors.agreeToTerms?.message}

                        </p>
                        <div
                            className={`${styles.form__input__wrapper} ${styles.form__confirm}`}>

                            <input
                                {...register("agreeToTerms")}
                                type="checkbox"
                                className={styles.form__checkbox}
                                id="agreeToTerms"
                                required
                            />
                            <p className={styles.form__text}>
                                Я согласен(а) с персональной обработкой данных
                            </p>
                        </div>



                    </div>


                </div>

                <hr className={styles.form__line} />

                <button className={styles.form__submit}
                    type="submit"
                    onClick={handleClick}
                >Зарегистрироваться</button>

                <div className={styles.form__or}>

                    <hr className={styles.form__line} />
                    <p className={styles.form__or__text}>Или</p>
                    <hr className={styles.form__line} />
                </div>
                <p className={styles.form__or__text}>
                    Регистрация через социальные сети
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

export default SignUpForm;
