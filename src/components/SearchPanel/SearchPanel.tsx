import styles from "./SearchPanel.module.scss"
import Icon from "../../assets/search.png"
interface SearchPanelProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement> )=> void
}
const SearchPanel = ({handleChange}: SearchPanelProps) => {
    return (
        <div className={styles.search}>
            <input className={styles.search__input} placeholder="Найти..." onChange={handleChange} />
            <div className={styles.search__btn}>
                <img src={Icon} className={styles.search__icon} />
            </div>
        </div>

    );
}

export default SearchPanel;