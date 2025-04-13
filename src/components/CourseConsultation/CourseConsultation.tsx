import { useState } from "react"
import MailService from "../../services/Mail"
import styles from "./CourseConsultation.module.scss"
import { useSelector } from "react-redux"
import { OpenCourseSelector } from "../../store/selectors/OpenCourseSelector"
const CourseConsultation = () => {
    const [data, setData] = useState({
        email: "",
        firstName: "",
        secondName: "",
        message: ""
    })

  /*   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    } */

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setData(prev => ({
        ...prev,
        [name]: value
    }))
}

    const course = useSelector(OpenCourseSelector)
    const handleSend = async () => {
        try {
            const resp = await MailService.SendMessage(data.email, data.firstName, data.secondName, data.message, course.tutor.email)
        } catch (e) {
            console.log(e)
        }
    }
    return (<section className={styles.course}>
        <form className={styles.course__inner}>
            <div className={styles.course__content}>
                <h2 className={styles.course__title}>
                    Записаться на пробное занятие с репетитором
                </h2>
                <div className={styles.form}>
                    <input className={styles.form__input} onChange={(e) => handleChange(e)} name="email" type="text" placeholder="Имя" required />
                    <input className={styles.form__input} onChange={(e) => handleChange(e)} name="firstName" type="text" placeholder="Фамилия" required />
                    <input className={styles.form__input} onChange={(e) => handleChange(e)} name="secondName" type="text" placeholder="Почта" required />
                    <input className={styles.form__input} onChange={(e) => handleChange(e)} name="message" type="text" placeholder="Сообщение" required />
                </div>
            </div>
            <div className={styles.course__personal}>
                <input type="checkbox" className={styles.course__personal__input} required />
                <p className={styles.course__personal__text}>
                    Я согласен на обработку персональных данных
                </p>
            </div>
            <button className={styles.course__btn} type="button" onClick={handleSend}>
                <p className={styles.course__btn__text}>
                    Отправить
                </p>
                <div className={styles.course__btn__background} />
            </button>

        </form>
    </section>);
}

export default CourseConsultation;

/*
import styles from "./AboutAuthor.module.scss"
import Agree from "../../assets/courseDetails/agree.png"
import Irina from "../../assets/courseDetails/irina.jpg"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { OpenCourseSelector } from "../../store/selectors/OpenCourseSelector"
const AboutAuthor = () => {
  
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/tutor/${course.tutor.id}`)
    }
    const course = useSelector(OpenCourseSelector)
    return (
        <section className={styles.about}>
            <div className={styles.about__inner}>
                <h2 className={styles.about__title}>
                    О авторе курса
                </h2>
                <div className={styles.about__content}>
                    <div className={styles.about__author__wrapper}>

                        <img src={course.tutor.avatar_base64 ? course.tutor.avatar_base64 : ""} alt="Author" className={styles.about__author} />
                    </div>
                    <div className={styles.info}>
                        <h3 className={styles.info__title}>
                            {course.tutor.username}
                        </h3>
                        <p className={styles.info__citate}>
                            {course.tutor.description}
                        </p>
                        <div className={styles.info__skills}>
                            {
                                course.tutor.experience.map((item, index) => (
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
*/