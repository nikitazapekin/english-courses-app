import styles from "../theme/wrappers.module.scss"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import NotFoundComponent from "../components/NotFoundComponent/NotFoundComponent";
import HelpBtn from "../components/HelpBtn/HelpBtn";
const NotFoundPage = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>

                <NotFoundComponent />
                <HelpBtn />
            </div>
            <Footer />
        </div>);
}

export default NotFoundPage;