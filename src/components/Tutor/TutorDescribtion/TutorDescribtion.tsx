import { useDispatch } from "react-redux";
import styles from "./TutorDescribtion.module.scss";
import { setOpenRate } from "../../../store/slices/RateSlice/RateSlice";

interface TutorProps {
    title: string;
    country: string;
    citate: string;
    rate: number;
    level: string,
    specialization: string,
    describtion: string
}

const TutorDescribtion = ({ title, country, citate, rate, level, specialization }: TutorProps) => {
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 === 0.5;

    const dispatch = useDispatch()
    const handleRate = () => {
        dispatch(setOpenRate(true))
    }
    return (
        <div className={styles.tutor}>
            <div className={styles.tutor__header}>
                <h1 className={styles.tutor__header__title}>{title}, {country} </h1>

                <p className={styles.tutor__header__rate}
                    onClick={handleRate}
                >
                    Оставить отзыв
                </p>
            </div>
            <p className={styles.tutor__citate}>"{citate}"</p>

            <div className={styles.tutor__rate}>
                <p className={styles.tutor__rate__text}>Рейтинг репетитора:</p>
                <div className={styles.tutor__stars}>
                    {Array.from({ length: fullStars }).map((_, index) => (
                        <div
                            key={`full-star-${index}`}
                            className={styles.tutor__star}
                        ></div>
                    ))}
                    {hasHalfStar && (
                        <div className={styles.tutor__starSliced}></div>
                    )}
                </div>
                <p className={styles.tutor__rate__text}>(223)</p>
            </div>
            <p className={styles.tutor__level}>
                Уровень: {level}
            </p>

            <p className={styles.tutor__level}>
                Специализация: {specialization}
            </p>
        </div>
    );
};

export default TutorDescribtion;
