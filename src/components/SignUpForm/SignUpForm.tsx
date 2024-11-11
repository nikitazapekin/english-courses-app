                    /*
import { useNavigate } from "react-router-dom";
import Mail from "../../assets/icons/mail.png";
import User from "../../assets/icons/user.png";
import Lock from "../../assets/icons/lock.png";
import styles from "./SignUpForm.module.scss";
import Vk from "../../assets/networks/vk.png";
import Discord from "../../assets/networks/discord.png";
import Google from "../../assets/networks/google.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useForm } from "react-hook-form";
import { RegisterInterface } from "./types";
import { useSelector } from "react-redux";
import { formsSelector } from "../../store/selectors/Forms.selector";

const SignUpForm = () => {
    const navigate = useNavigate();
    const countries = useSelector(formsSelector);
    const handleNavigate = () => {
        navigate("/sign-in");
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<RegisterInterface>({
        resolver: yupResolver(schema),
        context: { countries },
    });

    const submitForm = (data: RegisterInterface) => {
        navigate("/");
        reset();
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
            <div className={styles.form__inner}>
                <div className={styles.form__header}>
                    <div className={styles.form__btns}>
                        <p className={styles.form__btn} onClick={handleNavigate}>
                            Вход
                        </p>
                        <p className={styles.form__btn}>Регистрация</p>
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
                                className={styles.form__input}
                                type="text"
                                placeholder="Введите имя"
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
                                className={styles.form__input}
                                type="email"
                                placeholder="Введите почту"
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
                                className={styles.form__input}
                                type="password"
                                placeholder="Введите пароль"
                            />
                            <img className={styles.form__icon} src={Lock} />
                        </div>
                    </div>

                    <div className={styles.form__field}>
                        <p className={styles.form__error}>
                            {errors.confirmPassword?.message}
                        </p>
                        <div className={styles.form__input__wrapper}>
                            <input
                                {...register("confirmPassword")}
                                className={styles.form__input}
                                type="password"
                                placeholder="Введите пароль еще раз"
                            />
                            <img className={styles.form__icon} src={Lock} />
                        </div>
                    </div>

                    <div className={styles.form__field}>
                        <p className={styles.form__error}>
                            {errors.country?.message}
                        </p>
                        <div className={styles.form__input__wrapper}>
                            <input
                                {...register("country")}
                                className={styles.form__input}
                                type="text"
                                list="countriesList"
                                autoComplete="on"
                                placeholder="Введите страну"
                            />
                            <datalist id="countriesList">
                                {countries.map((country) => (
                                    <option key={country}>{country}</option>
                                ))}
                            </datalist>
                            <img className={styles.form__icon} src={Lock} />
                        </div>
                    </div>

                    <div className={styles.form__field}>
                        <p className={styles.form__error}>
                            {errors.agreeToTerms?.message}
                        </p>
                        <div className={`${styles.form__input__wrapper} ${styles.form__confirm}`}>
                            <input
                                {...register("agreeToTerms")}
                                type="checkbox"
                                className={styles.form__checkbox}
                            />
                            <p className={styles.form__text}>
                                I agree to the terms of service
                            </p>
                        </div>
                    </div>
                </div>

                <button className={styles.form__submit} type="submit">
                    Зарегистрироваться
                </button>
            </div>
        </form>
    );
};

export default SignUpForm;
*/
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
import { formsSelector } from "../../store/selectors/Forms.selector";
const SignUpForm = () => {
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

        navigate("/");
        reset();

    };
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
                        <p className={styles.form__error}>
                        {errors.confirmPassword?.message}

                        </p>
                        <div
                            className={styles.form__input__wrapper}>
                            <input
                                {...register("confirmPassword")}
                                className={styles.form__input} type="password"
                                name="password"
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
                            <img className={styles.form__icon} src={Lock} />

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
                                I agree to the terms of service
                            </p>
                        </div>



                    </div>


                </div>

                <hr className={styles.form__line} />

                <button className={styles.form__submit}
                    type="submit"
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
/*
 */