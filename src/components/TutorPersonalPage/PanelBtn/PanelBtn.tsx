import { useNavigate } from "react-router-dom"
import styles from "./PanelBtn.module.scss"
import { useDispatch } from "react-redux"
import { setTutorPage } from "../../../store/slices/TutorSlice/TutorSlice"
 
interface PanelBtnProps {
    item: {

        id: number,
        text: string,
        icon: string,
        link: string,
        page: string
    }
}
const PanelBtn = ({ item }: PanelBtnProps) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleNavigate = () => {
        navigate(`/tutor/personal${item.link}`)
        dispatch(setTutorPage({page: item.page}))
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