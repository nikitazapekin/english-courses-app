import { useNavigate } from "react-router-dom";
import styles from "./PersonalHeader.module.scss"
import { WarningUser } from "../../../../services/WarningsUser";
const btns = [
    {
        text: "Профиль",
        link: "/personal/1/5"
    },
    {
        text: "Редактировать",
        link: "/personal/edit"
    }

]

interface HeaderProps {
    title: string,
    warnings: WarningUser[],
    handleOpen: () => void
}
const PersonalHeader = ({ title, warnings, handleOpen }: HeaderProps) => {
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

            {warnings.length > 0 && (
                <li
                    onClick={handleOpen}
                    className={styles.header__btn} key={9999}>
                    Предупреждения
                </li>


            )}
        </ul>
    </div>);
}

export default PersonalHeader;