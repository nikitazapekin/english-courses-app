import { Placeholder } from "react-bootstrap";
import styles from "./TutorCreateCourse.module.scss"

import { dataPreview } from "./Consts";
const TutorCreateCourseComponent = () => {
    return (
        <section className={styles.panel}>
            <div className={styles.panel__container}>

                <div className={styles.panel__header}>
                    <h1 className={styles.panel__header__title}>
                        Создайте свой курс
                    </h1>
                </div>
                <form className={styles.panel__fields}>
                    {dataPreview.map(item => (
                        <div className={styles.panel__field}>
                            <label
                                className={styles.panel__field__title}
                            >
                                {item.title}
                            </label>
                            {item.type == "input" && (
                                <input
                                    className={styles.panel__field__input}
                                    placeholder={item.placeholder}
                                />
                            )}
                            {
                                item.type == "image" && (
                                    <div className={styles.panel__field__wrapper}>
                                        <p className={styles.panel__field__placeholder}>
                                            {item.placeholder}
                                        </p>
                                        <input
                                            className={styles.panel__field__imageInput}
                                            placeholder={item.placeholder}
                                            type="file"
                                            accept="image/*"
                                       
                                        />
                                    </div>
                                )
                            }
                        </div>
                    ))}

                    <button className={styles.panel__btn}>
                        Добавить урок
                    </button>
                    <button className={`${styles.panel__btn} ${styles.panel__btn__test}`}>
                        Добавить тест
                    </button>


                    <button className={styles.panel__btn}>
                       Сохранить курс
                    </button>
                </form>
            </div>
        </section>);
}

export default TutorCreateCourseComponent;