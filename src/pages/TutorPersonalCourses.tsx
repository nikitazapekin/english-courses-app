import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "../theme/wrappers.module.scss"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TutorService from "../services/Tutor";
import { setTutor } from "../store/slices/TutorSlice/TutorSlice";
import TutorPersonalCoursesComponent from "../components/TutorPersonalPage/TutorPersonalCourses/TutorPersonalCourses";
const TutorPersonalCourses = () => {
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
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.darken} />
            <div className={styles.content}>
                <TutorPersonalCoursesComponent />
            </div>
            <Footer />
        </div>
    );
}

export default TutorPersonalCourses;