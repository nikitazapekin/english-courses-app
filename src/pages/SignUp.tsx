import Header from "../components/Header/Header";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import styles from "../theme/wrappers.module.scss"
import "../theme/normalize.scss"
import Footer from "../components/Footer/Footer";
const SignUpPage = () => {
    return (<>
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>

                <SignUpForm />
            </div>
            <Footer />
        </div>
    </>);
}

export default SignUpPage;