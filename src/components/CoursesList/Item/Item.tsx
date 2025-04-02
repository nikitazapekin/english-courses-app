import { Link, useNavigate } from "react-router-dom";
import styles from "./Item.module.scss"
import Ban from "../../../assets/admin/courses/warning.png"
import Edit from "../../../assets/admin/courses/pen.png"
import { useDispatch } from "react-redux";
import { setIsOpenAddWarningModal, setIsOpenBanModal, setSelectBanCourse, setSelectWarningCourse } from "../../../store/slices/AddWarningModal/AddWarningModal";
interface ItemProps {
    item: {

        id: number,
        author: string,
        title: string,
        description: string,
        course_for: String[],
        release_date: string,
        course_logo: string,
    }
    isAdmin: boolean
}
const Item = ({ item, isAdmin }: ItemProps) => {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
    };

    const handleAddWarning = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
        dispatch(setIsOpenAddWarningModal())
        dispatch(setSelectWarningCourse(item.id))
    }

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/card/${item.id}`)
    }

    const dispatch = useDispatch()



    const handleAddBan =(e: React.MouseEvent<HTMLDivElement, MouseEvent>)=> {
        e.stopPropagation()
        dispatch(setIsOpenBanModal())
        dispatch(setSelectWarningCourse(item.id))
    }

   
 
    return (

        <div className={styles.card} key={item.id} onClick={handleNavigate}>

            <div className={styles.card__image__wrapper}>
                <img className={styles.card__image} src={item.course_logo} alt={item.title} />
            </div>
            <div className={styles.card__wrapper}>
                <h3 className={styles.card__title}>{item.title}</h3>
                <h4 className={styles.card__description}>
                    {item.description}
                </h4>
                <p className={styles.card__rating}>Автор: {item.author}  </p>
                <p className={styles.card__releaseDate}>
                    Дата выпуска: {formatDate(item.release_date)}
                </p>
                <div className={styles.card__line} />
                <div className={styles.card__for}>
                    {item.course_for.map((it, index) => (
                        <div className={styles.card__item} key={index}>
                            {it}
                        </div>
                    ))}
                </div>

                {isAdmin && (

                    <div className={styles.card__btns}>
                        <div className={styles.card__btn} onClick={(e) => handleAddWarning(e)}>
                            <img src={Edit} alt="icon"
                                className={styles.card__btn__icon}
                            />
                        </div>
                        <div className={styles.card__btn}
                        onClick={(e) => handleAddBan(e)}
                        >
                            <img src={Ban} alt="icon"
                                className={styles.card__btn__icon}
                            />
                        </div>


                    </div>
                )}
            </div>

        </div>
    );
}

export default Item;