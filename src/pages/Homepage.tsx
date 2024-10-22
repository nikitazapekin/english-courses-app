import Header from "../components/Header/Header"
import styles from "../theme/wrappers.module.scss"
import "../theme/normalize.scss"
import Footer from "../components/Footer/Footer";
import FreeEnglish from "../components/FreeEnglish/FreeEnglish";
import WelcomeSection from "../components/WelcomeSection/WelcomeSection";
import Certificate from "../components/Certificate/Certificate";
const Homepage = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>


                <WelcomeSection />
                <FreeEnglish />
                <Certificate />
            </div>
            <Footer />
        </div>
    );
}

export default Homepage;