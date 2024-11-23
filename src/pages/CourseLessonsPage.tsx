import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import LessonsList from "../components/Lessons/LessonsList/LessonsList";
import styles from "../theme/wrappers.module.scss"
import "../theme/global.scss"
const CourseLessonsPage = () => {
    return (
<>
        <div className={styles.wrapper}>
        <div className={styles.darken} > </div>
            <Header />

            <div className={styles.content}>
                <LessonsList />
            </div>
            <Footer />
        </div>
</>
    );
}

export default CourseLessonsPage

