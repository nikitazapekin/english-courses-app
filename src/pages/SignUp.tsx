import Header from "../components/Header/Header";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import styles from "../theme/wrappers.module.scss"
import "../theme/normalize.scss"
const SignUp = () => {
    return (<>
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>

                <SignUpForm />
            </div>

        </div>
    </>);
}

export default SignUp;