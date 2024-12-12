import styles from "./ChatListCard.module.scss"
interface ChatListCardProps {
    item: {
        id: number,
        username: string,
        logo: string,
        message: string,
        isYourMessage: boolean,
        isRead: boolean,
        time: string

    }
}

const ChatListCard = ({ item }: ChatListCardProps) => {
    return (
        <div className={styles.card}>
            <img 
            className={styles.card__logo}
            src={item.logo} />
            <div className={styles.card__info}>

                <div className={styles.card__block}>
                    <h2 className={styles.card__title}>
                        {item.username}
                    </h2>
                    <p className={styles.card__message}>
                        {item.message}
                    </p>
                </div>
            </div>
                <div className={`${styles.card__info} ${styles.card__additional}`}>
                    <p className={styles.card__time}>
                        {item.time}
                    </p>
                    <p className={styles.card__read}>
                        {item.isRead}
                    </p>
                </div>
        </div>

    );
}

export default ChatListCard;