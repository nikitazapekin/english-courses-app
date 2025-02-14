import AvatarComponent from "./AvatarComponent/AvatarComponent";
import PersonalHeader from "./PersonalHeader/PersonalHeader/PersonalHeader";
import styles from "./PersonalProfile.module.scss"
import PersonalDescribtion from "./PersonalDescribtion/PersonalDescribtion";
import PersonalCourses from "./PersonalCourses/PersonalCourses";
import PaymentModal from "../PaymentModal/PaymentModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const PersonalProfile = () => {

    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const handleOpenModal = () => {
        setIsOpenModal(prev => !prev)
    }
    const navigate = useNavigate()
    const handleClick = () => {
        localStorage.removeItem("isAuthorized")
        navigate("/sign-up")
    }
    return (
        <section className={styles.personal}>
            <PaymentModal isOpenModal={isOpenModal} handleOpenModal={handleOpenModal} />
            <div className={styles.personal__inner}>
                <PersonalHeader title={"Мой профиль"} />
                <div className={styles.personal__info}>
                    <div className={styles.personal__actions}>
                        <AvatarComponent />


                        <div className={styles.personal__preview}>
                            <div className={styles.personal__balance}>
                                <p className={styles.personal__balance__text}>
                                    Баланс:
                                </p>
                                <p className={styles.personal__balance__number}>
                                    200$
                                </p>
                            </div>
                            <button className={`${styles.personal__btn} ${styles.personal__btn__purple}`} onClick={handleOpenModal}>
                                Пополнить
                            </button>
                            <button className={`${styles.personal__btn} ${styles.personal__btn__red}`} onClick={handleClick}>
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