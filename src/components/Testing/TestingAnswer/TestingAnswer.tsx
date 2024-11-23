import React, { useState } from "react";
import styles from "./TestingAnswer.module.scss";

interface TestingAnswerProps {
    item: {
        text: string;
        isTrue: boolean;
    };
    index: number;
}

const TestingAnswer = ({ item, index }: TestingAnswerProps) => {
    const [isClicked, setIsClicked] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const handleClick = () => {
        if (!isClicked) {
            setIsClicked(true);
            setIsCorrect(item.isTrue);
        }
    };

    return (
        <div
            className={`${styles.card} ${
                isClicked
                    ? isCorrect
                        ? styles.correct
                        : styles.incorrect
                    : ""
            }`}
            onClick={handleClick}
        >
            <p className={styles.card__index}>{index + 1}</p>
            <p className={styles.card__text}>{item.text}</p>
        </div>
    );
};

export default TestingAnswer;

/*
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

        <div className={`${styles.card}`}>
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

*/