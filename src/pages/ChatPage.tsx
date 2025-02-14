import CategoriesComponent from "../components/CategoriesComponent/CategotiesComponent";
import ChatComponent from "../components/ChatCompoment/ChatComponent";
import CoursesSlider from "../components/CoursesSlider/CouresSlider";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HelpBtn from "../components/HelpBtn/HelpBtn";
import styles from "../theme/wrappers.module.scss"

const ChatPage = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>
                <ChatComponent />

            </div>
            <Footer />
        </div>
    );
}

export default ChatPage;