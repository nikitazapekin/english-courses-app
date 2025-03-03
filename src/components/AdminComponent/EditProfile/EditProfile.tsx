import styles from "./EditProfile.module.scss"
import { editArray } from "./Consts";
import EditField from "../EditField/EditField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import TutorService from "../../../services/Tutor";
import { useSelector } from "react-redux";
import { TutorSelector } from "../../../store/selectors/Tutor.selector";


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
        try {
         //   const response = TutorService.EditTutor({ data: { ...formData } })
        } catch {

        }
    }

    const tutor  = useSelector(TutorSelector)
    const obj = {
        username: tutor.user.username,
        describtion: tutor.user.description,
        fulldescribtion: tutor.user.full_description,
       email: tutor.user.email,
       specialization: tutor.user.specialization,
       level: tutor.user.english_level
    }
    return (
        <div className={styles.edit}>
            <h1 className={styles.edit__title}>
                Редактировать профиль
            </h1>
            <div className={styles.edit__content}>
                {editArray.map(item => (
                    <EditField
                    obj={obj}
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

/*
export const editArray  = [
    {id: 1, title:"Имя", placeholder: "Введите имя", name: "username", type: "input"},
    {id: 2, title:"Описание", placeholder: "Введите описание", name: "describtion",  type: "input"},
    {id: 3, title:"Подробное описание", placeholder: "Введите подробное описание", name: "fulldescribtion",  type: "textarea"},
    {id: 4, title:"Телефон", placeholder: "Введите описание", name: "describtion",  type: "input"},
    {id: 5, title:"Почта", placeholder: "Введите почту", name: "email",  type: "input"},
    {id: 6, title:"Пароль", placeholder: "Введите пароль", name: "password",  type: "input"},
    {id: 7, title:"Специализация", placeholder: "Введите специализацию", name: "specialization",  type: "input"},
    {id: 8, title:"Уровень", placeholder: "Введите ваш уровень языка", name: "level",  type: "input"},

]

"id":1,"id_author":7,"username":"gggggggg",
"email":"tutor@mail.ru","description":"","rate":"0.00",
"specialization":"","english_level":"","full_description":"","role":"tutor"
*/