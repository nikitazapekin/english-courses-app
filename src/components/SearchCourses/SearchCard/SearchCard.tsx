
import { Link, useNavigate } from "react-router-dom";
import styles from "./SearchCard.module.scss"
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
    isAdmin?: boolean
}
const SearchCard = ({ item, isAdmin }: ItemProps) => {
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

export default SearchCard;
/* import { formatDate } from "../../../helpers/formatDate";
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


 */










/* 
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
 */
/*

@import "../../../theme/theme";

.courses {
    @include pc {
        margin: 0 auto;
    }

    width: 100%;

    &__inner {

        display: flex;
        flex-direction: column;

        @include pc {
            max-width: 100%;
            width: 100%;

        }
    }

    &__header {
        display: flex;
        justify-content: space-between;

        @include mobiles {
            flex-direction: column;
        }
    }

    &__title {
        margin-top: 35px;
        @include fontSize(24px);
        font-family: "Inter", sans-serif;

        @include mobiles {
            align-self: center;
            @include fontSize(32px);
            margin-bottom: 20px;
        }
    }

    &__text {
        margin-top: 35px;
        @include fontSize(24px);
        font-family: "Inter", sans-serif;
        font-weight: 400;
        text-align: center;
        align-self: center;
    }


    &__select {
        align-self: flex-end;
        font-family: "Inter", sans-serif;
        font-weight: 400;
        @include fontSize(24px);
        color: $black;
        border: none;
        outline: none;
    }


    &__cards {
        display: grid;



        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 30px;
        grid-row-gap: 16px;
        margin-top: 17px;

        @include pc {

            justify-items: center;
        }

        @include smPc {

            grid-template-columns: repeat(2, 1fr);
        }





        @include mobiles {
            grid-template-columns: repeat(1, 1fr);

        }


    }


}


.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    height: auto;
    height: 100%;
    max-width: 300px;
    width: 100%;
    cursor: pointer;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    &__title {
        font-size: 24px;
        color: $black;
        font-family: "Nunito", sans-serif;
        //   margin-bottom: 20px;
        text-align: center;

    }

    &__description {
        font-size: 20px;
        color: $black;
        font-family: "Nunito", sans-serif;
        //   margin-bottom: 20px;
        font-weight: 400;
        text-align: left;

    }

    @include pc {

        width: 100%;

    }



   
    &__preview {
        border-radius: 8px;
        min-height: 176px;
    }

    &__image {
        //  padding: 40px 0 14px 11px;
        //  margin: 0 auto;
        text-align: center;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        width: 100%;
        height: 300px;
    }

   
    &__wrapper {
        display: flex;
        flex-direction: column;
        padding: 5px;
    }

    &__price {
        font-weight: 700;
        @include fontSize(20px);
        color: $black;
        font-family: "Inter", sans-serif;
    }

    &__name {
        color: $white;
        position: absolute;
        right: 0;
        top: 0;
        font-weight: 700;
        @include fontSize(40px);
        color: $white;
        font-family: "Inter", sans-serif;
        padding: 11px 22px 0 0;
        transform: rotate(7deg);
    }

    &__rating,
    &__releaseDate {
        font-weight: 400;
        @include fontSize(16px);
        color: $black;
        font-family: "Nunito", sans-serif;
       
    }

    &__line {
        width: 100%;
        height: 0.75px;
        background-color: #000;
    }

    &__for {
        display: flex;
        column-gap: 5px;
        margin-top: 5px;
        flex-wrap: wrap;
    }

    &__item {
        font-size: 16px;
        color: $black;
        font-family: "Nunito", sans-serif;
        display: flex;

        white-space: nowrap;
    }
}

.card {
    &__image {

        height: 100%;
        width: 100%;
        object-fit: cover;

        &__wrapper {
            width: 100%;
            height: 250px;

        }
    }

    &__btns {
        display: flex;
        margin-top: 10px;
        column-gap: 10px;
    }
}


.card__image {
    margin: 0 auto;
}

 
*/