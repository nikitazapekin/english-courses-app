
import React, { useEffect, useState } from "react";
import styles from "./TestingComponent.module.scss";
import { testingMaterial } from "../../../utils/testingMaterial";
import { useParams } from "react-router-dom";
import TestingAnswer from "../TestingAnswer/TestingAnswer";
const TestingComponent = () => {
    const [time, setTime] = useState(0);

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
    const { theme } = useParams()

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const handleIncrementQuestion = () => {
        setCurrentQuestion(prev => prev + 1)
    }
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
                        <p className={styles.test__question}>Вопрос 1</p>
                        <div className={styles.test__time}>
                            <p className={styles.test__time__text}>Время:</p>
                            <p className={styles.test__time__bold}>{formatTime(time)}</p>
                        </div>
                    </div>


                    <div className={styles.main}>
                        <h2 className={styles.main__question}>
                            {testingMaterial[Number(theme)].tasks[currentQuestion].sentance}
                        </h2>
                    </div>


                    <div className={styles.main__answers}>
                        {testingMaterial[Number(theme)].tasks[currentQuestion].answers.map((item, index) => (
                            <TestingAnswer key={index} item={item}  index={index} />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TestingComponent;

/*
import styles from "./TestingComponent.module.scss"
const TestingComponent = () => {
    return (<div className={styles.test}>
        <div className={styles.test__inner}>
            <div className={styles.test__title}>
                <p className={styles.test__number}>
                    Тест 1.
                </p>
                <h1 className={styles.test__name}>
                    Проверка знаний времен Present simple и present
                    continuous
                </h1>

            </div>

            <div className={styles.test__content}>
                <div className={styles.test__header}>
                    <p className={styles.header__question}>
                        Вопрос 1
                    </p>
                    <div className={styles.header__time}>
                        <p className={styles.header__time__bold}>
                        Время:
                        </p>
                        <p className={styles.header__time__bold}>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default TestingComponent;
*/

/*
import styles from "./Lesson.module.scss"
import { useParams } from "react-router-dom";
import { courseMaterials } from "../../../utils/courseMaterials";
import LessonHeader from "../LessonHeader/LessonHeader";
import DownloadFile from "../DownloadFile/DownloadFile";
import LessonPanel from "../LessonPanel/LessonPanel";
const LessonComponent = () => {

    const { theme } = useParams();


    return (<div className={styles.lesson}>
        <div className={styles.lesson__inner}>
            <div className={styles.lesson__title}>
                <p className={styles.lesson__number}>
                    Урок       {courseMaterials[Number(theme)].lesson}
                </p>
                <h1 className={styles.lesson__name}>
                    {courseMaterials[Number(theme)].title}
                </h1>

            </div>
            <p className={styles.lesson__subtitle}>
                {courseMaterials[Number(theme)].timestampt}
            </p>


            <div className={styles.lesson__content}>
                <LessonHeader />


                <iframe className={styles.lesson__video} src={courseMaterials[Number(theme)].video}
                    title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen />
                <DownloadFile title={courseMaterials[Number(theme)].material.text}
                    icon={courseMaterials[Number(theme)].material.icon}
                    size={courseMaterials[Number(theme)].material.size}
                    file={courseMaterials[Number(theme)].material.link}
                />
                <div className={styles.lesson__testing}>
                    Тематический тест по теме
                </div>

                <LessonPanel />
            </div>
        </div>
    </div>);
}

export default LessonComponent;
*/