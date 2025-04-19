import Header from "../components/Header/Header";
import styles from "../theme/wrappers.module.scss"
import Footer from "../components/Footer/Footer";
import TestingComponent from "../components/Testing/TestingComponent/TestingComponent";
import ModalResult from "../components/Testing/ModalResult/ModalResult";
import { useEffect, useState } from "react";
import HelpBtn from "../components/HelpBtn/HelpBtn";
import TestService from "../services/Test";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddWarningSelectorPage } from "../store/selectors/AddWarningModal.selector";
import adminService from "../services/Admin";
import BanBtn from "../components/AdminBtns/BanBtn/BanBtn";
import BanModal from "../components/CategoriesComponent/BanModal/BanModal";
import WarningBtn from "../components/AdminBtns/WarningBtn/WarningBtn";

import Ban from "../assets/admin/courses/warning.png"
import Edit from "../assets/admin/courses/pen.png"
import WarningModal from "../components/CategoriesComponent/WarningModal/WarningModal";


const TestingPage = () => {

    const [isUserAdmin, setIsAdmin] = useState(false)


    const dispatch = useDispatch()

    const location = useLocation();
    const lastPathSegment = location.pathname.split("/").pop();

    useEffect(() => {
        const handleGet = async () => {

            try {
                const resp = await adminService.isAdmin()
                console.log(resp.data.isAdmin)
                setIsAdmin(resp.data.isAdmin)
            } catch (e) {
                console.log(e)
            }
        }

        handleGet()
    }, [])

    const isOpenWarningModal = useSelector(AddWarningSelectorPage)
    return (<div className={styles.wrapper}>
        <Header />
        <div className={styles.darken} />
        <div className={styles.content}>
            <TestingComponent />
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
    </div>);
}

export default TestingPage;

