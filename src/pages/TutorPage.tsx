import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import TutorComponent from "../components/Tutor/Tutor";
import styles from "../theme/wrappers.module.scss"
const TutorPage = () => {
    return (<div className={styles.wrapper}>
        <Header />
        <div className={styles.darken} />
        <div className={styles.content}>
            <TutorComponent />
        </div>
        <Footer />
    </div>);
}

export default TutorPage;