
import Header from "../components/Header/Header"
import styles from "../theme/wrappers.module.scss"
import "../theme/normalize.scss"
import Footer from "../components/Footer/Footer";
import HelpForm from "../components/HelpForm/HelpForm";
const HelpPage = () => {
    return ( 
        <div className={styles.wrapper}>
        <Header />
        <div className={styles.content}>
          
         <HelpForm />
        </div>
       
        <Footer />
    </div>
     );
}
 
export default HelpPage;

 