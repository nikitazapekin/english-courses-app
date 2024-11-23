import { useNavigate } from "react-router-dom";
import styles from "./PersonalHeader.module.scss"
const btns = [
    {
        text: "История покупок",
        link: "/personal/history"
    },
    {
        text: "Редактировать",
        link: "/personal/edit"
    }

]

interface HeaderProps {
    title: string
}
const PersonalHeader = ({title}:HeaderProps) => {
    const navigate = useNavigate()
    const handleNavigate = (link: string) => {
        navigate(link)
    }
    return (<div className={styles.header}>
        <h1 className={styles.header__title}>
            {title}
        </h1>
        <ul className={styles.header__btns}>
            {btns.map((item, index) => (
                <li className={styles.header__btn} key={index}
                    onClick={() => handleNavigate(item.link)}
                >
                    {item.text}
                </li>
            ))}
        </ul>
    </div>);
}

export default PersonalHeader;