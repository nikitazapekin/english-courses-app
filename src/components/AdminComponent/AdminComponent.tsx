import AdminPamel from "./AdminPanel/AdminPanel";
import styles from "./AdminComponent.module.scss"
import AdminPersonalInfo from "./AdminPersonalInfo/AdminPersonalInfo";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { AdminSelectorUser } from "../../store/selectors/AdminSelector";
import EditProfile from "./EditProfile/EditProfile";
import DeletedCourses from "./DeletedCourses/DeletedCourses";
import WarningCourses from "./WarningCourses/WarningCourses";
import DeletedUsers from "./DeletedUsers/DeletedUsers";
import EditUsers from "./EditUsers/EditUsers";
const AdminComponent = () => {
    const location = useLocation();
    const lastPathSegment = location.pathname.split("/").pop();
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
                    lastPathSegment == "edit" && (
                        <EditProfile />
                    )
                }

                {
                    lastPathSegment == "deleteCourses" && (
                        <DeletedCourses />
                    )
                }



                {
                    lastPathSegment == "warningsCourses" && (
                        <WarningCourses />
                    )
                }
                {
                    lastPathSegment == "editUsers" && (
                      <EditUsers />
                    )
                }
                {
                    lastPathSegment == "deleteUsers" && (
                        <DeletedUsers />
                    )
                }


                {!lastPathSegment && (
                    <AdminPersonalInfo />
                )

                }
            </div>
        </div>);
}

export default AdminComponent;