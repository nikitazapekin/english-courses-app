import styles from "../theme/wrappers.module.scss"
import "../theme/normalize.scss"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer";
import PersonalProfile from "../components/PersonalProfile/PersonalProfile";
import { useEffect } from "react";
const PersonalPage = () => {
    useEffect(() => {
       
        window.scrollTo(0, 0);
   
    }, []);
  
    return (

        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>
                <PersonalProfile />
            </div>
            <Footer />
        </div>
    );
}

export default PersonalPage;