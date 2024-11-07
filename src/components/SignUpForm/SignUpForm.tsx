import styles from "./SignUpForm.module.scss"
const SignUpForm = () => {
    return (

        <form className={styles.form}>
            <div className={styles.form__inner}>
                <div className={styles.form__header}>
                    <p className={styles.form__header__btn}>
                        Вход
                    </p>
                    <p className={styles.form__header__btn}>
                       Регистрация
                    </p>


                </div>
            </div>
        </form>
    );
}

export default SignUpForm;