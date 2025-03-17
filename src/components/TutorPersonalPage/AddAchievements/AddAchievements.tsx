import Swiper from "./Swiper/Swiper"
import styles from "./AddAchievements.module.scss"
import Logo from "../../../assets/Tutor/course1.jpeg"

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

    const handleSubmit = () => {

    }

    return (

        <div className={styles.edit}>
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