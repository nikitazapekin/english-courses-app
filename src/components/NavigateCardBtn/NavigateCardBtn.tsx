import { Link, useNavigate } from "react-router-dom";
import styles from "./NavigateCardBtn.module.scss"
import Icon from "../../assets/icons/arrow.png"
interface NavigateCardBtnProps {
    link: string;
}
const NavigateCardBtn = ({ link }: NavigateCardBtnProps) => {

 //   const navigate = useNavigate();
    const handleClick = () => {
    //    navigate(link);
    }
    return (
        <button className={styles.btn}
            onClick={handleClick}
        >
            <img src={Icon}  
            className={styles.btn__icon}
            alt="icon"
            />
        </button>
    );
}

export default NavigateCardBtn;