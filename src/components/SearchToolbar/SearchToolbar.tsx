import styles from "./SearchToolbar.module.scss"
import { btns } from "./consts";
const SearchToolbar = () => {
    return (
        <div className={styles.search}>
            {btns.relevant.map((item, index) => (
                <p className={styles.search__text} key={index}>
                    {item}
                </p>
            ))}
            <p   className={styles.search__subtitle}>
            Категории
            </p>
            {btns.category.map((item, index) => (
                <p className={styles.search__text} key={index}>
                    {item}
                </p>
            ))}
        </div>
    );
}

export default SearchToolbar;