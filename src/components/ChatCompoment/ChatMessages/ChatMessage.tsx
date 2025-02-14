import styles from "./ChatMessages.module.scss"
interface ChatProps {
    item: {
        id: number,
        message: string,
        username: string,
        time: string,
        isYourMessage: boolean,
        logo: string
    }
}
const ChatMessage = ({ item }: ChatProps) => {
    return (
        <div className={styles.message}>
{/*
            */}
            {
!item.isYourMessage && (

    <img className={styles.message__image} src={item.logo} alt="Logo" />
)
            }
            <div className={styles.message__content}>
                <div className={ item.isYourMessage ?  styles.message__wrapper :  styles.message__wrapper__not  }>

                    <p className={  styles.message__text}>
                        {item.message}
                    </p>
                </div>
                <p className={item.isYourMessage ? styles.message__time : styles.message__time__not}>
                    {item.time}
                </p>
            </div>
        </div>);
}

export default ChatMessage;