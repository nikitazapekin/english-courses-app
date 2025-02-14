import CategoriesComponent from "../components/CategoriesComponent/CategotiesComponent";
import CoursesSlider from "../components/CoursesSlider/CouresSlider";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HelpBtn from "../components/HelpBtn/HelpBtn";
import styles from "../theme/wrappers.module.scss"
import { useEffect } from "react";
const CatalogPage = () => {
    useEffect(() => {

        window.scrollTo(0, 0);

    }, []);

    return (
        <>
            <div className={styles.wrapper}>

                <Header />
                <div className={styles.content}>




                    <CoursesSlider />
                    <CategoriesComponent />
                    <HelpBtn />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default CatalogPage;