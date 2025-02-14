import { useEffect, useRef, useState } from "react";
import styles from "./TutorCarousel.module.scss";
import TutorCarouselCard from "./TutorCarouselCard";

interface SwiperProps {
    items: Array<{
        title: string;
        experience: string;
        img: string;
        rate?: number;
    }>;
    title: string;
}

const groupItems = (items: SwiperProps["items"], groupSize: number) => {
    const grouped = [];
    for (let i = 0; i < items.length; i += groupSize) {
        grouped.push(items.slice(i, i + groupSize));
    }
    return grouped;
};

const TutorCarousel = ({ title, items }: SwiperProps) => {
    const [groupSize, setGroupSize] = useState(3); // Начальное значение для десктопа

    const updateGroupSize = () => {
        if (window.innerWidth <= 1024) {
            setGroupSize(1); // Для экрана 1024px или меньше
        } else {
            setGroupSize(3); // Для больших экранов
        }
    };

    useEffect(() => {
        updateGroupSize(); // Установить начальный размер группы
        window.addEventListener("resize", updateGroupSize);
        return () => {
            window.removeEventListener("resize", updateGroupSize);
        };
    }, []);

    const groupedItems = groupItems(items, groupSize);

    const [currentBatch, setCurrentBatch] = useState<number>(0);
    const [currentPosition, setCurrentPosition] = useState<number>(0);
    const wrapper = useRef<HTMLDivElement>(null);

    const handleNext = () => {
        if (groupedItems.length - 1 !== currentBatch) {
            setCurrentPosition((prev) => prev + wrapper.current!.offsetWidth);
            setCurrentBatch((prev) => prev + 1);
        } else {
            setCurrentPosition(0);
            setCurrentBatch(0);
        }
    };

    const handlePrev = () => {
        if (currentBatch !== 0) {
            setCurrentPosition((prev) => prev - wrapper.current!.offsetWidth);
            setCurrentBatch((prev) => prev - 1);
        } else {
            setCurrentBatch(groupedItems.length - 1);
            setCurrentPosition(
                (prev) =>
                    prev +
                    wrapper.current!.offsetWidth * (groupedItems.length - 1)
            );
        }
    };

    const [wrapperHeight, setWrapperHeight] = useState<number>(0);

    useEffect(() => {
        if (wrapper.current) {
            const updateHeight = () =>
                setWrapperHeight(wrapper.current!.offsetHeight);

            updateHeight();

            const resizeObserver = new ResizeObserver(updateHeight);
            resizeObserver.observe(wrapper.current);

            return () => resizeObserver.disconnect();
        }
    }, []);

    return (
        <div className={styles.tutor}>
            <h2 className={styles.tutor__title}>{title}</h2>
            <div className={styles.tutor__slider}>
                <div className={styles.tutor__btn} onClick={handlePrev}>
                    {"<"}
                </div>
                <div
                    className={styles.tutor__wrapper}
                    style={{ height: `${wrapperHeight}px` }}
                >
                    <div
                        className={styles.tutor__carousel}
                        style={{
                            transform: `translateX(-${currentPosition}px)`,
                        }}
                    >
                        {groupedItems.map((item, index) => (
                            <div
                                className={styles.item}
                                key={index}
                                ref={wrapper}
                            >
                                {item.map((card, indexCard) => (
                                    <TutorCarouselCard
                                        card={card}
                                        key={indexCard}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.tutor__btn} onClick={handleNext}>
                    {">"}
                </div>
            </div>
        </div>
    );
};

export default TutorCarousel;


/*
import { useEffect, useRef, useState } from "react";
import styles from "./TutorCarousel.module.scss";
import TutorCarouselCard from "./TutorCarouselCard";

interface SwiperProps {
    items: Array<{
        title: string;
        experience: string;
        img: string;
        rate?: number
    }>;
    title: string;
}


const groupItems = (items: SwiperProps["items"], groupSize: number) => {
    const grouped = [];
    for (let i = 0; i < items.length; i += groupSize) {
        grouped.push(items.slice(i, i + groupSize));
    }
    return grouped;
};

const TutorCarousel = ({ title, items }: SwiperProps) => {
    const groupedItems = groupItems(items, 3);

    const [currentBatch, setCurrentBatch] = useState<number>(0);
    const [currentPosition, setCurrentPosition] = useState<number>(0)

    const wrapper = useRef<HTMLDivElement>(null)
    const handleNext = () => {
        if (groupItems.length - 1 != currentBatch) {

            setCurrentPosition(prev => prev + wrapper.current!.offsetWidth)
            setCurrentBatch(prev => prev + 1)
        } else {
            setCurrentPosition(0)
            setCurrentBatch(0)
        }
    }
    const handlePrev = () => {
        if (currentBatch != 0) {

            setCurrentPosition(prev => prev - wrapper.current!.offsetWidth)
            setCurrentBatch(prev => prev - 1)
        } else {
            setCurrentBatch(groupItems.length - 1)
            setCurrentPosition(prev => prev + wrapper.current!.offsetWidth * (groupItems.length - 1))
        }
    }
    const [wrapperHeight, setWrapperHeight] = useState<number>(0);
 
useEffect(() => {
    if (wrapper.current) {
        const updateHeight = () => setWrapperHeight(wrapper.current!.offsetHeight);

        updateHeight();

        const resizeObserver = new ResizeObserver(updateHeight);
        resizeObserver.observe(wrapper.current);

        return () => resizeObserver.disconnect();
    }
}, []);

 
   

    return (
        <div className={styles.tutor}>
            <h2 className={styles.tutor__title}>{title}</h2>
            <div className={styles.tutor__slider}>
                <div className={styles.tutor__btn}
                    onClick={handlePrev}
                >{"<"}</div>
                <div className={styles.tutor__wrapper} style={{ height: `${wrapperHeight}px` }}>

                    <div className={styles.tutor__carousel} style={{ transform: `translateX(-${currentPosition + "px"})` }}>
                        {
                            groupedItems.map((item, index) => (
                                <div className={styles.item} key={index}
                                    ref={wrapper}
                                >
                                    {item.map((card, indexCard) => (
                                     <TutorCarouselCard card={card}  key={indexCard} /> 
                                    ))}
                                </div>

                            ))
                        }
                    </div>
                </div>
                <div className={styles.tutor__btn}
                    onClick={handleNext}
                >{">"}</div>
            </div>
        </div>
    );
};

export default TutorCarousel;
 */