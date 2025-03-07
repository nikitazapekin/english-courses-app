
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

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