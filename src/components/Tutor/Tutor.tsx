import styles from "./Tutor.module.scss"
import TutorPreview from "./TutorPreview/TutorPreview";
const TutorComponent = () => {


    return (<div className={styles.tutor}>
        <div className={styles.tutor__inner}>
            <TutorPreview />
        </div>
    </div>);
}

export default TutorComponent;