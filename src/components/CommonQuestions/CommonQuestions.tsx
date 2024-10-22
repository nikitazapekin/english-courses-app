import styles from "./CommonQuestions.module.scss"
import { questions } from "./consts";
const CommonQuestions = () => {
    return (
        <div className={styles.common}>
            <div className={styles.common__inner}>
                {questions.map((item, index) => (
                    <details key={index} className={styles.card}>
                        <summary className={styles.card__inner}>{item.title}</summary>
                        <p className={styles.card__text}>{item.about}</p>
                    </details>
                ))}
              

            </div>
        </div>);
}

export default CommonQuestions;