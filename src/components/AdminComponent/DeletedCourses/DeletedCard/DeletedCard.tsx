import styles from "./DeletedCard.module.scss"
interface Ban {
    id: number;
    course_id: number;
    ban_text: string;
    ban_date: string;
    is_active: boolean;
}

interface CourseDetails {
    id: number;
    course_id: number;
    author: string;
    title: string;
    description: string;
    fulldescription: string;
    course_for: string[];
    course_suitable: string[];
    for_what_reasons: string[];
    about_course: string[];
    tag: string;
    course_rate: string;
    release_date: string;
    course_logo: string;
    warnings: number[];
    bans: Ban[];
    isvisible: boolean;
    bans_data: Ban[];
}
interface Props {
    item: CourseDetails
}
const DeletedCard = ({ item }: Props) => {
    return (
        <div
            className={styles.card}
        >
            <div className={styles.card__content}>
                <img
                    className={styles.card__image}
                    src={item.course_logo}
                    alt="logo"
                />
                <div className={styles.card__preview}>
                    <h3 className={styles.card__title}>
                        {item.title}
                    </h3>
                    <p className={styles.card__describtion}>
                        {item.description}
                    </p>

                    <div className={styles.card__for}>
                        {item.course_for.map((item_for, index) => (
                            <div className={styles.card__for__item} key={index}>
                                {item_for}
                            </div>
                        ))}
                    </div>

                    <div>
                        <p className={styles.vis}>
                            Курс виден другим пользователям: {item.isvisible ? "Да" : "Нет"}
                        </p>

                    </div>
                </div>
            </div>

            <p
                className={styles.card__edit}
            //      onClick={handleRedirect}
            >
                Редактировать
            </p>


        </div>
    );
}

export default DeletedCard;



/*
import { useNavigate } from "react-router-dom";
import styles from "./TutorCourse.module.scss";
import { useState } from "react";
import WarningModal from "../../CategoriesComponent/WarningModal/WarningModal";
import WarningsModal from "./WarningsModal/WarningsModal";
import BansModal from "./BansModal/BansModal";

interface Warning {
    id: number,
    warning_text: string,
    warning_date: string,
    is_active: boolean
}

interface Ban {
    id: number,
    ban_text: string,
    ban_date: string,
    is_active: boolean
}

interface TutorCourseProps {
    item: {
        id: number;
        author: string;
        title: string;
        description: string;
        course_for: String[];
        release_date: string;
        course_logo: string;
        bans: number[],
        isvisible: boolean,
        warnings: number[],
        warnings_data: Warning[],
        bans_data: Ban[],
    };
}

const TutorCourse = ({ item }: TutorCourseProps) => {
    const navigate = useNavigate();
    const [isOpenBansInfo, setIsOpenBansInfo] = useState(false);
    const [isOpenWarningsInfo, setIsOpenWarningsInfo] = useState(false);

    const handleRedirect = (event: React.MouseEvent) => {
        event.stopPropagation();
        navigate(`/tutor/personal/courses/${item.id}`);
    };

    const handleRedirectCourse = (event: React.MouseEvent) => {
        if (!isOpenWarningsInfo && !isOpenBansInfo) {
            navigate(`/card/lessons/${item.id}`);
        }
    };

    const handleOpenBansInfo = (event: React.MouseEvent) => {
        event.stopPropagation();
        setIsOpenBansInfo(prev => !prev);
    };

    const handleOpenWarningsInfo = (event: React.MouseEvent) => {
        event.stopPropagation();
        setIsOpenWarningsInfo(prev => !prev);
    };

    return (
        <div
            className={styles.card}
            onClick={handleRedirectCourse}
        >
            <div className={styles.card__content}>
                <img
                    className={styles.card__image}
                    src={item.course_logo}
                    alt="logo"
                />
                <div className={styles.card__preview}>
                    <h3 className={styles.card__title}>
                        {item.title}
                    </h3>
                    <p className={styles.card__describtion}>
                        {item.description}
                    </p>

                    <div className={styles.card__for}>
                        {item.course_for.map((item_for, index) => (
                            <div className={styles.card__for__item} key={index}>
                                {item_for}
                            </div>
                        ))}
                    </div>

                    <div>
                        <p className={styles.vis}>
                            Курс виден другим пользователям: {item.isvisible ? "Да" : "Нет"}
                        </p>
                        {item.bans != null && item.bans.length > 0 && (
                            <div className={styles.bans}>
                                Ваш курс заблокирован. <span
                                    className={`${styles.bans} ${styles.underline}`}
                                    onClick={handleOpenBansInfo}
                                >
                                    Узнать причину
                                </span>
                            </div>
                        )}
                        {item.warnings_data != null && item.warnings_data.length > 0 && (
                            <div className={styles.warnings}>
                                У вашего курса есть предупреждения. <span
                                    className={`${styles.warnings} ${styles.underline}`}
                                    onClick={handleOpenWarningsInfo}
                                >
                                    Подробнее
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <p
                className={styles.card__edit}
                onClick={handleRedirect}
            >
                Редактировать
            </p>

            {isOpenWarningsInfo && (
                <WarningsModal
                    warnings={item.warnings_data}
                    handler={handleOpenWarningsInfo}
                />
            )}

            {isOpenBansInfo && (
                <BansModal
                    bans={item.bans_data}
                    handler={handleOpenBansInfo}
                />
            )}
        </div>
    );
};

export default TutorCourse; 




@import "../../../theme/theme";
.card {
    margin-top: 20px;
    display: flex;
    column-gap: 40px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 15px;
    height: 200px;
   // height: 100%;
    align-items: center;
cursor: pointer;
justify-content: space-between;
 

&__content {
    display: flex;
    column-gap: 20px;
}
    &__image {
        max-width: 200px;
        width: 100%;
        max-height: 200px;
        border-radius: 5px;
        // align-self: center;
    }

    &__preview {
        display: flex;
        flex-direction: column;
        row-gap: 5px;
    }
    &__title {
        
        font-size: 24px;
        color: $black;
        font-family: "Nunito", sans-serif;
        font-weight: 700;
    }
    &__describtion {
        font-size: 20px;
        color: $black;
        font-family: "Nunito", sans-serif;
       
    }

    &__for {
        font-size: 20px;
        color: $black;
        font-family: "Nunito", sans-serif;
        color: $white;
        align-self: flex-start;
        
        display: flex;
        column-gap: 10px;
        &__item {
            
            border-radius: 5px;
            padding: 2px 5px;
            background-color: $sliderGreen;
        }
    }


    &__edit {
        justify-self: flex-end;
        align-self: flex-start;
        font-size: 20px;
        color: $black;
        font-family: "Nunito", sans-serif;
        cursor: pointer;
    }
}


.vis {
    font-size: 24px;
    color: $black;
    font-family: "Nunito", sans-serif;
    font-weight: 700;
}

.warnings {
    font-size: 24px;
    color: rgb(167, 167, 44);
    font-family: "Nunito", sans-serif;
    font-weight: 700;
}
.bans {
    font-size: 24px;
    color: rgb(133, 11, 11);
    font-family: "Nunito", sans-serif;
    font-weight: 700;
}

.underline {
    text-decoration: underline;
    cursor: pointer;
}
    */