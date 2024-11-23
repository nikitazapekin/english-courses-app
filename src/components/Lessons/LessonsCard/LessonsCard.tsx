import styles from "./LessonsCard.module.scss"
interface LessonsCardProps {
    item: {
        title: string,
        timestampt: string,
        id: number
    }
}
const LessonsCard = ({ item }: LessonsCardProps) => {
    return (<div className={styles.card}>
        <div className={styles.card__inner}>
            <div className={styles.card__header}>
                <p className={styles.card__lesson}>
                    Урок {item.id}
                </p>
                <p className={styles.card__title}>
                    {item.title}
                </p>
            </div>
            <p className={styles.card__timestampt}>
            Продолжительность    {item.timestampt}
            </p>
        </div>
    </div>);
}

export default LessonsCard;


