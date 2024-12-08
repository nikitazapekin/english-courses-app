import Header from "../components/Header/Header";
import styles from "../theme/wrappers.module.scss"
import Footer from "../components/Footer/Footer";
import TestingComponent from "../components/Testing/TestingComponent/TestingComponent";
import ModalResult from "../components/Testing/ModalResult/ModalResult";
import { useEffect } from "react";
import HelpBtn from "../components/HelpBtn/HelpBtn";
const TestingPage = () => {

    useEffect(() => {
       
        window.scrollTo(0, 0);
   
    }, []);
  
    return (<div className={styles.wrapper}>
        <Header />
        <div className={styles.darken} />
        <div className={styles.content}>
       

            <TestingComponent />
            <HelpBtn />
        </div>
        <Footer />
    </div>);
}

export default TestingPage;