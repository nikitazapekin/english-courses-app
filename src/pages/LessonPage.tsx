import styles from "../theme/wrappers.module.scss"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LessonComponent from "../components/Lesson/LessonComponent/Lesson";
 import { useEffect } from "react";
import HelpBtn from "../components/HelpBtn/HelpBtn";
import PersonalService from "../services/Personal";
import { useNavigate } from "react-router-dom";
import { setPerson } from "../store/slices/PersonalSlice/PersonalSlice";
import { useDispatch } from "react-redux";
const LessonPage = () => {

const navigate = useNavigate()
const dispatch = useDispatch()
      useEffect(() => {
    
            window.scrollTo(0, 0)
            const handleGetUser = async () => {
                try {
                    const response = await PersonalService.GetUser();
                    dispatch(setPerson( response.data.user))
                } catch (err) {
                    navigate("/sign-in")
                    console.log("Something went wrong", err);
                }
            };
            handleGetUser();  
        
    
    
        }, []);
    
    return (<div className={styles.wrapper}>
        <div className={styles.darken} />
        <Header />

        <div className={styles.content}>
            <LessonComponent />
            <HelpBtn />

        </div>
        <Footer />
    </div>);
}

export default LessonPage;