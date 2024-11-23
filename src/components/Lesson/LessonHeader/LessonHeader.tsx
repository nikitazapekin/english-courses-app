
import { useNavigate, useParams } from "react-router-dom";
import styles from "./LessonHeader.module.scss"
import { courseMaterials } from "../../../utils/courseMaterials";
const LessonHeader = () => {
    const navigate = useNavigate()
    const { theme} = useParams()
    const handleNext = () => {
        if(Number(theme)!=courseMaterials.length-1) {

            navigate(`/card/lessons/${courseMaterials[Number(theme)+1].title}/${Number(theme)+1}`)
        }
    }
    const handlePrev=() => {
        if(Number(theme)!=0) {

            navigate(`/card/lessons/${courseMaterials[Number(theme)-1].title}/${Number(theme)-1}`)
        }
    }
    return (<div className={styles.header}>
        <div className={styles.header__btn} onClick={handlePrev}>
            <p className={styles.header__btn__bold}>
                Предыдущий урок 
            </p>
            <p className={styles.header__btn__text}>
           {/*
                Базовые
                разговорные
                выражения
                */}
                       {Number(theme) !=0 ? courseMaterials[Number(theme)-1].title :   courseMaterials[ courseMaterials.length-1].title}
            </p>
        </div>
        <p className={styles.header__current}>
        {Number(theme)+1} из 12 уроков
        </p>
        <div className={`${styles.header__btn} ${styles.header__btn__right} `} onClick={handleNext}>
            <p className={styles.header__btn__bold}>
                Следующий урок
            </p>
            <p className={styles.header__btn__text}  >
              {/*
              Базовые
              разговорные
              выражения
              */}
              
                {Number(theme) < courseMaterials.length-1 ? courseMaterials[Number(theme)+1].title :   courseMaterials[0].title}
            </p>
        </div>
    </div>);
}

export default LessonHeader;