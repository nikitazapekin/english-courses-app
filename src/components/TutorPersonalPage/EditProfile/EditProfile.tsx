import styles from "./EditProfile.module.scss"
import { editArray } from "./Consts";
import EditField from "../EditField/EditField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import TutorService from "../../../services/Tutor";


interface FormTypes {
    username: string,
    describtion: string,
    fulldescribtion: string,
    email: string,
    password: string,
    specialization: string,
    level: string
}
const EditProfile = () => {

    const [formData, setFormData] = useState<FormTypes>({
        username: "",
        describtion: "",
        fulldescribtion: "",
        email: "",
        password: "",
        specialization: "",
        level: "",
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        //dispatch()

        try {
const response = TutorService.EditTutor({data: {...formData}})
        } catch {

        }
    }
    return (
        <div className={styles.edit}>
            <h1 className={styles.edit__title}>
                Редактировать профиль
            </h1>
            <div className={styles.edit__content}>
                {editArray.map(item => (
                    <EditField
                        handleChange={handleChange}
                        item={item}
                    />
                ))}
            </div>
            <button className={styles.edit__btn} type="submit"

            onClick={handleSubmit}
            >
                Сохранить  изменения
            </button>


        </div>);
}

export default EditProfile;