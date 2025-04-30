import styles from "./RatesCard.module.scss"


interface Props {

    id: number,
    tutor_id: number,
    author_id: number,
    rate: string,
    text: string,
    created_at: string,
    author_username: string,
    author_email: string,
    author_description: string,
    author_avatar_path: string,
    author_avatar: string



}

interface CardProps {
    item: Props
}
const RatesCard = ({ item }: CardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.card__content}>
                <div className={styles.logo}>
                    <img src={item.author_avatar}
                        alt="logo"
                        className={styles.card__image}
                    />
                </div>

                <div className={styles.card__preview}>
                    <h3 className={styles.card__title}>
                        {item.author_username}, {item.author_email}
                    </h3>
                </div>
            </div>
        </div>);
}

export default RatesCard;