import styles from "./ModalResult.module.scss"
import MessageResult from "../../../assets/Testing/ResultMessage.png"
import Star from "../../../assets/Testing/Star.png"
import { formatTime } from "../../../helpers/formatTime"
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import Bird from "../../../assets/Bird1.png"
interface ModalResultProps {
    isDisplay: boolean,
    time: number,
    count: number,
    length: number
}


const TypingDialog = ({ text }: { text: string }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        const validText = text || ''; 

        let index = 0;
        const intervalId = setInterval(() => {
            setDisplayedText("Молодец!")
            
            index += 1;
            if (index === validText.length) {
                clearInterval(intervalId);
            }
        }, 100);

        return () => clearInterval(intervalId);
    }, [text]);

    return (
        <div className={styles.dialogContainer}>
            <div className={styles.dialogBubble}>
                <p className={styles.typingText}>{displayedText}</p>
            </div>
        </div>
    );
};


const ModalResult = ({ isDisplay, time, count, length }: ModalResultProps) => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(-1)
    }

    return (
        <div className={`${styles.modal} ${isDisplay ? "" : styles.modal__none}`}>
            <div className={styles.modal__inner}>
                <div className={styles.modal__content}>
                    <img src={Star} alt="Star" className={styles.star__top} />
                    <img src={Star} alt="Star" className={styles.star__top__medium} />
                    <img src={Star} alt="Star" className={styles.star__top__small} />
                    <h2 className={styles.modal__title}>
                        Результат
                    </h2>
                    <p className={styles.modal__result}>
                        {count} из {length} верно!
                    </p>
                    <p className={styles.modal__time}>
                        Время: {formatTime(time)}!
                    </p>



                    <button className={styles.modal__btn} onClick={handleNavigate}>
                        Продолжить
                    </button>
                    <p className={styles.modal__errors}>
                        Посмотреть ошибки
                    </p>
                    <TypingDialog text="Отличный результат!" />
                    <img src={Bird} alt="Result" className={styles.modal__image} />
                </div>

                <img src={Star} alt="Star" className={styles.star__bottom} />
                <img src={Star} alt="Star" className={styles.star__bottom__medium} />
                <img src={Star} alt="Star" className={styles.star__bottom__small} />
            </div>

            <div className={styles.modal__overlay} />
        </div>
    );
}

export default ModalResult;

 