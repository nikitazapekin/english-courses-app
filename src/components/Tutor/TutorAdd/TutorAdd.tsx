import styles from "./TutorAdd.module.scss"
import Add from "../../../assets/Tutor/Add.png"
const TutorAdd = () => {
    return (<div className={styles.add}>

        <div className={styles.add__info}>

            <img src={Add}
                className={styles.add__image}
                alt="add"
            />
            <div className={styles.add__block}>

                <p className={styles.add__text}>
                    Получите
                </p>
                <p className={styles.add__text__black}>
                    скидку
                </p>

                <p className={styles.add__text}>
                    на уроки и персональный план
                </p>
            </div>
        </div>
        <div className={styles.add__content}>
            <div className={styles.add__fon}>

            <p className={styles.add__percent}>
                %
            </p>
            </div>
        </div>
    </div>);
}

export default TutorAdd;