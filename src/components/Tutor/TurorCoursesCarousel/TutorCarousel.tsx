import { useEffect, useRef, useState, useMemo } from "react";
import styles from "./TutorCarousel.module.scss";
import TutorCarouselCard from "./TutorCarouselCard";

interface SwiperProps {
 /*  items: {
    id: number;
    title: string;
    date: string;
    logo: string;
  }[]; */

  items: {
    id: number,
    title:  string,
    fulldescription: string,
    course_for: string[],
    course_suitable:string[],
    for_what_reasons: string[],
    about_course: string[],
    tag: string,
    course_rate:number,
    release_date:  string,
    course_logo: string,
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

const TutorCoursesCarousel = ({ title, items }: SwiperProps) => {
 
  const [groupSize, setGroupSize] = useState(3);
  const [currentBatch, setCurrentBatch] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [wrapperHeight, setWrapperHeight] = useState<number | 'auto'>('auto');
 
  const wrapperRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
 
  const updateGroupSize = () => {
    setGroupSize(window.innerWidth <= 1024 ? 1 : 3);
  };

 
  const groupedItems = useMemo(() => groupItems(items, groupSize), [items, groupSize]);

  
  useEffect(() => {
    updateGroupSize();
    window.addEventListener("resize", updateGroupSize);
    return () => window.removeEventListener("resize", updateGroupSize);
  }, []);

  
  useEffect(() => {
    if (!wrapperRef.current) return;

    const updateHeight = () => {
      if (wrapperRef.current) {
        setWrapperHeight(wrapperRef.current.offsetHeight);
      }
    };

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(wrapperRef.current);

    
    updateHeight();

    return () => resizeObserver.disconnect();
  }, [groupedItems]);
 
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

export default TutorCoursesCarousel;
 