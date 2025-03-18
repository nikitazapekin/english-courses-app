import Swiper from "./Swiper/Swiper"
import styles from "./AddAchievements.module.scss"
import Logo from "../../../assets/Tutor/course1.jpeg"
import { useDispatch } from "react-redux"
import { setOpenModalAchievements } from "../../../store/slices/AddAchievementSlice/AddAchievementSlice"
import Modal from "./Modal/Modal"
import { useSelector } from "react-redux"
import { AddAchievementSelectorPage } from "../../../store/selectors/AddAchievementSelector"
//import { AddAchievementSelectorPage } from "../../../store/selectors/addAchievement"
//import { AddAchievementSelectorPage } from "../../../store/selectors/AddAchievement"
const achievements = [
    {
        id: 1,
        image: Logo,
        date: "2022-12-12",
        title: "Test"
    },
    {
        id: 2,
        image: Logo,
        date: "2022-12-12",
        title: "Test"
    },
    {
        id: 1,
        image: Logo,
        date: "2022-12-12",
        title: "Test"
    },
    {
        id: 1,
        image: Logo,
        date: "2022-12-12",
        title: "Test"
    },
    {
        id: 1,
        image: Logo,
        date: "2022-12-12",
        title: "Test"
    },
]
const AddAchievements = () => {

    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(setOpenModalAchievements())
    }
    const addAchievementSlice = useSelector(AddAchievementSelectorPage)
    return (

        <div className={styles.edit}>
            {addAchievementSlice.isOpenModalAchievements && (

                <Modal />
            )}
            <h1 className={styles.edit__title}>Ваши достижения</h1>
            <div className={styles.edit__content}>


                <Swiper items={achievements}
                />

            </div>

            <button className={`${styles.edit__btn} ${styles.edit__pink}`} type="submit" onClick={handleSubmit}>
                Добавить достижение
            </button>
            <button className={styles.edit__btn} type="submit" onClick={handleSubmit}>
                Сохранить изменения
            </button>
        </div>
    );
}

export default AddAchievements;