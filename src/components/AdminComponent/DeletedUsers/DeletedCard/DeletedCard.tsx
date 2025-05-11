import styles from "./DeletedCard.module.scss";

interface Cards {
    user_id: number,
    username: string,
    email: string,
    role: string,
    ban_id: number,
    ban_text: string,
    ban_date: string,
    is_active: boolean,
}

interface Props {
    item: Cards,
    handleOpen: (e: React.MouseEvent, item: Cards) => void;
}

const DeletedCard = ({ item, handleOpen }: Props) => {
    return (
        <div className={styles.card}>
            <div className={styles.card__content}>
                <div className={styles.card__preview}>
                    <div className={styles.card__titles}>
                        <span className={styles.title}>
                            {item.username}
                            {" "} ({item.email})
                        </span>
                    </div>
                    <p
                        className={styles.card__edit}
                        onClick={(e) => handleOpen(e, item)}
                    >
                        Редактировать
                    </p>
                </div>
                <div className={styles.body}>
                    <div className={styles.item}>
                        <p className={styles.card__bold}>
                            Роль:
                        </p>
                        <p className={styles.card__date}>
                            {item.role}
                        </p>
                    </div>

                    <div className={styles.item}>
                        <p className={styles.card__bold}>
                            Дата разблокировки:
                        </p>
                        <p className={styles.card__date}>
                            {item.ban_text}
                        </p>
                    </div>
                    <div className={styles.item}>
                        <p className={styles.card__bold}>
                            Сообщение блокировки:
                        </p>
                        <p className={styles.card__date}>
                            {item.ban_date}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeletedCard;
/* import styles from "./DeletedCard.module.scss";


interface Cards {
    user_id: number,
    username: string,
    email: string,
    role: string,
    ban_id: number,
    ban_text: string,
    ban_date: string,
    is_active: boolean,
}
interface Props {
    item: Cards,
    handleOpen: (item: Cards) => void;
}

const DeletedCard = ({ item, handleOpen }: Props) => {

    
    return (
        <div className={styles.card}>
            <div className={styles.card__content}>

                <div className={styles.card__preview}>
                    <div className={styles.card__titles}>

                        <span className={styles.title}>
                            {item.username}
                            {" "} ({item.email})
                        </span>


                    </div>
                    <p
                        className={styles.card__edit}
                        onClick={() => handleOpen(item)}
                    >
                        Редактировать
                    </p>
                </div>
                <div className={styles.body}>
                    <div className={styles.item}>
                        <p className={styles.card__bold}>
                            Роль:
                        </p>
                        <p className={styles.card__date}>
                            {item.role}
                        </p>
                    </div>

                    <div className={styles.item}>
                        <p className={styles.card__bold}>
                            Дата разблокировки:
                        </p>
                        <p className={styles.card__date}>
                            {item.ban_date}
                        </p>
                    </div>
                    <div className={styles.item}>
                        <p className={styles.card__bold}>
                            Сообщение блокировки:
                        </p>
                        <p className={styles.card__date}>
                            {item.ban_text}
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default DeletedCard;

 */