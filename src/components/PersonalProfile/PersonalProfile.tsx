import AvatarComponent from "./AvatarComponent/AvatarComponent";
import PersonalHeader from "./PersonalHeader/PersonalHeader/PersonalHeader";
import styles from "./PersonalProfile.module.scss"
import PersonalDescribtion from "./PersonalDescribtion/PersonalDescribtion";
import PersonalCourses from "./PersonalCourses/PersonalCourses";
import PaymentModal from "../PaymentModal/PaymentModal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/Auth";
import PersonalService from "../../services/Personal";
const PersonalProfile = () => {

    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const handleOpenModal = () => {
        setIsOpenModal(prev => !prev)
    }
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            const response = await AuthService.logout()
            navigate("/sign-in")
        } catch {

        }
    }

    useEffect(() => {
        const handleGet = async () => {
            try {
                const response = await PersonalService.GetPersonalCourses(1, 10)

                console.log(response.data)
            } catch {

            }
        }

        handleGet()
    }, [])
    return (
        <section className={styles.personal}>
            <PaymentModal isOpenModal={isOpenModal} handleOpenModal={handleOpenModal} />
            <div className={styles.personal__inner}>
                <PersonalHeader title={"Мой профиль"} />
                <div className={styles.personal__info}>
                    <div className={styles.personal__actions}>
                        <AvatarComponent />
                        <div className={styles.personal__preview}>

                            <button className={`${styles.personal__btn} ${styles.personal__btn__red}`} onClick={handleLogout}>
                                Выйти
                            </button>
                        </div>


                    </div>
                    <PersonalDescribtion />

                </div>
                <PersonalCourses />
            </div>
        </section>
    );
}

export default PersonalProfile; 