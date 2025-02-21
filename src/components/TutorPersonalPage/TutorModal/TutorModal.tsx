import { tutorLesson } from "./Consts";
import styles from "./TutorModal.module.scss"

const TutorModal = () => {
    return (<div className={styles.modal}>

        <div className={styles.modal__content}>
            <h3 className={styles.modal__title}>
                Добавить урок
            </h3>
            <form className={styles.modal__fields}>
                {tutorLesson.map(item => (
                    <div className={styles.modal__field}
                        key={item.id}
                    >
                        <label className={styles.modal__field__title}>
                            {item.title}
                        </label>
                        {item.type == "video" || item.type == "file" && (
                            <input
                                className={`${styles.modal__input} ${styles.modal__file}`}
                                placeholder={item.placeholder}
                                name={item.name}
                                type=""
                            />
                        )}
                        {item.type == "input" && (
                            <input
                                className={styles.modal__input}
                                placeholder={item.placeholder}
                                name={item.name}
                            />
                        )}
                    </div>
                ))}
            </form>

            <button className={styles.modal__btn}>
                Добавить урок
            </button>
        </div>
        <div className={styles.modal__overlay} />
    </div>);
}

export default TutorModal;