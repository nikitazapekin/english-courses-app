import { formatDate } from "../../../helpers/formatDate";
import styles from "./SearchCard.module.scss"


interface Course {
    item: {

        id: number,
        author: string,
        title: string,
        description: string,
        course_for: String[],
        release_date: string,
        course_logo: string,
    }
}

const SearchCard = ({ item }: Course) => {
    return (
        <div className={styles.card}>
            <img
                className={styles.card__image}
                alt="logo"
                src={item.course_logo}
            />
            <h3 className={styles.card__title}>
                {item.title}
            </h3>
            <h4 className={styles.card__date}>
                {formatDate(item.release_date)}
            </h4>

        </div>);
}

export default SearchCard;