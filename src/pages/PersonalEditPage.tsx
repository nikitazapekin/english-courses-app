import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import PersonalEditProfile from "../components/PersonalProfile/PersonalEditProfile/PersonalEditProfile";
import styles from "../theme/wrappers.module.scss"
import { useEffect } from "react";
const PerosnalEditPage = () => {
    useEffect(() => {
       
        window.scrollTo(0, 0);
   
    }, []);
  
    return (

        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>
                <PersonalEditProfile />
                
            </div>
            <Footer />
        </div>
    );
}

export default PerosnalEditPage;
 