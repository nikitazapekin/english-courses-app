
import { useNavigate } from "react-router-dom"
import styles from "./PersonalCourseCard.module.scss"
interface PersonalCourseProps {
   /*  item: {

        id: number,
        author: string,
        title: string,
        description: string,
        course_for: String[],
        release_date: string,
        course_logo: string,
    } */

        item: {
            
        id: number,
        course_id: number,
    author: string,
    title: string,
    description: string,
    fulldescription: string,
    course_for: String[],
    course_suitable:String[],
    for_what_reasons: String[],
    about_course:String[],
    tag: string,
    course_rate: string,
    release_date:string,
    course_logo: string,
        }
}
const PersonalCourse = ({ item }: PersonalCourseProps) => {
    const navigate = useNavigate()
    const handleRedirect = () => {
navigate(`/card/lessons/${item.id}`)
    }
    return (
        <div className={styles.card}
        onClick={handleRedirect}
        >
            <img
                className={styles.card__image}
                src={item.course_logo}
                alt="logo"
            />

    
            <div className={styles.card__preview}>
                <h3 className={styles.card__title}>
                    {item.title}
                </h3>
                <p className={styles.card__describtion}>
                    {item.description}
                </p>
 

                    
                <div className={styles.card__for}>
                    {
                        item.course_for.map(item_for => (
                            <div className={styles.card__for__item}>
                                {item_for}
                            </div>
                        ))
                    }
                </div>
                
            </div>

        </div>);
}

export default PersonalCourse;


/* import { useNavigate } from "react-router-dom";
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

export default PersonalCourseCard; */