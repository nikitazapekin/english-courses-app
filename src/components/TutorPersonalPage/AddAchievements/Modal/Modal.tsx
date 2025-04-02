 
import { useDispatch } from "react-redux";
import { fields } from "./Consts";
import styles from "./Modal.module.scss"
import { addAchievement, setOpenModalAchievements } from "../../../../store/slices/AddAchievementSlice/AddAchievementSlice";
import AchievementsService from "../../../../services/Achievements";
import { useState } from "react";

const Modal = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        logo: ''
    });
    const [previewImage, setPreviewImage] = useState('');

    const handleClose = () => {
        dispatch(setOpenModalAchievements());
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
        setFormData({
            ...formData,
            [fieldName]: e.target.value
        });
    }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
 
        const reader = new FileReader();
        reader.onload = (event) => {
            if (event.target?.result) {
                setPreviewImage(event.target.result as string);
            }
        };
        reader.readAsDataURL(file);
 
        const base64Reader = new FileReader();
        base64Reader.onload = () => {
            setFormData({
                ...formData,
                logo: base64Reader.result?.toString() || ''
            });
        };
        base64Reader.readAsDataURL(file);
    }

    const handleAdd = async () => {
        if (!formData.title || !formData.date || !formData.logo) {
            alert('Пожалуйста, заполните все поля');
            return;
        }

        try {
            const response = await AchievementsService.createAchievement({
                title: formData.title,
                date: formData.date,
                logo: formData.logo
            });
            handleClose();

            dispatch(addAchievement(formData))
        } catch (e) {
            console.error('Ошибка при добавлении достижения:', e);
            alert('Произошла ошибка при добавлении достижения');
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
                                {item.type !== "file" && (
                                    <input
                                        className={styles.modal__input}
                                        placeholder={item.placeholder}
                                        type={item.type}
                                        value={formData[item.id === 1 ? 'title' : item.id === 2 ? 'date' : 'logo']}
                                        onChange={(e) => handleChange(e, item.id === 1 ? 'title' : item.id === 2 ? 'date' : 'logo')}
                                    />
                                )}
                                
                                {item.type === "file" && (
                                    <div>
                                        <input
                                            className={styles.modal__input}
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                        />
                                        {previewImage && (
                                            <div className={styles.imagePreview}>
                                                <img 
                                                    src={previewImage} 
                                                    alt="Превью" 
                                                    style={{ maxWidth: '100px', maxHeight: '100px', marginTop: '10px' }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                )}
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








