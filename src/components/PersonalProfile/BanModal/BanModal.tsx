// EditModal.tsx
import { useState } from "react";
import styles from "./BanModal.module.scss";
import PersonalService from "../../../services/Personal";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/Auth";



interface Ban {


    id: number,
    ban_text: string,
    ban_date: string,
    is_active: true


}
interface Props {
    ban: Ban
}

const BanModal = ({ ban }: Props) => {
    

    const navigate = useNavigate()
    const handleLogout = async () => {
        try {

            const response = await AuthService.logout()
            navigate("/sign-in")
        } catch {

        }
    }

    return (
        <div className={styles.modal}  >
            <div className={styles.modal__content}  >
                <h1 className={styles.modal__title}>
                    Ваш аккаунт заблокирован до {ban.ban_text}
                </h1>
                <div className={styles.reason}>
                    <p className={styles.reason__title}>

                        Причина бана:
                    </p>
                    <p className={styles.reason__text}>
                        {ban.ban_date}
                    </p>
                </div>

                <div className={styles.modal__btns}>
                    <div className={styles.modal__btn}>
                        Связаться с администрацией
                    </div>
                </div>
                <div className={styles.modal__btns}>
                    <div className={`${styles.modal__btn} ${styles.modal__delete}`}
                        onClick={handleLogout}
                    >
                        Выйти из аккаунта
                    </div>
                </div>
            </div>
            <div className={styles.modal__overlay} //onClick={handleClose}
            />
        </div>
    );
};

export default BanModal;
