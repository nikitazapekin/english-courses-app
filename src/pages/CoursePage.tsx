import styles from "../theme/wrappers.module.scss"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CoursePreview from "../components/CoursePreview/CoursePreview";
import ForWhatSection from "../components/ForWhatSection/ForWhatSection";
import AboutCourse from "../components/AboutCourse/AboutCourse";
import CourseCertificate from "../components/CourseCertificate/CourseCertificate";
import AboutAuthor from "../components/AboutAuthor/AboutAuthor";
import CourseFor from "../components/CourseFor/CourseFor";
import CourseConsultation from "../components/CourseConsultation/CourseConsultation";
import { useEffect } from "react";
import TutorAdd from "../components/Tutor/TutorAdd/TutorAdd";
import HelpBtn from "../components/HelpBtn/HelpBtn";
import NavigateBtn from "../components/NavigateBtn/NavigateBtn";
const CoursePage = () => {
    useEffect(() => {

        window.scrollTo(0, 0);

    }, []);

    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>
               
              

               
                <CoursePreview />

                <ForWhatSection />
                <AboutCourse />
                <CourseCertificate />
                <AboutAuthor />
                <CourseFor />
                <CourseConsultation />
                <HelpBtn />
                <NavigateBtn />
            </div>

            <Footer />
        </div>
    );
}

export default CoursePage;