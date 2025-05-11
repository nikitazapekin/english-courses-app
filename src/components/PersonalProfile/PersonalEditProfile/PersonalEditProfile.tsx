import { useEffect, useState } from "react";
import PersonalHeader from "../PersonalHeader/PersonalHeader/PersonalHeader";
import styles from "./PersonalEditProfile.module.scss";
import EditField from "./EditField/EditField";
import { editArray } from "./consts";
import PersonalService from "../../../services/Personal";
import { useNavigate } from "react-router-dom";
import WarningsUserService, { WarningUser } from "../../../services/WarningsUser";

interface EditProps {
    email: string;
    password: string;
    phone: string;
    country: string;
    city: string;
    name: string;
    shortName: string;
    description: string;
    theme: string;
}

interface Data {
    id: number;
    email: string;
    auth_date: string;
    user_id: number;
    courses: string;
    phone: string;
    country: string;
    city: string;
    role: string;
    username: string;
    description: string;
}

interface Props {
    dataUser?: Data;
}

const PersonalEditProfile = ({ dataUser }: Props) => {
    const defaultData = {
        email: "",
        password: "",
        phone: "",
        country: "",
        city: "",
        name: "",
        shortName: "",
        description: "",
        theme: ""
    };

    const [data, setData] = useState<EditProps>({
        ...defaultData,
        email: dataUser?.email || "",
        phone: dataUser?.phone || "",
        country: dataUser?.country || "",
        city: dataUser?.city || "",
        name: dataUser?.username || "",
        description: dataUser?.description || "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    };
    //email, password, phone, country, city, name,  
    const navigate = useNavigate()
    const handleSave = async () => {
        try {
            const resp = await PersonalService.UpdateStudent(data.email, data.password, data.phone, data.country, data.city, data.name, data.description)
      
      navigate(`/personal/1/5`)
        } catch (e) {
            console.log(e)
        }
    }








     const [warnings,setWarnings] = useState<WarningUser[]>([])
        const handleGetWarnings = async () => {
            try {
                const resp = await WarningsUserService.GetUserWarnings()
                setWarnings(resp.data)
            } catch (e) {
                console.log(e)
            }
        }
        useEffect(() => {
            handleGetWarnings()
        }, [])   
    if (!dataUser) {
        return <div className={styles.loading}>Загрузка данных пользователя...</div>;
    }
    return (
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.form__inner}>
                <PersonalHeader title={"Редактировать профиль"}
                handleOpen={()=> {}}
                warnings={warnings}
                />
                <div className={styles.edit__content}>
                    {editArray.map((item) => {
                        const fieldName = item.name as keyof Data;
                        return (
                            <EditField
                                key={item.id}
                                handleChange={handleChange}
                                item={{
                                    id: item.id,
                                    title: item.title,
                                    placeholder: item.placeholder,
                                    name: item.name,
                                    type: item.type,
                                }}
                                defaultValue={dataUser[fieldName]?.toString() || ""}
                            />
                        );
                    })}
                </div>
                <button className={styles.edit__btn} type="button"
                    onClick={handleSave}
                >
                    Сохранить изменения
                </button>
            </div>
        </form>
    );
};

export default PersonalEditProfile;









/* import { useState } from "react";
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
    description: string;
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
interface Data {
    id: number,
    email: string,
    auth_date: string,
    user_id: number,
    courses: string,
    phone: string,
    country: string,
    city: string,
    role: string,
    username: string,
    description: string
}
interface Props {
    dataUser: Data
}

const PersonalEditProfile = ({ dataUser }: Props) => {
    const [data, setData] = useState<EditProps>({
        email: dataUser.email || "",
        password: "",
        phone: dataUser.phone || "",
        country: dataUser.country || "",
        city: dataUser.city || "",
        name: dataUser.username || "",
        shortName: "",
        description: dataUser.description || "",
        theme: ""
    });

    const handleEdit = async () => {
        // Реализация сохранения изменений
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
                            handleChange={handleChange}
                            item={item as {
                                id: number;
                                title: string;
                                placeholder: string;
                                name: keyof FormTypes;
                                type: string
                            }}
                            defaultValue={String(dataUser[item.name as keyof Data]) || ""}
                        />
                    ))}
                </div>
                <button className={styles.edit__btn} type="submit">
                    Сохранить изменения
                </button>
            </div>
        </form>
    );
};

export default PersonalEditProfile;




 */













/* import { useState } from "react";
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
    description: string;
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
interface Data {
    id: number,
    email: string,
    auth_date: string,
    user_id: number,
    courses: string,
    phone: string,
    country: string,
    city: string,
    role: string,
    username: string,
    description: string
}
interface Props {
    dataUser: Data
}

const PersonalEditProfile = ({ dataUser }: Props) => {
    const [data, setData] = useState<EditProps>({
        email: "",
        password: "",
        phone: "",
        country: "",
        city: "",
        name: "",
        shortName: "",
        description: "",
        theme: ""
    });

    const handleEdit = async () => {

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
                <button className={styles.edit__btn} type="submit"
                >
                    Сохранить изменения
                </button>

            </div>
        </form>
    );
};

export default PersonalEditProfile;

 */