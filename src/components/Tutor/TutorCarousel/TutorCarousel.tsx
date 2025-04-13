import { useEffect, useRef, useState, useMemo } from "react";
import styles from "./TutorCarousel.module.scss";
import TutorCarouselCard from "./TutorCarouselCard";

interface SwiperProps {
  items: {
    id: number;
    title: string;
    date: string;
    logo: string;
  }[];
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
  // Состояния для управления каруселью
  const [groupSize, setGroupSize] = useState(3);
  const [currentBatch, setCurrentBatch] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [wrapperHeight, setWrapperHeight] = useState<number | 'auto'>('auto');
  
  // Рефы для DOM-элементов
  const wrapperRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Определяем размер группы в зависимости от ширины экрана
  const updateGroupSize = () => {
    setGroupSize(window.innerWidth <= 1024 ? 1 : 3);
  };

  // Группируем элементы с мемоизацией
  const groupedItems = useMemo(() => groupItems(items, groupSize), [items, groupSize]);

  // Эффект для настройки обработчика ресайза
  useEffect(() => {
    updateGroupSize();
    window.addEventListener("resize", updateGroupSize);
    return () => window.removeEventListener("resize", updateGroupSize);
  }, []);

  // Эффект для измерения высоты контейнера
  useEffect(() => {
    if (!wrapperRef.current) return;

    const updateHeight = () => {
      if (wrapperRef.current) {
        setWrapperHeight(wrapperRef.current.offsetHeight);
      }
    };

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(wrapperRef.current);

    // Первоначальное измерение
    updateHeight();

    return () => resizeObserver.disconnect();
  }, [groupedItems]);

  // Обработчики навигации
  const handleNext = () => {
    if (!carouselRef.current || !wrapperRef.current) return;
    
    const nextBatch = currentBatch + 1;
    if (nextBatch < groupedItems.length) {
      setCurrentPosition(nextBatch * wrapperRef.current.offsetWidth);
      setCurrentBatch(nextBatch);
    } else {
      setCurrentPosition(0);
      setCurrentBatch(0);
    }
  };

  const handlePrev = () => {
    if (!carouselRef.current || !wrapperRef.current) return;
    
    const prevBatch = currentBatch - 1;
    if (prevBatch >= 0) {
      setCurrentPosition(prevBatch * wrapperRef.current.offsetWidth);
      setCurrentBatch(prevBatch);
    } else {
      const lastBatch = groupedItems.length - 1;
      setCurrentPosition(lastBatch * wrapperRef.current.offsetWidth);
      setCurrentBatch(lastBatch);
    }
  };

  return (
    <div className={styles.tutor}>
      <h2 className={styles.tutor__title}>{title}</h2>
      <div className={styles.tutor__slider}>
        <button 
          className={styles.tutor__btn} 
          onClick={handlePrev}
          aria-label="Previous"
        >
          {"<"}
        </button>
        
        <div 
          className={styles.tutor__wrapper} 
          style={{ height: wrapperHeight }}
        >
          <div
            ref={carouselRef}
            className={styles.tutor__carousel}
            style={{
              transform: `translateX(-${currentPosition}px)`,
              transition: "transform 0.3s ease-in-out"
            }}
          >
            {groupedItems.map((group, groupIndex) => (
              <div
                className={styles.item}
                key={`group-${groupIndex}`}
                ref={groupIndex === 0 ? wrapperRef : null}
              >
                {group.map((card) => (
                  <TutorCarouselCard
                    key={card.id}
                    card={card}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        
        <button 
          className={styles.tutor__btn} 
          onClick={handleNext}
          aria-label="Next"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default TutorCarousel;

/* import { useEffect, useRef, useState } from "react";
import styles from "./TutorCarousel.module.scss";
import TutorCarouselCard from "./TutorCarouselCard";

interface SwiperProps {
 

    items: {
        id: number,
        title: string,
        date: string,
        logo:string
    }[],
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

    console.log("ITEMS" , items)
    const [groupSize, setGroupSize] = useState(3); 

    const updateGroupSize = () => {
        if (window.innerWidth <= 1024) {
            setGroupSize(1);  
        } else {
            setGroupSize(3); 
        }
    };

    useEffect(() => {
        updateGroupSize();  
        window.addEventListener("resize", updateGroupSize);
         return () => {
            window.removeEventListener("resize", updateGroupSize);
        };
    }, [items]);

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
                                      //  card={card}
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

  */