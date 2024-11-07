import Header from "../components/Header/Header"
import styles from "../theme/wrappers.module.scss"
import "../theme/normalize.scss"
import Footer from "../components/Footer/Footer";
import FreeEnglish from "../components/FreeEnglish/FreeEnglish";
import WelcomeSection from "../components/WelcomeSection/WelcomeSection";
import Certificate from "../components/Certificate/Certificate";
import CommonQuestions from "../components/CommonQuestions/CommonQuestions";
import JoinTrial from "../components/JoinTrial/JoinTrial";
import CoursesHomepage from "../components/CoursesHomepage/CoursesHomepage";
import HomepageComments from "../components/HomepageComments/HomepageComents";
import Tutors from "../components/Tutors/Tutors";
const Homepage = () => {
    return (

        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>
                <WelcomeSection />
                <FreeEnglish />
                <CoursesHomepage />
            {/*
                
                <Tutors />
                <Certificate />
                <CommonQuestions />
                <JoinTrial />
                <HomepageComments />
                */}
                {/*
                
                */}
            </div>
            {/*
            */}
            <Footer />
        </div>
    );
}

export default Homepage;