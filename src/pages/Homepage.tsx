import Header from "../components/Header/Header"
import styles from "../theme/wrappers.module.scss"
import "../theme/normalize.scss"
import Footer from "../components/Footer/Footer";
const Homepage = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>
                sqf
            </div>
            <Footer />
        </div>
    );
}

export default Homepage;