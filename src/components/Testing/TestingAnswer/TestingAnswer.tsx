import React, { useState, useEffect } from "react";
import styles from "./TestingAnswer.module.scss";

interface TestingAnswerProps {
    item: {
        text: string;
        isTrue: boolean;
    };
    index: number;
    onAnswerClick: (isTrue: boolean) => void;
    handleIncrementQuestion: () => void;
    isAnswered: boolean; 
    resetSelection: boolean; 
}

const TestingAnswer = ({
    item,
    index,
    onAnswerClick,
    handleIncrementQuestion,
    isAnswered,
    resetSelection,
}: TestingAnswerProps) => {
    const [isClicked, setIsClicked] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    useEffect(() => {
        if (resetSelection) {
        
            setIsClicked(false);
            setIsCorrect(null);
        }
    }, [resetSelection]);

    const handleClick = () => {
        if (!isClicked && !isAnswered) {
            setIsClicked(true);
            setIsCorrect(item.isTrue);
            onAnswerClick(item.isTrue);
            handleIncrementQuestion();
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
 */