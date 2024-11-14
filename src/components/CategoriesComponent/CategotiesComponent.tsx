import CoursesList from "../CoursesList/CoursesList";
import SearchPanel from "../SearchPanel/SearchPanel";
import SearchToolbar from "../SearchToolbar/SearchToolbar";
import styles from "./CategoriesComponent.module.scss"
const CategoriesComponent = () => {
    return (

        <section className={styles.categories}>
            <div className={styles.categories__inner}>
                <SearchToolbar />
                <div className={styles.categories__content}>

                    <SearchPanel />
                    <CoursesList />
                </div>
            </div>
        </section>
    );
}

export default CategoriesComponent;