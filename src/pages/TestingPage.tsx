import Header from "../components/Header/Header";
import styles from "../theme/wrappers.module.scss"
import Footer from "../components/Footer/Footer";
import TestingComponent from "../components/Testing/TestingComponent/TestingComponent";
import ModalResult from "../components/Testing/ModalResult/ModalResult";
import { useEffect } from "react";
import HelpBtn from "../components/HelpBtn/HelpBtn";
import TestService from "../services/Test";
import { useLocation } from "react-router-dom";
const TestingPage = () => {




    const location = useLocation();
        const lastPathSegment = location.pathname.split("/")
    useEffect(() => {

        const handleGetTests = async () => {
            try {

                const response = TestService.GetQuestions(lastPathSegment[lastPathSegment.length-2])
            } catch {

            }

        }
handleGetTests()
        window.scrollTo(0, 0);

    }, []);

    return (<div className={styles.wrapper}>
        <Header />
        <div className={styles.darken} />
        <div className={styles.content}>


            <TestingComponent />
            <HelpBtn />
        </div>
        <Footer />
    </div>);
}

export default TestingPage;