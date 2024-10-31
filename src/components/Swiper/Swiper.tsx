
 
import { useState, useRef, MouseEvent } from "react";
 
import styles from "./Swiper.module.scss";

interface SwiperProps {
    items: Array<{
        title: string,
    
    }>
}

const Swiper: React.FC<SwiperProps> = ({ items }: SwiperProps) => {
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
                        <p
                            className={styles.swiperItem__text}
                        >{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Swiper;
