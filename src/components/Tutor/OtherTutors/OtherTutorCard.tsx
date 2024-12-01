import styles from "./OtherTutors.module.scss"
import Chat from "../../../assets/icons/chat.png"
interface OtherTutorCardProps {
    url: string,
    title: string,
    rate: number;
    rateNumber: number,
    describtion: string
}
const OtherTutorCard = ({ url, title, rate, rateNumber, describtion }: OtherTutorCardProps) => {
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 === 0.5;
    return (
        <div className={styles.card}>
            <div className={styles.card__preview}>
                <img src={url}
                    className={styles.card__image}
                    alt="Tutor"
                />
                <div className={styles.card__content}>
                    <h3 className={styles.card__title}>
                        {title}
                    </h3>
                    <div className={styles.card__rate}>
                        <p className={styles.card__rate__text}>
                            Рейтинг:
                        </p>
                        <div className={styles.tutor__stars}>

                            {Array.from({ length: fullStars }).map((_, index) => (
                                <div
                                    key={`full-star-${index}`}
                                    className={styles.card__star}
                                ></div>
                            ))}


                            {hasHalfStar && (
                                <div className={styles.card__starSliced}></div>
                            )}

                        </div>

                        <p className={styles.card__rate__text}>
                            ({rateNumber})
                        </p>

                    </div>

                    <p className={styles.card__citate}>
                        {describtion}
                    </p>
                </div>
            </div>
            <div className={styles.card__footer}>

                <button className={`${styles.card__btn} ${styles.card__btn__purple}`}>
                    Подробнее
                </button>

                <div className={styles.card__chat}>
                    <img
                        src={Chat}
                        className={styles.card__chat__icon} alt={"Chat"} />
                </div>
            </div>

        </div>);
}

export default OtherTutorCard;