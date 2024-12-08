import Header from "../components/Header/Header";
import styles from "../theme/wrappers.module.scss"

import Footer from "../components/Footer/Footer";
import SignInForm from "../components/SignInForm/SignInForm";
import ToastManager from "../components/Toast/ToastManages";
import { useToast } from "../hooks/useToast";
import Toast from "../components/Toast/Toast";
import HelpBtn from "../components/HelpBtn/HelpBtn";
const SignInPage = () => {

   const { toasts, addToast } = useToast();
    return (<div className={styles.wrapper}>
        <Header />
        <div className={styles.content}>
            <SignInForm 
            addToast={addToast}
            toasts={toasts}
            />
 
       
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
        <HelpBtn />
        </div>
        <Footer />
    </div>
    );
}

export default SignInPage;