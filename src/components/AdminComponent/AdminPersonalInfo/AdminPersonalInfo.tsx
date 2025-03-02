import { useSelector } from "react-redux";
import styles from "./AdminPersonalInfo.module.scss"
import { useEffect, useState } from "react";
 interface AdminResponse {
    message: string,
    user: {
        id: number,
        admin_id: number,
        email:string,
        role: string,
    banned_courses: [],
        banned_users: [],
        edited_courses: []
    }
}
 
const AdminPersonalInfo = () => {
   
   // const [data, setData]= useState<AdminResponse>()

 
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


            </div>

        </div>);
}

export default AdminPersonalInfo;
/* const AdminPersonalInfo = () => {
    return ( 
    <div>
Indo
    </div> 
    );
}
 
export default AdminPersonalInfo; */