import styles from "./AboutAuthor.module.scss"
import Agree from "../../assets/courseDetails/agree.png"
import Irina from "../../assets/courseDetails/irina.jpg"
import { useNavigate } from "react-router-dom"
const AboutAuthor = () => {
    const data = [
        "6  лет опыта",
        "Стажировка edme (22.02.2022-5.06.2022)",
        "Работала переводчиком в Epam Systems"
    ]
const navigate = useNavigate()
    const handleNavigate = () => {
navigate(`/tutor/${"Кирилл"}`)
    }
    return (
        <section className={styles.about}>
            <div className={styles.about__inner}>
                <h2 className={styles.about__title}>
                    О авторе курса
                </h2>
                <div className={styles.about__content}>
                    <div className={styles.about__author__wrapper}>

                    <img src={Irina} alt="Author" className={styles.about__author} />
                    </div>
                    <div className={styles.info}>
                        <h3 className={styles.info__title}>
                            Ирина
                        </h3>
                        <p className={styles.info__citate}>
                            ‘’Знание языка - как ключ, который откроет все двери’’
                        </p>
                        <div className={styles.info__skills}>
                            {
                                data.map((item, index) => (
                                    <div className={styles.info__skill} key={index}>
                                        <img src={Agree} alt="Agree" />
                                        <p className={styles.info__text}>
                                            {item}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={styles.info__btn}>
                            <p className={styles.info__btn__text} onClick={handleNavigate} >

                                Подробнее
                            </p>
                            <div className={styles.info__btn__background} />


                        </div>
                    </div>
                </div>


              
            </div>
        </section>);
}

export default AboutAuthor;