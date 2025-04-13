import { useState } from "react";
import styles from "./TutorCarousel.module.scss"
interface CardProps {
 /*    card: {

  
            id: number,
            title: string,
            date: string,
            logo:string
       
    } */
            card: {
                id: number,
                title:  string,
                fulldescription: string,
                course_for: string[],
                course_suitable:string[],
                for_what_reasons: string[],
                about_course: string[],
                tag: string,
                course_rate:number,
                release_date:  string,
                course_logo: string,
            },




}
const TutorCarouselCard = ({ card }: CardProps) => {
 
    return (<div className={styles.card} >

        <img className={styles.card__image}
            src={card.course_logo}
            alt="Card"
        />
 
        <p className={styles.card__title}>
            {card.title}
        </p>
        <p className={styles.card__text}>
            {card.about_course}
        </p>
    </div>);
}

export default TutorCarouselCard;