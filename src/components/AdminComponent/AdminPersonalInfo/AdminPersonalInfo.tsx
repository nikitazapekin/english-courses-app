import { useSelector } from "react-redux";
import styles from "./AdminPersonalInfo.module.scss"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/Auth";
interface AdminResponse {
    message: string,
    user: {
        id: number,
        admin_id: number,
        email: string,
        role: string,
        banned_courses: [],
        banned_users: [],
        edited_courses: []
    }
}

const AdminPersonalInfo = () => {

    // const [data, setData]= useState<AdminResponse>()





    const navigate = useNavigate()
    const handleLogout = async () => {
        try {

            const response = await AuthService.logout()
            navigate("/sign-in")
        } catch {

        }
    }

    return (
        <div className={styles.main}>
            <h1 className={styles.main__title}>
                Ваш профиль
            </h1>
            <div className={styles.main__content}>
                <h2 className={styles.main__subtitle}>
                    Добро пожаловать  sac!
                </h2>
                <div className={styles.main__field}>
                    <h4 className={styles.main__field__title}>
                        Телефон
                    </h4>
                    <p className={styles.main__field__value}>  sac </p>

                </div>


                <div className={styles.main__field}>
                    <h4 className={styles.main__field__title}>
                        Почта
                    </h4>

                    <p className={styles.main__field__value}>  sca </p>

                </div>



                <div className={styles.panel__btn}
            onClick={handleLogout}
            >
                Выйти
            </div>

            </div>

        </div>);
}

export default AdminPersonalInfo;
 