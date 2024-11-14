import styles from "./CoursesList.module.scss"
const CoursesList = () => {
    return (
        <div className={styles.courses}>
            <div className={styles.courses__inner}>
                <div className={styles.courses__header}>
                    <h2 className={styles.courses__title}>
                        Новинки
                    </h2>
                    <select className={styles.courses__select}>
                        <option  className={styles.courses__option}>Сортировать по стоимости</option>
                        <option className={styles.courses__option}>Сортировать по рейтингу</option>
                        <option className={styles.courses__option}>Сортировать по выпуску</option>
                    </select>

                </div>
            </div>
        </div>
    );
}

export default CoursesList;