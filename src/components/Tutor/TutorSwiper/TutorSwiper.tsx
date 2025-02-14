 
import { useState, useRef, MouseEvent } from "react";

import styles from "./TutorSwiper.module.scss";

interface SwiperProps {
    items: Array<{
        title: string;
        experience: string;
     
        img: string;
    }>;
    title: string
}

const TurorSwiper: React.FC<SwiperProps> = ({ items, title }: SwiperProps) => {
    const [startX, setStartX] = useState<number>(0);
    const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
    const [scrollLeft, setScrollLeft] = useState<number>(0);

    const swiperRef = useRef<HTMLDivElement | null>(null);

    function handleOnMouseDown(event: MouseEvent<HTMLDivElement>): void {
        setStartX(event.clientX);
        setIsMouseDown(true);
    }

    function handleOnMouseMove(event: MouseEvent<HTMLDivElement>): void {
        if (!isMouseDown || !swiperRef.current) return;
        event.preventDefault();
        const deltaX = (event.clientX - startX) * 0.115;
        swiperRef.current.scrollLeft = scrollLeft - deltaX;
    }

    function handleOnMouseUp(): void {
        setIsMouseDown(false);
    }

    function handleOnScroll(): void {
        if (swiperRef.current) {
            setScrollLeft(swiperRef.current.scrollLeft);
        }
    }
    return (
        <>
        <p className={styles.title}>
{title}
        </p>
        <div className={styles.wrapper}>

            <div
                onMouseDown={handleOnMouseDown}
                onMouseMove={handleOnMouseMove}
                onMouseUp={handleOnMouseUp}
                onScroll={handleOnScroll}
                ref={swiperRef}
                className={styles.swiperRootContainer}
            >


                <div className={styles.swiperItemsContainer}>
                    {items.map((item, index) => (
                        <div key={index} className={styles.swiperItem}>
                          
                            <img src={item.img}
                                className={styles.swiperItem__img}
                                alt="Tutor" />
                            <h3 className={styles.swiperItem__title}>
                            {item.title}
                            </h3>
                            <h4 className={styles.swiperItem__experience}>
                                {item.experience}
                            </h4>
                             
                        </div>
                    ))}
                </div>
            </div>

       
        </div>
        </>
    );
};

export default TurorSwiper;
 