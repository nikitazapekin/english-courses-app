import styles from "./Test.module.scss"
interface Props {
    item: {
            id: number;
            name: string,
            test_number: number;
            duration: string,
            description: string,
            topics: String[],
            course_id: number;
    }
    index: number,
    handler: (lessonId: string) => void
}
const Test = ({ item, index, handler }: Props) => {
    return (
        <div className={styles.card}
            onClick={() => handler(String(item.id))}
        >
            <h3 className={styles.card__title}>
                {index + 1}.
                {item.name}
            </h3>
            <h4 className={styles.card__subtitle}>
                {item.description}
            </h4>
        </div>);
}

export default Test;