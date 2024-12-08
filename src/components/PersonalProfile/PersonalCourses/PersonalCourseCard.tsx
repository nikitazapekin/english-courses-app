import { useNavigate } from "react-router-dom";
import styles from "./PersonalCourseCard.module.scss"
interface PersonalCourseCardProps {
    title: string,
    author: string,
    date: string,
    image: string,
    describtion: string, 
    target: string,
    price: string
}
const PersonalCourseCard = ({ title, author, date, image , describtion, price, target}: PersonalCourseCardProps) => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/card/lessons/${title}`)
    }
    return (
        <div className={styles.card}   >
            <img src={image} alt="Card" className={styles.card__image} />

            <div className={styles.card__content}>
                <h3 className={styles.card__title}>
                    {title}
                </h3>
                <p className={styles.card__date}>
                    {date}
                </p>
                <p className={styles.card__author}>
                    {author}
                </p>
                <p className={styles.card__author}>
                   Цена: {price}
                </p>
                <p className={styles.card__author}>
                Курс подойдет для: {target}
                </p>
                <p className={styles.card__author}>
                  {describtion}
                </p>
                <button className={styles.card__btn} onClick={handleNavigate}>
                    Программа
                </button>
            </div>

        </div>
    );
}

export default PersonalCourseCard;