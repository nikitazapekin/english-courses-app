import styles from "../theme/wrappers.module.scss"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CoursePreview from "../components/CoursePreview/CoursePreview";
import ForWhatSection from "../components/ForWhatSection/ForWhatSection";
import AboutCourse from "../components/AboutCourse/AboutCourse";
const CoursePage = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>

                <CoursePreview />
                <ForWhatSection />
                <AboutCourse />
            </div>

            <Footer />
        </div>
    );
}

export default CoursePage;