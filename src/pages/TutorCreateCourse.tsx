import { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "../theme/wrappers.module.scss"
import TutorCreateCourseComponent from "../components/TutorPersonalPage/TurorCreateCourse/TutorCreateCourse";
import TutorModal from "../components/TutorPersonalPage/TutorModal/TutorModal";
import { useSelector } from "react-redux";
import { CreateCourseSelector, isOpenModalCreateLessonSelector } from "../store/selectors/CreateCourseSelector";
import PersonalService from "../services/Personal";
import { useDispatch } from "react-redux";
import { setPerson } from "../store/slices/PersonalSlice/PersonalSlice";
import { useNavigate } from "react-router-dom";
import TutorService from "../services/Tutor";
import { setTutor } from "../store/slices/TutorSlice/TutorSlice";
const TutorCreateCourse = () => {
 
 






    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0);
        const handleGetUser = async () => {
            try {
                const response = await TutorService.GetTutor()
       
            } catch (err) {
                navigate("/sign-in")
                console.log("Something went wrong", err);
            }
        };
        handleGetUser();

    }, []);



    const { isOpenModal } = useSelector(isOpenModalCreateLessonSelector)



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