import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import LessonsList from "../components/Lessons/LessonsList/LessonsList";
import styles from "../theme/wrappers.module.scss"
import "../theme/global.scss"
 import { useEffect } from "react";
const CourseLessonsPage = () => {
    useEffect(() => {
       
        window.scrollTo(0, 0);
   
    }, []);
  
    return (
<>
        <div className={styles.wrapper}>
        <div className={styles.darken} />
            <Header />

            <div className={styles.content}>
                <LessonsList />
            </div>
            <Footer />
        </div>
</>
    );
}

export default CourseLessonsPage

