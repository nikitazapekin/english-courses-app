
import styles from "./EditProfile.module.scss";
import { editArray } from "./Consts";
import EditField from "../EditField/EditField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import TutorService from "../../../services/Tutor";
import { useSelector } from "react-redux";
import { TutorSelector } from "../../../store/selectors/Tutor.selector";

interface FormTypes {
    username: string;
    description: string;
    fulldescription: string;
    email: string;
    password: string;
    specialization: string;
    level: string;
    students: string;
    experience: String[];
    durability: string;
    location: string;
    price: number;
}

const EditProfile = () => {
    const [formData, setFormData] = useState<FormTypes>({
        username: "",
        description: "",
        fulldescription: "",
        email: "",
        password: "",
        specialization: "",
        level: "",
        students: "",
        experience: [],
        durability: "",
        location: "",
        price: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            await TutorService.EditTutor({ data: { ...formData } });
        } catch (error) {
            console.error("Ошибка при редактировании профиля:", error);
        }
    };

    const tutor = useSelector(TutorSelector);
    const obj: FormTypes = {
        username: tutor.user.username,
        description: tutor.user.description,
        fulldescription: tutor.user.fulldescription,
        email: tutor.user.email,
        password: tutor.user.password,
        specialization: tutor.user.specialization,
        level: tutor.user.english_level,
        students: tutor.user.students || "",
        experience: tutor.user.experience || [],
        durability: tutor.user.durability || "",
        location: tutor.user.location || "",
        price: Number(tutor.user.price),
    };

    return (
        <div className={styles.edit}>
            <h1 className={styles.edit__title}>Редактировать профиль</h1>
            <div className={styles.edit__content}>
             
                {editArray.map((item) => (
                        <EditField key={item.id} obj={obj} handleChange={handleChange} 
                        
                        //item={item}
                        item={item as { id: number; title: string; placeholder: string; name: keyof FormTypes; type: string }}
                        />
                ))}
                       
            </div>
            <button className={styles.edit__btn} type="submit" onClick={handleSubmit}>
                Сохранить изменения
            </button>
        </div>
    );
};

export default EditProfile;

/* import styles from "./EditProfile.module.scss";
import { editArray } from "./Consts";
import EditField from "../EditField/EditField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import TutorService from "../../../services/Tutor";
import { useSelector } from "react-redux";
import { TutorSelector } from "../../../store/selectors/Tutor.selector";

interface FormTypes {
    username: string;
    description: string;
    fulldescription: string;
    email: string;
    password: string;
    specialization: string;
    level: string;
    students: string;
    experience: String[];
    durability: string;
    location: string;
    price: string;
}

const EditProfile = () => {
    const [formData, setFormData] = useState<FormTypes>({
        username: "",
        description: "",
        fulldescription: "",
        email: "",
        password: "",
        specialization: "",
        level: "",
        students: "",
        experience: [],
        durability: "",
        location: "",
        price: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
       //     await TutorService.EditTutor({ data: { ...formData } });
        } catch (error) {
            console.error("Ошибка при редактировании профиля:", error);
        }
    };

    const tutor = useSelector(TutorSelector);
    const obj = {
        username: tutor.user.username,
        description: tutor.user.description,
        fulldescription: tutor.user.fulldescription,
        email: tutor.user.email,
        specialization: tutor.user.specialization,
        level: tutor.user.english_level,
        students: tutor.user.students || "",
        experience: tutor.user.experience || [],
        durability: tutor.user.durability || "",
        location: tutor.user.location || "",
        price: tutor.user.price || "",
    };

    return (
        <div className={styles.edit}>
            <h1 className={styles.edit__title}>Редактировать профиль</h1>
            <div className={styles.edit__content}>
                {editArray.map((item) => (
                    <EditField key={item.id} obj={obj} handleChange={handleChange} item={item} />
                ))}
            </div>
            <button className={styles.edit__btn} type="submit" onClick={handleSubmit}>
                Сохранить изменения
            </button>
        </div>
    );
};

export default EditProfile; */



/* import styles from "./EditProfile.module.scss"
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
            const response = TutorService.EditTutor({ data: { ...formData } })
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
  */