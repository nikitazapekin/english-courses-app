import styles from "./Lesson.module.scss"
interface Props {
    item: {
        id: number,
        title: string,
        description: string,
        durability: string,
     /*    video: String[],
        materials: String[] */
        video: string[];  // Changed to string[]
        materials: string[];
    }
    index: number,
    handler: (lessonId: string) => void
}
const Lesson = ({ item, index, handler }: Props) => {
    return (
        <div className={styles.card}
            onClick={() => handler(String(item.id))}
        >
            <h3 className={styles.card__title}>
                {index + 1}.
                {item.title}
            </h3>
            <h4 className={styles.card__subtitle}>
                {item.description}
            </h4>
        </div>);
}

export default Lesson;