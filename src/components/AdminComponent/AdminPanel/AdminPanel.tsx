import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/Auth";
import PanelBtns from "../PanelBtns/PanelBtns";
//import PanelBtns from "../PanelBtns/PanelBtns";
import styles from "./AdminPanel.module.scss"
import AvatarComponent from "../AvatarComponent/AvatarComponent";
interface TutorPanelProps {
    username: string,
    email: string
}
const AdminPamel = ({ username, email }: TutorPanelProps) => {
   
    return (
        <div className={styles.panel}>

          
            <AvatarComponent />
            <h2 className={styles.panel__title}>
              Admin
            </h2>
            <h3 className={styles.panel__email}>
                {email}
            </h3>
            
            <PanelBtns />

            {/*
            <div className={styles.panel__btn}
            onClick={handleLogout}
            >
                Выйти
            </div>
            */}

        </div>);
}

export default AdminPamel;