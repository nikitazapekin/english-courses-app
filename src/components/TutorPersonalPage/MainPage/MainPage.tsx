import { useSelector } from "react-redux";
import styles from "./MainPage.module.scss";
import { TutorSelector } from "../../../store/selectors/Tutor.selector";
import PersonalService from "../../../services/Personal";
import AuthService from "../../../services/Auth";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const tutor = useSelector(TutorSelector);
    const displayValue = (value: string | undefined | null, fieldName: string) => {
        if (!value || value.trim() === "") {
            return <span className={styles.emptyField}>{fieldName} не указано</span>;
        }
        return value;
    };
    const navigate = useNavigate()
    const hanldeLogout = async () => {
        try {
            const resp = await AuthService.logout()
            navigate("/sign-in")
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <div className={styles.main}>
            <h1 className={styles.main__title}>Ваш профиль</h1>
            <div className={styles.main__content}>
                <h2 className={styles.main__subtitle}>
                    Добро пожаловать {tutor.user.username || 'пользователь'}!
                </h2>

                <div className={styles.main__field}>
                    <h4 className={styles.main__field__title}>Телефон</h4>
                    <p className={styles.main__field__value}>
                        {displayValue(tutor.user.phone, "Телефон")}
                    </p>
                </div>

                <div className={styles.main__field}>
                    <h4 className={styles.main__field__title}>Описание</h4>
                    <p className={styles.main__field__value}>
                        {displayValue(tutor.user.description, "Описание")}
                    </p>
                </div>

                <div className={styles.main__field}>
                    <h4 className={styles.main__field__title}>Почта</h4>
                    <p className={styles.main__field__value}>
                        {displayValue(tutor.user.email, "Почта")}
                    </p>
                </div>

                <div className={styles.main__field}>
                    <h4 className={styles.main__field__title}>Полное описание</h4>
                    <p className={styles.main__field__value}>
                        {displayValue(tutor.user.full_description, "Полное описание")}
                    </p>
                </div>

                <div className={styles.main__field}>
                    <h4 className={styles.main__field__title}>Рейтинг</h4>
                    <div className={styles.star__stars}>
                        <div className={styles.star__star} />
                        <div className={styles.star__star} />
                        <div className={styles.star__star} />
                        <div className={styles.star__star} />
                        <div className={styles.star__starSliced} /> (111)
                    </div>
                </div>

                <div className={styles.main__field}>
                    <h4 className={styles.main__field__title}>Специализация</h4>
                    <p className={styles.main__field__value}>
                        {displayValue(tutor.user.specialization, "Специализация")}
                    </p>
                </div>

                <div className={styles.main__field}>
                    <h4 className={styles.main__field__title}>Уровень английского</h4>
                    <p className={styles.main__field__value}>
                        {displayValue(tutor.user.english_level, "Уровень английского")}
                    </p>
                </div>

                <div className={styles.main__field}>
                    <h4 className={styles.main__field__title}>Местоположение</h4>
                    <p className={styles.main__field__value}>
                        {displayValue(tutor.user.location, "Местоположение")}
                    </p>
                </div>
            </div>

            <button className={styles.btn}
                onClick={ hanldeLogout}
            >
                Выйти из аккаунта
            </button>
        </div>
    );
};

export default MainPage;

/* import { useSelector } from "react-redux";
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
                    <p className={styles.main__field__value}>  {tutor.user.full_description} </p>


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

export default MainPage; */