import { useEffect, useRef, useState } from "react";
import styles from "./TutorCarousel.module.scss";

interface SwiperProps {
    items: Array<{
        title: string;
        experience: string;
        img: string;
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
  
const  [currentBatch, setCurrentBatch] = useState<number>(0);
const [currentPosition, setCurrentPosition] = useState<number>(0)

    const wrapper = useRef<HTMLDivElement>(null)
const handleNext =()=>  {
    if(groupItems.length-1 !=currentBatch) {

        setCurrentPosition(prev=> prev+wrapper.current!.offsetWidth)
        setCurrentBatch(prev=>prev+1)
    } else  {
        setCurrentPosition(0)
        setCurrentBatch(0)
    }
}
const handlePrev = () => {
    if(currentBatch!=0) {

        setCurrentPosition(prev=> prev-wrapper.current!.offsetWidth)
        setCurrentBatch(prev=>prev-1)
    } else {
        setCurrentBatch(groupItems.length-1)
        setCurrentPosition(prev=> prev+wrapper.current!.offsetWidth*(groupItems.length-1))
    }
}
useEffect(()=> {
    
}, [])
    return (
        <div className={styles.tutor}>
            <h2 className={styles.tutor__title}>{title}</h2>
            <div className={styles.tutor__slider}>
                <div className={styles.tutor__btn}
                onClick={handlePrev}
                >{"<"}</div>
                <div className={styles.tutor__wrapper}>

                    <div className={styles.tutor__carousel} style={{transform: `translateX(-${currentPosition+ "px"})`}}>
                        {
                            groupedItems.map((item, index) => (
                                <div className={styles.item} key={index}
                                ref={wrapper}
                                >
                                    {item.map((card, indexCard) => (
                                        <div className={styles.card} key={indexCard}>

                                            <img className={styles.card__image}
                                                src={card.img}
                                                alt="Card"
                                            />
                                            <p className={styles.card__title}>
                                                {card.title}
                                            </p>
                                            <p className={styles.card__text}>
                                                {card.experience}
                                            </p>
                                        </div>
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

/*
import styles from "./TutorCarousel.module.scss"
interface SwiperProps {
    items: Array<{
        title: string;
        experience: string;

        img: string;
    }>;
    title: string
}
const TutorCarousel = ({ title, items }: SwiperProps) => {
    return (
        <div className={styles.tutor}>
            <h2 className={styles.tutor__title}>
                {title}
            </h2>
            <div className={styles.tutor__slider}>

                <div>
                    {"<"}
                </div>
                <div className={styles.tutor__wrapper}>

                    <div className={styles.tutor__carousel}>
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


                <div>
                    {">"}
                </div>

            </div>
        </div>);
}

export default TutorCarousel;

*/
/*
     {groupedItems.map((group, groupIndex) => (
         <div key={groupIndex} className={styles.group}>
             {group.map((item, index) => (
                 <div key={index} className={styles.swiperItem}>
                     <img
                         src={item.img}
                         className={styles.swiperItem__img}
                         alt="Tutor"
                     />
                     <h3 className={styles.swiperItem__title}>
                         {item.title}
                     </h3>
                     <h4 className={styles.swiperItem__experience}>
                     {item.experience}
                     </h4>
                 </div>
             ))}
         </div>
     ))}
             */