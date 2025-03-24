import Header from "../components/Header/Header";
import styles from "../theme/wrappers.module.scss"
import Footer from "../components/Footer/Footer";
 
import TutorPersonalPageComponent from "../components/TutorPersonalPage/TutorPersonalPage";
import { useSelector } from "react-redux";
import { AddAchievementSelectorPage } from "../store/selectors/AddAchievementSelector";
import AchievementModal from "../components/TutorPersonalPage/AddAchievements/AchievementModal/AchievementModal";
const TutorAchievementsPage = () => {


const achivementsSelector = useSelector(AddAchievementSelectorPage)
    return (<div className={styles.wrapper}>
        <Header />
        <div className={styles.darken} />
        <div className={styles.content}>
            <TutorPersonalPageComponent />


{achivementsSelector.isOpenSelectedAchievement && (

    <AchievementModal />
)}
        
        </div>
        <Footer />
    </div>);
}

export default TutorAchievementsPage;