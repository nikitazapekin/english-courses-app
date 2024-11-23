import styles from "./ProgressBar.module.scss"
interface ProgressBarProps {
    length: number,
    results: Array<{
        index: number,
        isTrue: boolean
    }>
}
const ProgressBar = ({ length, results }: ProgressBarProps) => {
    return (

        <div className={styles.progress}>
          
            {Array.from({ length }).map((_, index) => (
                <div className={`${styles.progress__item} ${ results[index].isTrue ?  styles.progress__green : styles.progress__red }`} />

              
            ))}
        </div>
    );
}

export default ProgressBar;