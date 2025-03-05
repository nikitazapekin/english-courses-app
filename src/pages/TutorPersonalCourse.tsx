import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "../theme/wrappers.module.scss"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TutorService from "../services/Tutor";
import { setTutor } from "../store/slices/TutorSlice/TutorSlice";
import TutorPersonalCoursesComponent from "../components/TutorPersonalPage/TutorPersonalCourses/TutorPersonalCourses";
import TutorCourse from "../components/TutorPersonalPage/TutorCourse/TutorCourse";
import { useSelector } from "react-redux";
import { isOpenModalCreateLessonSelector } from "../store/selectors/CreateCourseSelector";
import TutorModal from "../components/TutorPersonalPage/TutorModal/TutorModal";
const TutorPersonalCourse = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0)
        const handleGetUser = async () => {
            try {
                const response = await TutorService.GetTutor()
               dispatch(setTutor(response.data.user))

            } catch (err) {
                navigate("/sign-in")
            }
        };
        handleGetUser();
    }, []);
    const { isOpenModal } = useSelector(isOpenModalCreateLessonSelector)
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.darken} />
            <div className={styles.content}>
           <TutorCourse />

           {isOpenModal && (

<TutorModal />
)}
            </div>
            <Footer />
        </div>
    );
}

export default TutorPersonalCourse;