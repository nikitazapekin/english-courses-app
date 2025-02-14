import styles from "../theme/wrappers.module.scss"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LessonComponent from "../components/Lesson/LessonComponent/Lesson";
 import { useEffect } from "react";
import HelpBtn from "../components/HelpBtn/HelpBtn";
const LessonPage = () => {
    useEffect(() => {
       
        window.scrollTo(0, 0);
   
    }, []);
  
    return (<div className={styles.wrapper}>
        <div className={styles.darken} />
        <Header />

        <div className={styles.content}>
            <LessonComponent />
            <HelpBtn />

        </div>
        <Footer />
    </div>);
}

export default LessonPage;