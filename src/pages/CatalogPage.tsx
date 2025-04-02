import { useSelector } from "react-redux";
import CategoriesComponent from "../components/CategoriesComponent/CategotiesComponent";
import WarningModal from "../components/CategoriesComponent/WarningModal/WarningModal";
import CoursesSlider from "../components/CoursesSlider/CouresSlider";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HelpBtn from "../components/HelpBtn/HelpBtn";
import styles from "../theme/wrappers.module.scss"
import { useEffect } from "react";
import { AddWarningSelectorPage } from "../store/selectors/AddWarningModal.selector";
import BanModal from "../components/CategoriesComponent/BanModal/BanModal";
const CatalogPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const isOpenWarningModal = useSelector(AddWarningSelectorPage)

    return (
        <>
            <div className={styles.wrapper}>

                <Header />
                {isOpenWarningModal.isOpenAddWarningModal && (

                    <WarningModal />
                )}

            
                {isOpenWarningModal.isOpenAddBanModal && (

                    <BanModal />
                )}
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