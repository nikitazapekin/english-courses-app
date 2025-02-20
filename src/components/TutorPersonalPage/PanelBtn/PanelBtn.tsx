import { useNavigate } from "react-router-dom"
import styles from "./PanelBtn.module.scss"
import { link } from "fs"
interface PanelBtnProps {
    item: {

        id: number,
        text: string,
        icon: string,
        link: string
    }
}
const PanelBtn = ({ item }: PanelBtnProps) => {
    const navigate = useNavigate()
    const handleNavigate = () => {
navigate(`/tutor/personal${item.link}`)
    }
    return (
        <div className={styles.panel} onClick={handleNavigate}>
            <img className={styles.panel__icon}
                alt="Icon"
                src={item.icon}
            />
            <p className={styles.panel__text}>
                {item.text}
            </p>
        </div>);
}

export default PanelBtn;