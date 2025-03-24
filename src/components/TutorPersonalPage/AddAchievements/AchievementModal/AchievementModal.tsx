import { useDispatch } from "react-redux";
import { fields } from "./Consts";
import styles from "./AchievementModal.module.scss"
import { addAchievement, closeAchievement, setOpenModalAchievements,// updateAchievement 


} from "../../../../store/slices/AddAchievementSlice/AddAchievementSlice";
import AchievementsService from "../../../../services/Achievements";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AddAchievementSelectorPage } from "../../../../store/selectors/AddAchievementSelector";

const AchievementModal = () => {
    const dispatch = useDispatch();
    const selector = useSelector(AddAchievementSelectorPage);
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        logo: '',
        id: undefined as number | undefined
    });
    const [previewImage, setPreviewImage] = useState('');
 
    useEffect(() => {
        if (selector.selectedAchievement) {
            setFormData({
                title: selector.selectedAchievement.title,
                date: selector.selectedAchievement.date,
                logo: selector.selectedAchievement.logo,
                id: selector.selectedAchievement.id
            });
            setPreviewImage(selector.selectedAchievement.logo);
        }
    }, [selector.selectedAchievement]);

    const handleClose = () => {
        dispatch(closeAchievement());
   
        setFormData({
            title: '',
            date: '',
            logo: '',
            id: undefined
        });
        setPreviewImage('');
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

    const handleSave = async () => {
        if (!formData.title || !formData.date || !formData.logo) {
            alert('Пожалуйста, заполните все поля');
            return;
        }

        try {
            if (formData.id) {

                console.log("current", selector.selectedAchievement?.title, formData)
    
            const response = await AchievementsService.updateAchievement({
                    id: formData.id,
                    title: formData.title,
                    date: formData.date,
                    logo: formData.logo,
                    currentTitle: selector.selectedAchievement?.title
                });  
            //    dispatch(updateAchievement(formData));
            } else {
                // Создание нового достижения
            /*     const response = await AchievementsService.createAchievement({
                    title: formData.title,
                    date: formData.date,
                    logo: formData.logo
                });
                dispatch(addAchievement(formData)); */
            }
            handleClose();
        } catch (e) {
            console.error('Ошибка при сохранении достижения:', e);
            alert('Произошла ошибка при сохранении достижения');
        }
    }

    const handleDelete = async () => {
        if (!formData.id) {
            alert('Не выбрано достижение для удаления');
            return;
        }

        try {
          //  await AchievementsService.deleteAchievement(formData.id);
            // Здесь нужно добавить action для удаления из store
            handleClose();
        } catch (e) {
            console.error('Ошибка при удалении достижения:', e);
            alert('Произошла ошибка при удалении достижения');
        }
    }

    return (
        <div className={styles.modal}>
            <div className={styles.modal__content}>
                <h1 className={styles.modal__title}>
                    {formData.id ? 'Редактировать достижение' : 'Добавить достижение'}
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
                        onClick={handleSave}
                        type="button"
                    >
                        Сохранить
                    </button>

                    {formData.id && (
                        <button
                            className={`${styles.modal__btn} ${styles.modal__delete}`}
                            onClick={handleDelete}
                            type="button"
                        >
                            Удалить
                        </button>
                    )}
                </form>
            </div>
            <div className={styles.modal__overlay}
                onClick={handleClose}
            />
        </div>
    );
}

export default AchievementModal;

/*  
import { useDispatch } from "react-redux";
import { fields } from "./Consts";
import styles from "./AchievementModal.module.scss"
import { addAchievement, closeAchievement, setOpenModalAchievements } from "../../../../store/slices/AddAchievementSlice/AddAchievementSlice";
import AchievementsService from "../../../../services/Achievements";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AddAchievementSelectorPage } from "../../../../store/selectors/AddAchievementSelector";
const AchievementModal = () => {
    const dispatch = useDispatch();

    const selector = useSelector(AddAchievementSelectorPage)
    console.log(selector.selectedAchievement)
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        logo: ''
    });
    const [previewImage, setPreviewImage] = useState('');

    const handleClose = () => {
        dispatch(closeAchievement())
     //   dispatch(setOpenModalAchievements());
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
                  Редактировать достижение
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
                      Сохранить
                    </button>

                    <button
                        className={`${styles.modal__btn} ${styles.modal__delete}`}
                        onClick={handleAdd}
                        type="button"
                    >
                     Удалить
                    </button>
                </form>
            </div>
            <div className={styles.modal__overlay}
                onClick={handleClose}
            />
        </div>
    );
}

export default AchievementModal;  */