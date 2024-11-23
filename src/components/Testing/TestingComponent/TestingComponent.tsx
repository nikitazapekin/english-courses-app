import React, { useEffect, useState } from "react";
import styles from "./TestingComponent.module.scss";
import { testingMaterial } from "../../../utils/testingMaterial";
import { useParams } from "react-router-dom";
import TestingAnswer from "../TestingAnswer/TestingAnswer";
import ProgressBar from "../ProgressBar/ProgressBar";

function generateArray(length: number): Array<{ index: number; isTrue: boolean | null }> {
    return Array.from({ length }, (_, i) => ({
        index: i,
        isTrue: null, // Изначально "неизвестно"
    }));
}

const TestingComponent = () => {
    const [time, setTime] = useState(0);
    const { theme } = useParams<{ theme: string }>();
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const taskMaterial = theme && !isNaN(Number(theme))
        ? testingMaterial[Number(theme)]
        : null;

    const [results, setResults] = useState<Array<{ index: number; isTrue: boolean | null }>>(
        taskMaterial ? generateArray(taskMaterial.tasks.length) : []
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
    };

    const updateResults = (index: number, isTrue: boolean) => {
        setResults((prevResults) =>
            prevResults.map((result) =>
                result.index === index ? { ...result, isTrue } : result
            )
        );
    };

    if (!theme || isNaN(Number(theme)) || !taskMaterial || !taskMaterial.tasks.length) {
        return <div>Тема не выбрана или заданий нет.</div>;
    }

    const handleIncrementQuestion = () => {
        setCurrentQuestion((prev) => Math.min(prev + 1, taskMaterial.tasks.length - 1));
    };

    return (
        <div className={styles.test}>
            <div className={styles.test__inner}>
                <div className={styles.test__title}>
                    <p className={styles.test__number}>Тест 1.</p>
                    <h1 className={styles.test__name}>
                        Проверка знаний времен Present Simple и Present Continuous
                    </h1>
                </div>

                <div className={styles.test__content}>
                    <div className={styles.test__header}>
                        <p className={styles.test__question}>Вопрос {currentQuestion + 1}</p>
                        <div className={styles.test__time}>
                            <p className={styles.test__time__text}>Время:</p>
                            <p className={styles.test__time__bold}>{formatTime(time)}</p>
                        </div>
                    </div>

                    <div className={styles.main}>
                        <h2 className={styles.main__question}>
                            {taskMaterial.tasks[currentQuestion].sentance}
                        </h2>
                    </div>

                    <div className={styles.main__answers}>
                        {taskMaterial.tasks[currentQuestion].answers.map((item, index) => (
                            <TestingAnswer
                                key={index}
                                item={item}
                                handleIncrementQuestion={handleIncrementQuestion}
                                index={index}
                                onAnswerClick={(isTrue) => updateResults(currentQuestion, isTrue)}
                            />
                        ))}
                    </div>

                    <img
                        className={styles.main__image}
                        src={taskMaterial.tasks[currentQuestion].image}
                        alt="Testing"
                    />
                    <ProgressBar length={taskMaterial.tasks.length} results={results} />
                </div>
            </div>
        </div>
    );
};

export default TestingComponent;


/*
import React, { useEffect, useState } from "react";
import styles from "./TestingComponent.module.scss";
import { testingMaterial } from "../../../utils/testingMaterial";
import { useParams } from "react-router-dom";
import TestingAnswer from "../TestingAnswer/TestingAnswer";
import ProgressBar from "../ProgressBar/ProgressBar";

function generateArray(length: number): Array<{ index: number; isTrue: boolean }> {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push({ index: i, isTrue: false });
    }
    return arr;
}

const TestingComponent = () => {
    const [time, setTime] = useState(0);
    const { theme } = useParams<{ theme: string }>();
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const taskMaterial = theme && !isNaN(Number(theme)) 
        ? testingMaterial[Number(theme)] 
        : null;

    const [results, setResults] = useState<Array<{ index: number; isTrue: boolean }>>(
        taskMaterial ? generateArray(taskMaterial.tasks.length) : []
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
    };

    if (!theme || isNaN(Number(theme)) || !taskMaterial || !taskMaterial.tasks.length) {
        return <div>Тема не выбрана или заданий нет.</div>;
    }

    const handleIncrementQuestion = () => {
        setCurrentQuestion((prev) => Math.min(prev + 1, taskMaterial.tasks.length - 1));
    };

    return (
        <div className={styles.test}>
            <div className={styles.test__inner}>
                <div className={styles.test__title}>
                    <p className={styles.test__number}>Тест 1.</p>
                    <h1 className={styles.test__name}>
                        Проверка знаний времен Present Simple и Present Continuous
                    </h1>
                </div>

                <div className={styles.test__content}>
                    <div className={styles.test__header}>
                        <p className={styles.test__question}>Вопрос {currentQuestion + 1}</p>
                        <div className={styles.test__time}>
                            <p className={styles.test__time__text}>Время:</p>
                            <p className={styles.test__time__bold}>{formatTime(time)}</p>
                        </div>
                    </div>

                    <div className={styles.main}>
                        <h2 className={styles.main__question}>
                            {taskMaterial.tasks[currentQuestion].sentance}
                        </h2>
                    </div>

                    <div className={styles.main__answers}>
                        {taskMaterial.tasks[currentQuestion].answers.map((item, index) => (
                            <TestingAnswer key={index} item={item} index={index} />
                        ))}
                    </div>

                    <img
                        className={styles.main__image}
                        src={taskMaterial.tasks[currentQuestion].image}
                        alt="Testing"
                    />
    <ProgressBar length={taskMaterial.tasks.length} results={results} />
                </div>
            </div>
        </div>
    );
};

export default TestingComponent;
 */