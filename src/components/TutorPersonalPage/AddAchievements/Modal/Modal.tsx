// Modal.tsx
import { useDispatch } from "react-redux";
import { fields } from "./Consts";
import styles from "./Modal.module.scss"
import { setOpenModalAchievements } from "../../../../store/slices/AddAchievementSlice/AddAchievementSlice";
import AchievementsService from "../../../../services/Achievements";
import { useState } from "react";

const Modal = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        logo: ''
    });

    const handleClose = () => {
        dispatch(setOpenModalAchievements());
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
        setFormData({
            ...formData,
            [fieldName]: e.target.value
        });
    }

    const handleAdd = async () => {
        try {
            const response = await AchievementsService.createAchievement({
                title: formData.title,
                date: formData.date,
                logo: formData.logo
            });
            handleClose();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className={styles.modal}>
            <div className={styles.modal__content}>
                <h1 className={styles.modal__title}>
                    Добавить достижение
                </h1>
                <form className={styles.modal__fields}>
                    <div className={styles.modal__field}>
                        {fields.map(item => (
                            <div key={item.id} className={styles.modal__input__wrapper}>
                                <p className={styles.modal__field__title}>
                                    {item.title}
                                </p>
                                {item.type != "file" && (
                                    <input
                                        className={styles.modal__input}
                                        placeholder={item.placeholder}
                                        type={item.type}
                                        value={formData[item.id === 1 ? 'title' : item.id === 2 ? 'date' : 'logo']}
                                        onChange={(e) => handleChange(e, item.id === 1 ? 'title' : item.id === 2 ? 'date' : 'logo')}
                                    />
                                )
                                }


                                {item.type == "file" && (
                                    <input
                                        className={styles.modal__input}
                                        placeholder={item.placeholder}
                                        type="file"
                                       
                                    />
                                )
                                }
                             
                            </div>
                        ))}
                    </div>

                    <button
                        className={styles.modal__btn}
                        onClick={handleAdd}
                        type="button"
                    >
                        Добавить
                    </button>
                </form>
            </div>
            <div className={styles.modal__overlay}
                onClick={handleClose}
            />
        </div>
    );
}

export default Modal;

/* import { useDispatch } from "react-redux";
import { fields } from "./Consts";
import styles from "./Modal.module.scss"
import { setOpenModalAchievements } from "../../../../store/slices/AddAchievementSlice/AddAchievementSlice";
import AchievementsService from "../../../../services/Achievements";
const Modal = () => {
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(setOpenModalAchievements())
    }
    const handleAdd = async () => {
try {
const response = await AchievementsService.createAchievement()
} catch(e) {
    console.log(e)
}
    }
    return (
        <div className={styles.modal}>
            <div className={styles.modal__content}>
                <h1 className={styles.modal__title}>
                    Добавить достижение
                </h1>
                <form className={styles.modal__fields}>
                    <div className={styles.modal__field}>
                        {fields.map(item => (
                            <div className={styles.modal__input__wrapper}>
                                <p className={styles.modal__field__title}>
                                    {item.title}
                                </p>
                                <input
                                    className={styles.modal__input}
                                    placeholder={item.placeholder}
                                />
                            </div>
                        ))}
                    </div>

                    <button
                    className={styles.modal__btn}
                    onClick={handleAdd}
                    type="button"
                    >
                        Добавить
                    </button>
                </form>
            </div>
            <div className={styles.modal__overlay}
                onClick={handleClose}
            />
        </div>
    );
}
export default Modal; */