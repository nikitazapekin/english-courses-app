import styles from "./TestingAnswer.module.scss"
interface TestingAnswerProps {
    item: {

        text: string,
        isTrue: boolean
    }
    index: number
}
const TestingAnswer = ({ item, index }: TestingAnswerProps) => {

    return (

        <div className={styles.card}>
            <p className={styles.card__index}>
                {index+1}
            </p>
            <p className={styles.card__text}>
                {item.text}
            </p>
        </div>
    );
}

export default TestingAnswer;