import CategoriesComponent from "../components/CategoriesComponent/CategotiesComponent";
import CoursesSlider from "../components/CoursesSlider/CouresSlider";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HelpBtn from "../components/HelpBtn/HelpBtn";
import NotFoundComponent from "../components/NotFoundComponent/NotFoundComponent";
import SearchCourses from "../components/SearchCourses/SearchCourses";
import styles from "../theme/wrappers.module.scss"
import { useEffect } from "react";
const FoundCoursesPage = () => {
    useEffect(() => {

        window.scrollTo(0, 0);

    }, []);

    return (
        <>
            <div className={styles.wrapper}>

                <Header />
                <div className={styles.content}>

 <SearchCourses 
 
 />
 
                </div>
                <Footer />
            </div>
        </>
    );
}

export default FoundCoursesPage;