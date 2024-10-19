import styles from "./FreeEnglish.module.scss"
import Lightning from "../../assets/lightning.png"
const FreeEnglish = () => {
  return (
    <section className={styles.free}>
      <div className={styles.free__inner}>
        <h2 className={styles.free__title}>
          Свободный английский от Edme

        </h2>
        <div className={styles.lines}>


          <div className={styles.line}>
            <div className={styles.line__stroke}>
              <img src={Lightning} alt="Lightning" />
              <p className={styles.line__text}>
                Бесплатная консультация с топовым экспертом Skyeng
              </p>
            </div>
          </div>


          
        </div>
      </div>
    </section>
  );
}

export default FreeEnglish;