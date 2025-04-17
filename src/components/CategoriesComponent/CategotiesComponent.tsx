import { useEffect, useState } from "react";
import CoursesList from "../CoursesList/CoursesList";
import SearchPanel from "../SearchPanel/SearchPanel";
import SearchToolbar from "../SearchToolbar/SearchToolbar";
import styles from "./CategoriesComponent.module.scss"
import { useNavigate } from "react-router-dom";
import TutorService from "../../services/Tutor";
import adminService from "../../services/Admin";

const CategoriesComponent = () => {
    const [query, searchQuery] = useState("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        searchQuery(event.target.value);
    };

    const navigate = useNavigate()
    const handleSearch = () => {
        
//navigate(`/catalog/1/16/${query}`)
    }


    
    return (

        <section className={styles.categories}>
            <div className={styles.categories__inner}>
                <SearchToolbar />

                <div className={styles.categories__content}>

                    <SearchPanel handleChange={handleChange}
                        handleSearch={handleSearch}
                    />
                    <CoursesList
                    />
                </div>
            </div>
        </section>
    );
}

export default CategoriesComponent;