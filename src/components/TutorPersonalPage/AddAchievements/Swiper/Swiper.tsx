import { useState, useLayoutEffect, useRef } from 'react';

import styles from './Swiper.module.scss';
import { title } from 'process';

const videos = Array.from({ length: 16 }).map((_, index) => ({
    id: index,
    /*  title: `Название коллекции ${index + 1}`,
     amount: 'XXX видео',
     video: 'ef', */
    title: "Test",
    date: "2022-12-12"


}));


interface Props {
    items: {
        id: number,
        image: string,
        date: string,
        title: string
    }[]
}

function Swiper({ items }: Props) {
    const [itemsPerGroup, setItemsPerGroup] = useState(4);
    const [currentIndex, setCurrentIndex] = useState(0);
    const swiperRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 480) {
                setItemsPerGroup(2);
            } else if (window.innerWidth <= 610) {
                setItemsPerGroup(1);
            } else if (window.innerWidth <= 800) {
                setItemsPerGroup(2);
            } else if (window.innerWidth <= 1024) {
                setItemsPerGroup(3);
            } else {
                setItemsPerGroup(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const groupedVideos = [];
    for (let i = 0; i < items.length; i += itemsPerGroup) {
        groupedVideos.push(items.slice(i, i + itemsPerGroup));
    }

    const handleSwipe = (direction: 'left' | 'right') => {
        if (direction === 'left' && currentIndex < groupedVideos.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else if (direction === 'right' && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const onTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        setStartX(clientX);
        setIsDragging(true);
    };

    const onTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
        if (!isDragging) return;
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const diff = startX - clientX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                handleSwipe('left');
            } else {
                handleSwipe('right');
            }
            setIsDragging(false);
        }
    };

    const onTouchEnd = () => {
        setIsDragging(false);
    };

    return (
        <div
            className={styles.swiperContainer}
            ref={swiperRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseDown={onTouchStart}
            onMouseMove={onTouchMove}
            onMouseUp={onTouchEnd}
            onMouseLeave={onTouchEnd}
        >
            <div
                className={styles.swiperWrapper}
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: isDragging ? 'none' : 'transform 0.3s ease',
                }}
            >
                {groupedVideos.map((group, index) => (
                    <div key={index} className={styles.group}>
                        <div className={styles.item}>
                            {group.map((video) => (
                                <div key={video.id} className={styles.videoContainer}>
                                    <div className={styles.card}>
                                        <img src={video.image}
                                            className={styles.card__image}
                                            alt="Logo"
                                        />

                                        <h3 className={styles.card__title}>
                                            {video.title}
                                        </h3>
                                        <h4 className={styles.card__date}>
                                            {video.date}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Swiper;

