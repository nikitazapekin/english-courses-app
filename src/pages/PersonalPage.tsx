import styles from "../theme/wrappers.module.scss"
import "../theme/normalize.scss"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer";
import PersonalProfile from "../components/PersonalProfile/PersonalProfile";
import { useEffect } from "react";
import HelpBtn from "../components/HelpBtn/HelpBtn";
import PersonalService from "../services/Personal";
import { useNavigate } from "react-router-dom";
const PersonalPage = () => {
    const navigate = useNavigate()
    useEffect(() => {

        window.scrollTo(0, 0)
        const handleGetUser = async () => {
            try {
                const response = await PersonalService.GetUser();
                console.log(response)
            } catch (err) {
                navigate("/sign-in")
                console.log("Something went wrong", err);
            }
        };

        handleGetUser();


    }, []);

    return (

        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>
                <PersonalProfile />
                <HelpBtn />
            </div>
            <Footer />
        </div>
    );
}

export default PersonalPage;