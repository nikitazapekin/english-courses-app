import { useNavigate } from "react-router-dom"
import styles from "./TutorCourse.module.scss"
interface TutorCourseProps {
    item: {

        id: number,
        author: string,
        title: string,
        description: string,
        course_for: String[],
        release_date: string,
        course_logo: string,
    }
}
const TutorCourse = ({ item }: TutorCourseProps) => {
    const navigate = useNavigate()
    const handleRedirect = () => {
navigate(`/tutor/personal/courses/${item.id}`)
    }
    return (
        <div className={styles.card}
        onClick={handleRedirect}
        >
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
                    {
                        item.course_for.map(item_for => (
                            <div className={styles.card__for__item}>
                                {item_for}
                            </div>
                        ))
                    }
                </div>
                
            </div>

        </div>);
}

export default TutorCourse;

/*

@import "../../../theme/theme";
.card {
    margin-top: 20px;
    display: flex;
    column-gap: 40px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 15px;
    height: 300px;
   // height: 100%;
    align-items: center;
cursor: pointer;
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
}
    */