import styles from "./FreeEnglish.module.scss"
import Lightning from "../../assets/lightning.png"
import Omg from "../../assets/omg.png"
import Yeah from "../../assets/yeah.png"
const FreeEnglish = () => {
  return (
    <section className={styles.free}>
      <div className={styles.free__inner}>
        <h2 className={styles.free__title}>
          Свободный английский от Edme
        </h2>
        <div className={styles.free__lines}>
            <div className={styles.line__stroke}>
              <div className={styles.line__content}>
                <img className={styles.line__lightning} src={Lightning} alt="Lightning" />
                <p className={styles.line__text}>
                  Бесплатная консультация с топовым экспертом Skyeng
                </p>
              </div>
              <img className={styles.line__image} src={Yeah} alt="Content" />
            </div>
            <div className={`${styles.line__stroke} ${styles.line__center}`}>
              <div className={styles.line__content}>
                <img src={Lightning} alt="Lightning" />
                <p className={styles.line__text}>
                  Определим, как преодолеть именно ваши языковые барьеры
                </p>
              </div>
            </div>
            <div className={styles.line__stroke}>
              <img className={styles.line__image} src={Omg} alt="Content" />
              <div className={styles.line__content}>
                <img className={styles.line__lightning} src={Lightning} alt="Lightning" />
                <p className={styles.line__text}>
                  Составим персональный план обучения
                </p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
export default FreeEnglish;
 