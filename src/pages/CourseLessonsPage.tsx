import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import LessonsList from "../components/Lessons/LessonsList/LessonsList";
import styles from "../theme/wrappers.module.scss"
import "../theme/global.scss"
 import { useEffect, useState } from "react";
import HelpBtn from "../components/HelpBtn/HelpBtn";
import { useSelector } from "react-redux";
import { AddWarningSelectorPage } from "../store/selectors/AddWarningModal.selector";
import BanBtn from "../components/AdminBtns/BanBtn/BanBtn";
import WarningBtn from "../components/AdminBtns/WarningBtn/WarningBtn";
import WarningModal from "../components/CategoriesComponent/WarningModal/WarningModal";
import BanModal from "../components/CategoriesComponent/BanModal/BanModal";
import { useLocation } from "react-router-dom";
import adminService from "../services/Admin";
import Ban from "../assets/admin/courses/warning.png"
import Edit from "../assets/admin/courses/pen.png"
const CourseLessonsPage = () => {
    useEffect(() => {
       
        window.scrollTo(0, 0);
   
    }, []);
    const [isUserAdmin, setIsAdmin] = useState(false)
    useEffect(() => {
        const handleGet = async () => {
            try {
                const resp = await adminService.isAdmin()
                setIsAdmin(resp.data.isAdmin)
            } catch (e) {
                console.log(e)
            }
        }

        handleGet()
    }, [])

    const isOpenWarningModal = useSelector(AddWarningSelectorPage)
  
    const location = useLocation();
    const lastPathSegment = location.pathname.split("/").pop();
    return (
<>
        <div className={styles.wrapper}>
        <div className={styles.darken} />
            <Header />

            <div className={styles.content}>
                <LessonsList />
                <HelpBtn />




                {isUserAdmin && <BanBtn logo={Ban} id={Number(lastPathSegment!)} />}
                {isUserAdmin && <WarningBtn logo={Edit} id={Number(lastPathSegment!)} />}
   

                {isOpenWarningModal.isOpenAddWarningModal && (

                    <WarningModal />
                )}
                {isOpenWarningModal.isOpenAddBanModal && (

                    <BanModal />
                )}
            </div>
            <Footer />
        </div>
</>
    );
}

export default CourseLessonsPage



