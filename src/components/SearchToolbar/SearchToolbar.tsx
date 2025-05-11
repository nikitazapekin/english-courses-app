import { useDispatch } from "react-redux";
import styles from "./SearchToolbar.module.scss"
import { btns } from "./consts";
import { setType } from "../../store/slices/Catalog/Catalog";
const SearchToolbar = () => {
    const dispatch = useDispatch()
const handleSelect = (type: string) => {
    if(type=="Для студентов") {

        dispatch(setType({type: "Студентов"}))
    } 
    else if (type=="Для программистов") {
dispatch(setType({type: "IT-специалистов"}))
    }
    else {

        dispatch(setType({type: type}))
    }
}
    return (
        <div className={styles.search}>
            {btns.relevant.map((item, index) => (
                <p className={styles.search__text} key={index} onClick={()=> handleSelect(item)}>
                    {item}
                </p>
            ))}
            <p   className={styles.search__subtitle}>
            Категории
            </p>
            {btns.category.map((item, index) => (
                <p className={styles.search__text} key={index} onClick={()=> handleSelect(item)}>
                    {item}
                </p>
            ))}
        </div>
    );
}

export default SearchToolbar;