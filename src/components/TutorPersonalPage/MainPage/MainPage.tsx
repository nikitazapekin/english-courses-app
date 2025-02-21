import { useSelector } from "react-redux";
import styles from "./MainPage.module.scss"
import { TutorSelector } from "../../../store/selectors/Tutor.selector";
const MainPage = () => {
    const tutor = useSelector(TutorSelector)
    console.log(tutor.user)
    return (
        <div className={styles.main}>
            <h1 className={styles.main__title}>
                Ваш профиль
            </h1>
            <div className={styles.main__content}>
                <h2 className={styles.main__subtitle}>
                   Добро пожаловать {tutor.user.username}!
                </h2>

            {tutor.user.description}
            </div>

        </div>);
}

export default MainPage;