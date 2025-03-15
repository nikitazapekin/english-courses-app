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
        //  taskMaterial ? generateArray(taskMaterial.tasks.length) : []
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
        console.log("CURRENT", currentQuestion)
        console.log(cards[currentQuestion])
    }, [currentQuestion])
    useEffect(() => {
        setResults(generateArray(cards.length + 1))
    }, [cards])


    useEffect(() => {
        console.log("RES", results)
        //cards[currentQuestion]?.question ? "" : handleDisplayResults()
    }, [results])
    useEffect(() => {
        console.log("cur", currentQuestion , cards.length)
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
                    {/*
                    {cards[currentQuestion] ? (
                        <ProgressBar length={cards.length} results={results} />
                        ) : null}
                        */}
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
            id: number,
            test_id: number,
            question:string,
            answers:  String[],
            correct_answer: string,
            question_image:string,
           }

const TestingComponent = () => {
    const [time, setTime] = useState(0);
    const { theme } = useParams<{ theme: string }>();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [resetSelection, setResetSelection] = useState(false);
const [cards, setCards] = useState<Cards[]>()
    const taskMaterial = theme && !isNaN(Number(theme))
        ? testingMaterial[Number(theme)]
        : null;

    const [results, setResults] = useState<Array<{ index: number; isTrue: boolean | null }>>(
        taskMaterial ? generateArray(taskMaterial.tasks.length) : []
    );

    const [isDisplay, setIsDisplay] = useState(false)
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
        setCurrentQuestion((prev) => Math.min(prev + 1, taskMaterial!.tasks.length - 1));
        setResetSelection(true);

    };
    const handleDisplayResults = () => {
        setIsDisplay(true)
    }

    useEffect(() => {
        if (resetSelection) {
            setTimeout(() => setResetSelection(false), 200);
        }
    }, [resetSelection]);





    const location = useLocation();
        const lastPathSegment = location.pathname.split("/")
    useEffect(() => {

        const handleGetTests = async () => {
            try {

                const response = await TestService.GetQuestions(lastPathSegment[lastPathSegment.length-2])
                setCards(response.data.questions)
            } catch {

            }

        }
handleGetTests()
        window.scrollTo(0, 0);

    }, []);
    return (
        <div className={styles.test}>

            <ModalResult isDisplay={isDisplay}
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
                            {taskMaterial && taskMaterial.tasks[currentQuestion].sentance}
                        </h2>
                    </div>

                    <div className={styles.main__answers}>
                        {taskMaterial && taskMaterial.tasks[currentQuestion].answers.map((item, index) => (
                            <TestingAnswer
                                key={index}
                                item={item}
                                handleIncrementQuestion={handleIncrementQuestion}
                                index={index}
                                onAnswerClick={(isTrue) => updateResults(currentQuestion, isTrue)}
                                isAnswered={results[currentQuestion].isTrue !== null}
                                resetSelection={resetSelection}
                                handleDisplayResults={handleDisplayResults}
                                length={results.length}
                                currentQuestionNumber={currentQuestion}
                            />
                        ))}
                    </div>




                    <img
                        className={styles.main__image}
                        src={
                            taskMaterial && typeof taskMaterial !== "string" && taskMaterial.tasks?.[currentQuestion]?.image
                                ? taskMaterial.tasks[currentQuestion].image
                                : ""
                        }
                        alt="Testing"
                    />

                    {taskMaterial && typeof taskMaterial !== "string" && taskMaterial.tasks ? (
                        <ProgressBar length={taskMaterial.tasks.length} results={results} />
                    ) : null}

                </div>
            </div>
        </div>
    );
};

export default TestingComponent;

 */