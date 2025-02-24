import styles from "./SearchPanel.module.scss"
import Icon from "../../assets/search.png"
import { useNavigate } from "react-router-dom"
interface SearchPanelProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement> )=> void,
    handleSearch: ()=> void
}
const SearchPanel = ({handleChange, handleSearch}: SearchPanelProps) => {
   
    return (
        <div className={styles.search}>
            <input className={styles.search__input} placeholder="Найти..." onChange={handleChange} />
            <div className={styles.search__btn}
            onClick={handleSearch}
            >
                <img src={Icon} className={styles.search__icon} />
            </div>
        </div>

    );
}

export default SearchPanel;