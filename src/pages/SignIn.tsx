import Header from "../components/Header/Header";
import styles from "../theme/wrappers.module.scss"

import Footer from "../components/Footer/Footer";
import SignInForm from "../components/SignInForm/SignInForm";
const SignInPage = () => {
    return (<div className={styles.wrapper}>
        <Header />
        <div className={styles.content}>
        <SignInForm />
        </div>
        <Footer />
    </div>
    );
}

export default SignInPage;