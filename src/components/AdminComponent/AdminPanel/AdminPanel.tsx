import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/Auth";
import PanelBtns from "../PanelBtns/PanelBtns";
//import PanelBtns from "../PanelBtns/PanelBtns";
import styles from "./AdminPanel.module.scss"
interface TutorPanelProps {
    username: string,
    email: string
}
const AdminPamel = ({ username, email }: TutorPanelProps) => {
    
    const navigate = useNavigate()
    const handleLogout = async () => {
        try {

            const response = await AuthService.logout()
            navigate("/sign-in")
        } catch {

        }
    }
    return (
        <div className={styles.panel}>

            {/*
            <AvatarComponent
            />
            */}
            <h2 className={styles.panel__title}>
                {username}
            </h2>
            <h3 className={styles.panel__email}>
                {email}
            </h3>
            
            <PanelBtns />
            <div className={styles.panel__btn}
                onClick={handleLogout}
            >
                Выйти
            </div>

        </div>);
}

export default AdminPamel;