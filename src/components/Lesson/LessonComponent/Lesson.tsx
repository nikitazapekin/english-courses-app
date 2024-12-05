import styles from "./Lesson.module.scss"
import { useParams } from "react-router-dom";
import { courseMaterials } from "../../../utils/courseMaterials";
import LessonHeader from "../LessonHeader/LessonHeader";
import DownloadFile from "../DownloadFile/DownloadFile";
import LessonPanel from "../LessonPanel/LessonPanel";
import LessonCommentsHeader from "../LessonCommentsHeader/LessonCommentsHeader";
import LessonComments from "../LessonComments/LessonComments";
const LessonComponent = () => {

    const { theme } = useParams();


    return (<div className={styles.lesson}>
        <div className={styles.lesson__inner}>
            <div className={styles.lesson__title}>
                <p className={styles.lesson__number}>
                    Урок       {courseMaterials[Number(theme)].lesson}
                </p>
                <h1 className={styles.lesson__name}>
                    {courseMaterials[Number(theme)].title}
                </h1>

            </div>
            <p className={styles.lesson__subtitle}>
                {courseMaterials[Number(theme)].timestampt}
            </p>


            <div className={styles.lesson__content}>
                <LessonHeader />

                <iframe className={styles.lesson__video} src={courseMaterials[Number(theme)].video}
                    title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen />
                <DownloadFile title={courseMaterials[Number(theme)].material.text}
                    icon={courseMaterials[Number(theme)].material.icon}
                    size={courseMaterials[Number(theme)].material.size}
                    file={courseMaterials[Number(theme)].material.link}
                />
                <div className={styles.lesson__testing}>
                    Тематический тест по теме
                </div>

                <LessonPanel />

                <LessonCommentsHeader />

                <LessonComments />
                {/*
                    */}
            </div>
        </div>
    </div>);
}

export default LessonComponent;