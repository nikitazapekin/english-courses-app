import { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "../theme/wrappers.module.scss"
import TutorCreateCourseComponent from "../components/TutorPersonalPage/TurorCreateCourse/TutorCreateCourse";
const TutorCreateCourse = () => {
   
   
    useEffect(() => {
       
        window.scrollTo(0, 0);
   
    }, []);
  
 
  


return (<div className={styles.wrapper}>
    <Header />
    
    <div className={styles.content}>
     <TutorCreateCourseComponent />
       
    </div>
    <Footer />
</div>);
}
 
export default TutorCreateCourse;