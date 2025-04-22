import { useState } from "react";
import PersonalService from "../../../services/Personal";
import PersonalHeader from "../PersonalHeader/PersonalHeader/PersonalHeader";
import styles from "./PersonalEditProfile.module.scss";
import EditField from "./EditField/EditField";
import { editArray } from "./consts";

interface EditProps {
    email: string;
    password: string;
    phone: string;
    country: string;
    city: string;
    name: string;
    shortName: string;
    describtion: string;
    theme: string;
}

interface FormTypes {
    id: number;
    id_author: number;
    username: string;
    email: string;
    description: string;
    rate: string;
    specialization: string;
    english_level: string;
    full_description: string;
    role: string;
    number_of_students: string;
    experience: String[];
    work_experience: string;
    password: string;
    location: string;
    price: number;
    phone: string;
}


const PersonalEditProfile = () => {
    const [data, setData] = useState<EditProps>({
        email: "",
        password: "",
        phone: "",
        country: "",
        city: "",
        name: "",
        shortName: "",
        describtion: "",
        theme: ""
    });
 
    const handleEdit = async () => {
        try {
            const response = await PersonalService.EditUser({ data });
            console.log("Данные обновлены:", response.data);
        } catch (error) {
            console.error("Ошибка при редактировании профиля", error);
        }
    }; 
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name != "confirmPassword") {

            setData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    };



    

    return (
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.form__inner}>
                <PersonalHeader title={"Настройки"} />





<div className={styles.edit__content}>
                {editArray.map((item) => (
                    <EditField 
                        key={item.id} 
                      //  obj={obj} 
                        handleChange={handleChange}
                        item={item as { 
                            id: number; 
                            title: string; 
                            placeholder: string; 
                            name: keyof FormTypes; 
                            type: string 
                        }}
                    />
                ))}
            </div>
            <button className={styles.edit__btn} type="submit" //onClick={handleSubmit}
            >
                Сохранить изменения
            </button>
            









            </div>
        </form>
    );
};

export default PersonalEditProfile;
 

/* 

  import styles from "./EditProfile.module.scss";
import { editArray } from "./Consts";
import EditField from "../EditField/EditField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import TutorService from "../../../services/Tutor";
import { useSelector } from "react-redux";
import { TutorSelector } from "../../../store/selectors/Tutor.selector";
import ErrorModal from "../TurorCreateCourse/ErrorModal/ErrorModal";
interface FormTypes {
    id: number;
    id_author: number;
    username: string;
    email: string;
    description: string;
    rate: string;
    specialization: string;
    english_level: string;
    full_description: string;
    role: string;
    number_of_students: string;
    experience: String[];
    work_experience: string;
    password: string;
    location: string;
    price: number;
    phone: string;
}

const EditProfile = () => {
    const [formData, setFormData] = useState<FormTypes>({
        id: 0,
        id_author: 0,
        username: "",
        description: "",
        full_description: "",
        email: "",
        password: "",
        specialization: "",
        english_level: "",
        number_of_students: "",
        experience: [],
        work_experience: "",
        location: "",
        price: 0,
        rate: "",
        role: "",
        phone: ""
    });

    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleError = () => setIsError(prev => !prev);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = (): boolean => {
         
        if (!formData.username.trim() && !obj.username) {
            console.log("FORM", formData)
            setIsError(true);
            setErrorMessage("Пожалуйста, введите ваше имя");
            return false;
        }
    
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() && !obj.email) {
            console.log("FORM", formData)
            setIsError(true);
            setErrorMessage("Пожалуйста, введите email");
            return false;
        }
    

     
        if (formData.password.length>0 && formData.password.length < 6) {
            setIsError(true);
            setErrorMessage("Пароль должен содержать минимум 6 символов");
            return false;
        }

        return true;
    };

    const handleSubmit = async () => {
        if (!validateForm()) {
            return;
        }  

        try {
            await TutorService.EditTutor({ data: { ...formData } });
       
        } catch (error) {
            console.error("Ошибка при редактировании профиля:", error);
            setIsError(true);
            setErrorMessage("Произошла ошибка при сохранении изменений");
        }
    };

    const tutor = useSelector(TutorSelector);
    const obj: FormTypes = {
        id: tutor.user.id,
        id_author: tutor.user.id_author,
        username: tutor.user.username,
        email: tutor.user.email,
        description: tutor.user.description,
        rate: tutor.user.rate,
        specialization: tutor.user.specialization,
        english_level: tutor.user.english_level,
        full_description: tutor.user.full_description,
        role: tutor.user.role,
        number_of_students: tutor.user.number_of_students,
        experience: tutor.user.experience,
        work_experience: tutor.user.work_experience,
        password: tutor.user.password,
        location: tutor.user.location,
        price: tutor.user.price,
        phone: tutor.user.phone
    };

    return (
        <div className={styles.edit}>
            <h1 className={styles.edit__title}>Редактировать профиль</h1>
            <div className={styles.edit__content}>
                {editArray.map((item) => (
                    <EditField 
                        key={item.id} 
                        obj={obj} 
                        handleChange={handleChange}
                        item={item as { 
                            id: number; 
                            title: string; 
                            placeholder: string; 
                            name: keyof FormTypes; 
                            type: string 
                        }}
                    />
                ))}
            </div>
            <button className={styles.edit__btn} type="submit" onClick={handleSubmit}>
                Сохранить изменения
            </button>
            
            {isError && (
                <ErrorModal
                    message={errorMessage}
                    handler={handleError}
                />
            )}
        </div>
    );
};

export default EditProfile; */
  /*


  @import "../../../theme/theme";

.edit {
    width: 100%;

    &__title {
        margin-bottom: 20px;
        font-weight: 700;
        font-size: 36px;
        color: #3a3a3a;
        font-family: "Nunito", sans-serif;
    }

    &__content {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        width: 100%;
    }

    &__btn {
        cursor: pointer;
        border-radius: 20px;
        border: none;
        outline: none;
        padding: 5px;
        background-color: $sliderGreen;
        color: $white;
        font-size: 20px;

        font-family: "Nunito", sans-serif;
        margin-top: 20px;
        width: 100%;

    }




}
    */