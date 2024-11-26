import styles from "./CoursesSlider.module.scss";
import Children from "../../assets/coursesSlider/Childrens.png";
import Students from "../../assets/coursesSlider/Students.png";
import Doctors from "../../assets/coursesSlider/Doctor.png";
import { useEffect, useRef, useState } from "react";

const data = [
  {
    color: "#77A56C",
    image: Children,
    title: "Английский для самых маленьких",
    about: "Научим детей подросткового возраста базовому английскому языку",
  },
  {
    color: "#9c3318",
    image: Students,
    title: "Английский для студентов",
    about: "Поможем студентам вузов в освоении профессиональной лексики",
  },
  {
    color: "#b5c054",
    image: Doctors,
    title: "Английский для медработников",
    about: "Освойте медицинскую профессиональную терминологию",
  },
];

const CoursesSlider = () => {
  const slideRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentPosition, setCurrentPosition] = useState<number>(0);
  const [currentColor, setCurrentColor] = useState<string>("#77A56C");

 
  const timerRef = useRef<number | null>(null);

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentPosition((prev) => prev + (slideRef.current?.offsetWidth || 0));
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentPosition(0);
      setCurrentIndex(0);
    }
    resetAutoSlide();  
  };

  const handlePrev = () => {
    if (currentIndex <= 0) {
      setCurrentPosition(
        (prev) => (data.length - 1) * (slideRef.current!.offsetWidth || 0)
      );
      setCurrentIndex(data.length - 1);
    } else {
      setCurrentPosition((prev) => prev - (slideRef.current?.offsetWidth || 0));
      setCurrentIndex((prev) => prev - 1);
    }
    resetAutoSlide();  
  };

  const resetAutoSlide = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);  
    }
 
    timerRef.current = window.setInterval(handleNext, 5000);
  };

  useEffect(() => {
    setCurrentColor(data[currentIndex].color);
    resetAutoSlide();  

 
    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentIndex]);

  return (
    <section className={styles.slider} style={{ backgroundColor: currentColor }}>
      <div className={styles.slider__inner}>
        <div className={styles.slider__button} onClick={handlePrev}>
          {"<"}
        </div>
        <div className={styles.slider__panel}>
          <div
            className={styles.slider__carousel}
            style={{ transform: `translateX(-${currentPosition}px)` }}
          >
            {data.map((item, index) => (
              <div ref={slideRef} className={styles.slider__item} key={index}>
                <h2 className={styles.slider__title}>{item.title}</h2>

                <div className={styles.slider__item__content}>
                  <p className={styles.slider__about}>{item.about}</p>
                  <button className={styles.slider__try}>Попробовать</button>
                </div>
                <img src={item.image} alt="Children" className={styles.slider__image} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.slider__button} onClick={handleNext}>
          {">"}
        </div>
      </div>
    </section>
  );
};

export default CoursesSlider;


/*

import styles from "./CoursesSlider.module.scss"
import Children from "../../assets/coursesSlider/Childrens.png"
import Students from "../../assets/coursesSlider/Students.png"
import Doctors from "../../assets/coursesSlider/Doctor.png"
import { useEffect, useRef, useState } from "react"



const data = [
    {
        color: "#77A56C",
        image: Children,
        title: "Английский для самых маленьких",
        about: "    Научим детей подросткового возраста базовому английскому языку"
    },

    {
        color: "#9c3318",
        image: Students,
        title: "Английский для студентов",
        about: "Поможем студентам вузов в освоении профессиональной лексики"
    },


    {
        color: "#b5c054",
        image: Doctors,
        title: "Английский для медработников",
        about: "Освойте медицинскую профессиональную терминолонию"
    },

]
const CoursesSlider = () => {

    const slideRef = useRef<HTMLDivElement>(null)
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [currentPositon, setCurrentPosition] = useState<number>(0)
    const handleNext = () => {
        if (currentIndex < data.length - 1) {

            setCurrentPosition((prev) => prev + (slideRef.current?.offsetWidth || 0));
            setCurrentIndex(prev => prev + 1)
        } else {
            setCurrentPosition(0);
            setCurrentIndex(0)
        }
    };
    const handlePrev = () => {
        if (currentIndex <= 0) {
            setCurrentPosition((prev) => ((data.length - 1) * (slideRef.current!.offsetWidth) || 0));
            setCurrentIndex(prev => data.length - 1)
        } else {

            setCurrentPosition((prev) => prev - (slideRef.current?.offsetWidth || 0));
            setCurrentIndex(prev => prev - 1)
        }
    };

    useEffect(() => {
        setCurrentColor(data[currentIndex].color)
    }, [currentIndex])


    const [currentColor, setCurrentColor] = useState("#77A56C")

    return (
        <section className={styles.slider} style={{ backgroundColor: currentColor }}>
            <div className={styles.slider__inner}>
                <div className={styles.slider__button} onClick={handlePrev}>
                    {"<"}
                </div>
                <div className={styles.slider__panel}>

                    <div className={styles.slider__carousel} style={{ transform: `translateX(-${currentPositon}px)` }}>
                        {data.map((item, index) => (
                            <div ref={slideRef} className={styles.slider__item} key={index}>
                                <h2 className={styles.slider__title}>
                                    {item.title}
                                </h2>

                                <div className={styles.slider__item__content}>
                                    <p className={styles.slider__about}>
                                        {item.about}
                                    </p>
                                    <button className={styles.slider__try}>
                                        Попробовать
                                    </button>
                                </div>
                                <img src={item.image} alt="Children" className={styles.slider__image} />
                            </div>
                        )
                        )}
                     


                    </div>
                </div>
                <div className={styles.slider__button} onClick={handleNext}>
                    {">"}
                </div>
            </div>
        </section>

    );
}

export default CoursesSlider;

*/