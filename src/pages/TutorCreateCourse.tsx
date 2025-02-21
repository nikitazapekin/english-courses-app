import { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "../theme/wrappers.module.scss"
import TutorCreateCourseComponent from "../components/TutorPersonalPage/TurorCreateCourse/TutorCreateCourse";
import TutorModal from "../components/TutorPersonalPage/TutorModal/TutorModal";
import { useSelector } from "react-redux";
import { CreateCourseSelector, isOpenModalCreateLessonSelector } from "../store/selectors/CreateCourseSelector";
const TutorCreateCourse = () => {


    useEffect(() => {

        window.scrollTo(0, 0);

    }, []);

    const {isOpenModal} = useSelector(isOpenModalCreateLessonSelector)



    return (<div className={styles.wrapper}>
        <Header />
        <div className={styles.content}>
            <TutorCreateCourseComponent />

        </div>
        {isOpenModal && (

        <TutorModal />
        )}
        <Footer />
    </div>);
}

export default TutorCreateCourse;