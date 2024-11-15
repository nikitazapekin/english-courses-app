import styles from "../theme/wrappers.module.scss"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CoursePreview from "../components/CoursePreview/CoursePreview";
const CoursePage = () => {
    return (  
        <div className={styles.wrapper}>
        <Header />
        <div className={styles.content}>
          
        <CoursePreview />
        </div>
       
        <Footer />
    </div>
    );
}
 
export default CoursePage;