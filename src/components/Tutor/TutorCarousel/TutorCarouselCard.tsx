import { useState } from "react";
import styles from "./TutorCarousel.module.scss"
interface CardProps {
    card: {

        title: string;
        experience: string;
        img: string;
        rate?: number
    }
}
const TutorCarouselCard = ({ card }: CardProps) => {
    const [rate, setRate] = useState<number | undefined>(card.rate)
    const fullStars = card.rate ? Math.floor(card.rate) : null;
 
   const hasHalfStar = rate && Math.abs(rate % 1 - 0.5) < 0.001;

    return (<div className={styles.card} >

        <img className={styles.card__image}
            src={card.img}
            alt="Card"
        />

{ rate!=undefined && fullStars!=null && (

    
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
            )
}

        <p className={styles.card__title}>
            {card.title}
        </p>
        <p className={styles.card__text}>
            {card.experience}
        </p>
    </div>);
}

export default TutorCarouselCard;