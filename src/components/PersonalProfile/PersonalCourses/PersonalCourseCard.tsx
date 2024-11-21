import styles from "./PersonalCourseCard.module.scss"
interface PersonalCourseCardProps {
    title: string,
    author: string,
    date: string,
    image: string
}
const PersonalCourseCard = ({ title, author, date, image }: PersonalCourseCardProps) => {
    return (
        <div className={styles.card} >
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
                <button className={styles.card__btn}>
                    Программа
                </button>
            </div>

        </div>
    );
}

export default PersonalCourseCard;