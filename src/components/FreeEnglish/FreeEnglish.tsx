import { useState } from "react";
import styles from "./FreeEnglish.module.scss";
import Lightning from "../../assets/lightning.png";
import Omg from "../../assets/omg.png";
import Yeah from "../../assets/yeah.png";

const FreeEnglish = () => {
  const [animated, setAnimated] = useState<boolean[]>([false, false, false]);

  const handleMouseEnter = (index: number) => {
    setAnimated((prev) =>
      prev.map((val, idx) => (idx === index ? true : val))
    );
  };

  return (
    <section className={styles.free}>
      <div className={styles.free__inner}>
        <h2 className={styles.free__title}>Свободный английский от Edme</h2>
        <div className={styles.free__lines}>
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`${styles.line__stroke} ${
                index === 1 ? styles.line__center : ""
              } ${
                animated[index]
                  ? index % 2 === 0
                    ? styles["animate-right"]
                    : styles["animate-left"]
                  : ""
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <div className={styles.line__content}>
                <img
                  className={styles.line__lightning}
                  src={Lightning}
                  alt="Lightning"
                />
                <p className={styles.line__text}>
                  {index === 0
                    ? "Бесплатная консультация с топовым экспертом Skyeng"
                    : index === 1
                    ? "Определим, как преодолеть именно ваши языковые барьеры"
                    : "Составим персональный план обучения"}
                </p>
              </div>
              {index !== 1 && (
                <img
                  className={styles.line__image}
                  src={index === 0 ? Yeah : Omg}
                  alt="Content"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeEnglish;
