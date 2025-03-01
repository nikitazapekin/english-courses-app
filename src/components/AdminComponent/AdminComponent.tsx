import AdminPamel from "./AdminPanel/AdminPanel";
import styles from "./AdminComponent.module.scss"
const AdminComponent = () => {
    return (
        <div className={styles.admin}>
            <div className={styles.admin__container}>

            <AdminPamel 
            username={"test"}
            email={"test"}
            />
            </div>
        </div>);
}

export default AdminComponent;