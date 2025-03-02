import AdminPamel from "./AdminPanel/AdminPanel";
import styles from "./AdminComponent.module.scss"
import AdminPersonalInfo from "./AdminPersonalInfo/AdminPersonalInfo";
import { useLocation } from "react-router-dom";
const AdminComponent = () => {
    const location = useLocation();
    const lastPathSegment = location.pathname.split("/").pop();
    console.log("segment", lastPathSegment);

    return (
        <div className={styles.admin}>
            <div className={styles.admin__container}>

                <AdminPamel
                    username={"test"}
                    email={"test"}
                />

                {lastPathSegment == "admin" && (
                    <AdminPersonalInfo />
                )
                }
            </div>
        </div>);
}

export default AdminComponent;