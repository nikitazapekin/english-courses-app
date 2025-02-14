import { useState } from "react";
import CoursesList from "../CoursesList/CoursesList";
import SearchPanel from "../SearchPanel/SearchPanel";
import SearchToolbar from "../SearchToolbar/SearchToolbar";
import styles from "./CategoriesComponent.module.scss"

const CategoriesComponent = () => {
   const [query, searchQuery] = useState("")
   const handleSearch = () => {

   }
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchQuery(event.target.value);  
};


    return (

        <section className={styles.categories}>
            <div className={styles.categories__inner}>
                <SearchToolbar />
             
                <div className={styles.categories__content}>

                    <SearchPanel  handleChange={handleChange} />
                    <CoursesList query={query} />
                </div>
            </div>
        </section>
    );
}

export default CategoriesComponent;