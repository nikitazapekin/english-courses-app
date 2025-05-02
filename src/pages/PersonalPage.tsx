import styles from "../theme/wrappers.module.scss"
import "../theme/normalize.scss"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer";
import PersonalProfile from "../components/PersonalProfile/PersonalProfile";
import { useEffect, useState } from "react";
import HelpBtn from "../components/HelpBtn/HelpBtn";
import PersonalService from "../services/Personal";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPerson } from "../store/slices/PersonalSlice/PersonalSlice";
import WarningsUserModal from "../components/WarningUserModal/WarningsModal";
import WarningsUserService, { WarningUser } from "../services/WarningsUser";

const PersonalPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {

        window.scrollTo(0, 0)
        const handleGetUser = async () => {
            try {
                const response = await PersonalService.GetUser();
                dispatch(setPerson(response.data.user))
            } catch (err) {
                navigate("/sign-in")
                console.log("Something went wrong", err);
            }
        };
        handleGetUser();
    }, []);










    const [warnings, setWarnings] = useState<WarningUser[]>([])
    const handleGetWarnings = async () => {
        try {
            const resp = await WarningsUserService.GetUserWarnings()
            setWarnings(resp.data)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        handleGetWarnings()
    }, [])

    const [isOpenModal, setIsOpenModal] = useState(false)

    const handleOpen = () => {
        setIsOpenModal(prev => !prev)
    }
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>
                <PersonalProfile
                    handleOpen={handleOpen}
                />
                <HelpBtn />



                {isOpenModal && (

                    <WarningsUserModal
                        warnings={warnings}
                        handler={(handleOpen)}
                    />
                )}
            </div>
            <Footer />
        </div>
    );
}

export default PersonalPage;