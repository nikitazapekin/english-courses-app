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
import TutorPersonalPageComponent from "../components/TutorPersonalPage/TutorPersonalPage";
const TutorEditProfile = () => {



    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0);
        const handleGetUser = async () => {
            try {
                const response = await PersonalService.GetUser();
                dispatch(setPerson(response.data.user))
            } catch (err) {
                navigate("/sign-in")
                console.log("Something went wrong", err);
            }
        };
        handleGetUser();

    }, []);

    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>
                <div className={styles.content__inner}>

             <TutorPersonalPageComponent />
          {/*   <p>

 jjvs fav egea
             </p> */}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default TutorEditProfile;