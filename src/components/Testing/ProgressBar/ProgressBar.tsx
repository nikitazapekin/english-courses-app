import styles from "./ProgressBar.module.scss";

interface ProgressBarProps {
    length: number;
    results: Array<{
        index: number;
        isTrue: boolean | null;
    }>;
}

const ProgressBar = ({ length, results }: ProgressBarProps) => {
    return (
        <div className={styles.progress}>
            {Array.from({ length }).map((_, index) => {
                const result = results[index];
                const statusClass =
                    result?.isTrue === null
                        ? styles.progress__gray
                        : result.isTrue
                        ? styles.progress__green
                        : styles.progress__red;

                return (
                    <div
                        key={index}
                        className={`${styles.progress__item} ${statusClass}`}
                    />
                );
            })}
        </div>
    );
};

export default ProgressBar;


/*
import styles from "./ProgressBar.module.scss";

interface ProgressBarProps {
    length: number;
    results: Array<{
        index: number;
        isTrue: boolean | null;
    }>;
}

const ProgressBar = ({ length, results }: ProgressBarProps) => {
    return (
        <div className={styles.progress}>
            {Array.from({ length }).map((_, index) => {
                const result = results[index];
                const statusClass = result.isTrue
                    ? styles.progress__green
                    : result.isTrue === false && result.index !== -1
                    ? styles.progress__red
                    : styles.progress__gray;

                return <div key={index} className={`${styles.progress__item} ${statusClass}`} />;
            })}
        </div>
    );
};

export default ProgressBar;

*/
/*

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

*/