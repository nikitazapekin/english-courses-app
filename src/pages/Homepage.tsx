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
import { useEffect } from "react";
import HelpBtn from "../components/HelpBtn/HelpBtn";
import NavigateBtn from "../components/NavigateBtn/NavigateBtn";
import AuthService from "../services/Auth";
const Homepage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleClick = async () => {
        try {
            const response = await AuthService.login("user@example.com", "password123");
            console.log('Ответ сервера:', response.data);
        } catch (error: any) {
            console.error('Ошибка при логине:', error);
            if (error.response) {
                console.error('Ответ ошибки:', error.response);
            } else if (error.request) {
                console.error('Запрос был отправлен, но не получен ответ:', error.request);
            } else {
                console.error('Ошибка при настройке запроса:', error.message);
            }
        }
    };
    
    
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>
                <WelcomeSection />
                <FreeEnglish />
                <Tutors />
                <Certificate />
                <CoursesHomepage />
                <CommonQuestions />
                <JoinTrial />
                <HomepageComments />
                <NavigateBtn />
                <HelpBtn />
                <button onClick={handleClick}>
ddd
                </button>
            </div>
            <Footer />
        </div>
    );
}
export default Homepage;