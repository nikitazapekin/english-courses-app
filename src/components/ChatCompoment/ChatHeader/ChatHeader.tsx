import styles from "./ChatHeader.module.scss"
import Search from "../../../assets/icons/search.png"
import Dots from "../../../assets/icons/dots.png"
interface ChatHeader {
    username: string
}
const ChatHeader = ({ username }: ChatHeader) => {
    return (
        <div className={styles.header}>
            <div className={styles.header__preview}>
                <p className={styles.header__title}>
                    {username}
                </p>
                <p className={styles.header__recently}>
                    Был в сети недавно
                </p>
            </div>

            <div className={styles.header__info}>
<img className={styles.header__icon} src={Search} alt="Search" />

<img className={styles.header__icon} src={Dots} alt="Dots" />
            </div>

        </div>);
}

export default ChatHeader;