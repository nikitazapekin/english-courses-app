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
                <div className={styles.main__field}>
                    <h4 className={styles.main__field__title}>
                        Телефон
                    </h4>
                    <p className={styles.main__field__value}> {tutor.user.description} </p>

                </div>


                <div className={styles.main__field}>
                    <h4 className={styles.main__field__title}>
                        Почта
                    </h4>

                    <p className={styles.main__field__value}>  {tutor.user.email} </p>

                </div>


                <div className={styles.main__field}>
                    <h4 className={styles.main__field__title}>
                        Полное описание
                    </h4>
                    <p className={styles.main__field__value}>  {tutor.user.fulldescription} </p>


                </div>



                <div className={styles.main__field}>
                    <h4 className={styles.main__field__title}>
                        Рейтинг
                    </h4>

                    <div className={styles.star__stars}>
                        <div className={styles.star__star} />
                        <div className={styles.star__star} />
                        <div className={styles.star__star} />
                        <div className={styles.star__star} />
                        <div className={styles.star__starSliced} />
                    </div>
                </div>
                <div className={styles.main__field}>
                    <h4 className={styles.main__field__title}>
                        Специализация
                    </h4>

                    <p className={styles.main__field__value}>  {tutor.user.specialization} </p>
                </div>

            </div>

        </div>);
}

export default MainPage;