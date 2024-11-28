import styles from "../theme/wrappers.module.scss"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import NotFoundComponent from "../components/NotFoundComponent/NotFoundComponent";
const NotFoundPage = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>

                <NotFoundComponent />
            </div>
            <Footer />
        </div>);
}

export default NotFoundPage;