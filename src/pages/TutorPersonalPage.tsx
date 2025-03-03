import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import TutorComponent from "../components/Tutor/Tutor";
import styles from "../theme/wrappers.module.scss"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import TutorAdd from "../components/Tutor/TutorAdd/TutorAdd";
import HelpBtn from "../components/HelpBtn/HelpBtn";
import NavigateBtn from "../components/NavigateBtn/NavigateBtn";
import { useDispatch } from "react-redux";
import TutorService from "../services/Tutor";
import { setTutor } from "../store/slices/TutorSlice/TutorSlice";
import TutorPersonalPageComponent from "../components/TutorPersonalPage/TutorPersonalPage";
const TutorPersonalPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0)
        const handleGetUser = async () => {
            try {
                const response = await TutorService.GetTutor()
               dispatch(setTutor(response.data.user))
            
            } catch (err) {
              //  navigate("/sign-in")
            }
        };
        handleGetUser();  
    


    }, []);

    return (<div className={styles.wrapper}>
        <Header />
        <div className={styles.darken} />
        <div className={styles.content}>
          <TutorPersonalPageComponent />
        </div>
        <Footer />
    </div>);
}

export default TutorPersonalPage;