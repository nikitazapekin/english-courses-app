import { useNavigate } from "react-router-dom"
import styles from "./LessonsCard.module.scss"
interface LessonsCardProps {
    item: {
        title: string,
        timestampt: string,
        id: number
    }
}
const LessonsCard = ({ item }: LessonsCardProps) => {
    const navigate = useNavigate()
    const handleNavigateLesson = (title: string, id: number) => {
        navigate(`/card/lessons/${title}/${id}`)
    }
    return (<div className={styles.card} onClick={() => handleNavigateLesson(item.title, item.id)}>
        <div className={styles.card__inner}>
            <div className={styles.card__header}>
                <p className={styles.card__lesson}>
                    Урок {item.id+1}
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


