import AdminPamel from "./AdminPanel/AdminPanel";
import styles from "./AdminComponent.module.scss"
import AdminPersonalInfo from "./AdminPersonalInfo/AdminPersonalInfo";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { AdminSelectorUser } from "../../store/selectors/AdminSelector";
import EditProfile from "./EditProfile/EditProfile";
const AdminComponent = () => {
    const location = useLocation();
    const lastPathSegment = location.pathname.split("/").pop();
    console.log("segment", lastPathSegment);


    const admin = useSelector(AdminSelectorUser)


    return (
        <div className={styles.admin}>
            <div className={styles.admin__container}>

                <AdminPamel
                    username={admin.email}
                    email={admin.email}
                />

                {lastPathSegment == "admin" && (
                    <AdminPersonalInfo />
                )
                }

                {
                    lastPathSegment=="edit" && (
                        <EditProfile />
                    )
                }
            </div>
        </div>);
}

export default AdminComponent;