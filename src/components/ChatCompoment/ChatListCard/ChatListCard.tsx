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

    },
    handleSelect: ()=> void
}

const ChatListCard = ({ item, handleSelect }: ChatListCardProps) => {
    return (
        <div className={styles.card} onClick={handleSelect}>
            <img 
            className={styles.card__logo}
            src={item.logo} />
            <div className={styles.card__content}>

            <div className={styles.card__info}>
            <h2 className={styles.card__title}>
                        {item.username}
                    </h2>
                    <p className={styles.card__time}>
                {item.time}
                    </p>
             {/*
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
                    */}
                    </div>
                    <p className={styles.card__message}>
                        {item.message}
                    </p>
            </div>
        </div>

    );
}

export default ChatListCard;