import CoursesSlider from "../components/CoursesSlider/CouresSlider";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "../theme/wrappers.module.scss"
const CatalogPage = () => {
    return (
        <>
            <div className={styles.wrapper}>

                <Header />
                <div className={styles.content}>
                    <CoursesSlider />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default CatalogPage;