import React, { useEffect, useState } from "react";
import styles from "./TestingComponent.module.scss";
import { testingMaterial } from "../../../utils/testingMaterial";
import { useLocation, useParams } from "react-router-dom";
import TestingAnswer from "../TestingAnswer/TestingAnswer";
import ProgressBar from "../ProgressBar/ProgressBar";
import ModalResult from "../ModalResult/ModalResult";
import { formatTime } from "../../../helpers/formatTime";
import TestService from "../../../services/Test";

function generateArray(length: number): Array<{ index: number; isTrue: boolean | null }> {
    return Array.from({ length }, (_, i) => ({
        index: i,
        isTrue: null,
    }));
}

interface Cards {
    id: number;
    test_id: number;
    question: string;
    answers: String[];
    correct_answer: string;
    question_image: string;
}

interface UserAnswers {
    [key: number]: string;
}

const TestingComponent = () => {
    const [time, setTime] = useState(0);
    const { theme } = useParams<{ theme: string }>();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [resetSelection, setResetSelection] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false)
    const [cards, setCards] = useState<Cards[]>([]);
    const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
    const [showResultsTable, setShowResultsTable] = useState(false);
    
    const taskMaterial = theme && !isNaN(Number(theme))
        ? testingMaterial[Number(theme)]
        : null;

    const [results, setResults] = useState<Array<{ index: number; isTrue: boolean | null }>>(
        []
    );

    const [isDisplay, setIsDisplay] = useState(false);

    useEffect(() => {
        if (isDisplay) {
            return;
        }

        const timer = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [isDisplay]);

    const updateResults = (index: number, isTrue: boolean, answer: string) => {
        setResults((prevResults) =>
            prevResults.map((result) =>
                result.index === index ? { ...result, isTrue } : result
            )
        );
        setUserAnswers(prev => ({ ...prev, [index]: answer }));
    };

    const handleIncrementQuestion = () => {
        setCurrentQuestion((prev) => prev + 1);
        setResetSelection(true);
    };

    const handleDisplayResults = () => {
        setIsDisplay(true);
    };

    useEffect(() => {
        if (resetSelection) {
            setTimeout(() => setResetSelection(false), 200);
        }
    }, [resetSelection]);

    const location = useLocation();
    const lastPathSegment = location.pathname.split("/");

    useEffect(() => {
        const handleGetTests = async () => {
            try {
                const response = await TestService.GetQuestions(lastPathSegment[lastPathSegment.length - 2]);
                setCards(response.data.questions);
                setIsLoaded(true)
            } catch (error) {
                console.error("Ошибка при получении данных: ", error);
                setIsLoaded(true)
            }
        };
        handleGetTests();
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        setResults(generateArray(cards.length + 1))
    }, [cards])

    useEffect(() => {
        if (cards.length > 0 && currentQuestion == cards.length) {
            handleDisplayResults()
        }
    }, [currentQuestion])

    const toggleResultsTable = () => {
        setShowResultsTable(!showResultsTable);
    };

    return (
        <div className={styles.test}>
            <ModalResult
                isDisplay={isDisplay}
                time={time}
                count={results.reduce(
                    (count, result) => (result.isTrue === true ? count + 1 : count),
                    0
                )}
                length={results.length}
                onViewErrors={toggleResultsTable}
            />
            
            {showResultsTable && (
                <div className={styles.resultsTable}>
                    <h2>Результаты теста</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Вопрос</th>
                                <th>Ваш ответ</th>
                                <th>Правильный ответ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cards.map((card, index) => {
                                const isCorrect = results[index]?.isTrue;
                                return (
                                    <tr key={index}>
                                        <td>{card.question}</td>
                                        <td style={{ color: isCorrect ? 'green' : 'red' }}>
                                            {userAnswers[index] || 'Нет ответа'}
                                        </td>
                                        <td style={{ color: 'green' }}>{card.correct_answer}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <button onClick={toggleResultsTable}>Закрыть</button>
                </div>
            )}

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
                            {cards[currentQuestion]?.question || "Загрузка..."}
                        </h2>
                    </div>
                    <div className={styles.main__answers}>
                        {cards[currentQuestion]?.answers?.map((item, index) => (
                            <TestingAnswer
                                key={index}
                                item={{
                                    text: String(item),
                                    isTrue: cards[currentQuestion].correct_answer == String(item)
                                }}
                                handleIncrementQuestion={handleIncrementQuestion}
                                index={index}
                                onAnswerClick={(isTrue) => updateResults(currentQuestion, isTrue, String(item))}
                                isAnswered={results[currentQuestion]?.isTrue !== null}
                                resetSelection={resetSelection}
                                handleDisplayResults={handleDisplayResults}
                                length={results.length}
                                currentQuestionNumber={currentQuestion}
                                isLoaded={isLoaded}
                            />
                        ))}
                    </div>

                    <img
                        className={styles.main__image}
                        src={cards[currentQuestion]?.question_image || ""}
                        alt="Testing"
                    />

                    <ProgressBar length={cards.length} results={results} />
                </div>
            </div>
        </div>
    );
};

export default TestingComponent;

/* import React, { useEffect, useState } from "react";
import styles from "./TestingComponent.module.scss";
import { testingMaterial } from "../../../utils/testingMaterial";
import { useLocation, useParams } from "react-router-dom";
import TestingAnswer from "../TestingAnswer/TestingAnswer";
import ProgressBar from "../ProgressBar/ProgressBar";
import ModalResult from "../ModalResult/ModalResult";
import { formatTime } from "../../../helpers/formatTime";
import TestService from "../../../services/Test";





function generateArray(length: number): Array<{ index: number; isTrue: boolean | null }> {
    return Array.from({ length }, (_, i) => ({
        index: i,
        isTrue: null,
    }));
}

interface Cards {
    id: number;
    test_id: number;
    question: string;
    answers: String[];
    correct_answer: string;
    question_image: string;
}

const TestingComponent = () => {
    const [time, setTime] = useState(0);
    const { theme } = useParams<{ theme: string }>();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [resetSelection, setResetSelection] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false)
    const [cards, setCards] = useState<Cards[]>([]);
    const taskMaterial = theme && !isNaN(Number(theme))

        ? testingMaterial[Number(theme)]
        : null;

    const [results, setResults] = useState<Array<{ index: number; isTrue: boolean | null }>>(
        []
    );

    const [isDisplay, setIsDisplay] = useState(false);

    useEffect(() => {
        if (isDisplay) {
            return;
        }

        const timer = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [isDisplay]);

    const updateResults = (index: number, isTrue: boolean) => {
        setResults((prevResults) =>
            prevResults.map((result) =>
                result.index === index ? { ...result, isTrue } : result
            )
        );
    };

    const handleIncrementQuestion = () => {

        setCurrentQuestion((prev) => prev + 1);
        setResetSelection(true);
    };

    const handleDisplayResults = () => {
        setIsDisplay(true);
    };

    useEffect(() => {
        if (resetSelection) {
            setTimeout(() => setResetSelection(false), 200);
        }
    }, [resetSelection]);

    const location = useLocation();
    const lastPathSegment = location.pathname.split("/");

    useEffect(() => {
        const handleGetTests = async () => {
            try {
                const response = await TestService.GetQuestions(lastPathSegment[lastPathSegment.length - 2]);
                setCards(response.data.questions);
                setIsLoaded(true)
            } catch (error) {
                console.error("Ошибка при получении данных: ", error);
                setIsLoaded(true)
            }
        };
        handleGetTests();
        window.scrollTo(0, 0);
    }, [location.pathname]);


  
    useEffect(() => {
        setResults(generateArray(cards.length + 1))
    }, [cards])


  
    useEffect(() => {
        console.log("cur", currentQuestion, cards.length)
        if (cards.length > 0 && currentQuestion == cards.length) {
            handleDisplayResults()
        }
    }, [currentQuestion])
    return (
        <div className={styles.test}>
            <ModalResult
                isDisplay={isDisplay}
                time={time}
                count={results.reduce(
                    (count, result) => (result.isTrue === true ? count + 1 : count),
                    0
                )}
                length={results.length}
            />
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
                            {cards[currentQuestion]?.question || "Загрузка..."}
                        </h2>
                    </div>
                    <div className={styles.main__answers}>
                        {cards[currentQuestion]?.answers?.map((item, index) => (
                            <TestingAnswer
                                key={index}
                                item={{
                                    text: String(item),
                                    isTrue: cards[currentQuestion].correct_answer == String(item)
                                }
                                }
                                handleIncrementQuestion={handleIncrementQuestion}
                                index={index}
                                onAnswerClick={(isTrue) => updateResults(currentQuestion, isTrue)}
                                isAnswered={results[currentQuestion]?.isTrue !== null}
                                resetSelection={resetSelection}
                                handleDisplayResults={handleDisplayResults}
                                length={results.length}
                                currentQuestionNumber={currentQuestion}
                                isLoaded={isLoaded}
                            />
                        ))}
                    </div>


                    <img
                        className={styles.main__image}
                        src={cards[currentQuestion]?.question_image || ""}
                        alt="Testing"
                    />

                    <ProgressBar length={cards.length} results={results}

                    />
               
                </div>
            </div>
        </div>
    );
};

export default TestingComponent;
  */