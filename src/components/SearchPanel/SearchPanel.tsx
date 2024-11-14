import styles from "./SearchPanel.module.scss"
import Icon from "../../assets/search.png"
const SearchPanel = () => {
    return (
        <div className={styles.search}>
            <input className={styles.search__input} placeholder="Найти..." />
            <div className={styles.search__btn}>
                <img src={Icon} className={styles.search__icon} />
            </div>
        </div>

    );
}

export default SearchPanel;