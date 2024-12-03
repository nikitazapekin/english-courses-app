import Header from "../components/Header/Header";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import styles from "../theme/wrappers.module.scss"
import "../theme/normalize.scss"
import Footer from "../components/Footer/Footer";
import { useToast } from "../hooks/useToast";
import Toast from "../components/Toast/Toast";
const SignUpPage = () => {
    const { toasts, addToast } = useToast();
    return (<>
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>

                <SignUpForm toasts={toasts} addToast={addToast} />
                <div className={styles.toastContainer}>

                    {toasts.map((toast) => (
                        <Toast
                            key={toast.id}
                            duration={5}
                            message={toast.message}
                            onClose={() => console.log('Toast closed')}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    </>);
}

export default SignUpPage;