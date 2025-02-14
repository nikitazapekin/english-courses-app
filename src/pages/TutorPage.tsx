import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import TutorComponent from "../components/Tutor/Tutor";
import styles from "../theme/wrappers.module.scss"
import { useNavigate } from "react-router-dom";
import { useEffect  } from "react";
import TutorAdd from "../components/Tutor/TutorAdd/TutorAdd";
import HelpBtn from "../components/HelpBtn/HelpBtn";
import NavigateBtn from "../components/NavigateBtn/NavigateBtn";
const TutorPage = () => {

   
        useEffect(() => {
       
            window.scrollTo(0, 0);
       
        }, []);
      
     
      


    return (<div className={styles.wrapper}>
        <Header />
        <div className={styles.darken} />
        <div className={styles.content}>
         
            <TutorComponent />
            <HelpBtn />
            <NavigateBtn />
        </div>
        <Footer />
    </div>);
}

export default TutorPage;