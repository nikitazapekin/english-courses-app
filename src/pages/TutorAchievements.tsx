import Header from "../components/Header/Header";
import styles from "../theme/wrappers.module.scss"
import Footer from "../components/Footer/Footer";
import TestingComponent from "../components/Testing/TestingComponent/TestingComponent";
import ModalResult from "../components/Testing/ModalResult/ModalResult";
import { useEffect } from "react";
import HelpBtn from "../components/HelpBtn/HelpBtn";
import TestService from "../services/Test";
import { useLocation } from "react-router-dom";
import TutorComponent from "../components/Tutor/Tutor";
import TutorPersonalPageComponent from "../components/TutorPersonalPage/TutorPersonalPage";
const TutorAchievementsPage = () => {



    return (<div className={styles.wrapper}>
        <Header />
        <div className={styles.darken} />
        <div className={styles.content}>
            <TutorPersonalPageComponent />
        </div>
        <Footer />
    </div>);
}

export default TutorAchievementsPage;