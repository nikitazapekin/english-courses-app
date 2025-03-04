
import styles from "./EditField.module.scss";
  interface FormTypes {
 /*    username: string;
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
    price: number; */






    
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
   // level: string;
    location: string;
    price: number;
    phone: string
}

interface EditFieldProps {
    item: {
        id: number;
        title: string;
        placeholder: string;
        name: keyof FormTypes; 
        type: string;
    };
    handleChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
    obj: FormTypes; 
}

const EditField = ({ item, handleChange, obj }: EditFieldProps) => {
    const defaultValue = obj[item.name] || "";  
    return (
        <div className={styles.item}>
            <label className={styles.item__title}>
                {item.title}
            </label>
            {item.type !== "textarea" ? (
                <input
                    name={item.name}
                    className={styles.item__input}
                    placeholder={item.placeholder}
                    defaultValue={Array.isArray(defaultValue) ? defaultValue.join(", ") : defaultValue}
                //    defaultValue={typeof defaultValue=="string" ? defaultValue : defaultValue.join('')}
                    onChange={handleChange}
                />
            ) : (
                <textarea
                    name={item.name}
                    className={styles.item__textarea}
                    placeholder={item.placeholder}
                    defaultValue={typeof defaultValue=="string" ? defaultValue : "" }
                    onChange={handleChange}
                />
            )}

     
        </div>
    );
};

export default EditField;






 









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
  
  
    {id: 9, title:"Количество выпускников", placeholder: "Введите количество ваших выпускников", name: "students",  type: "input"},
    {id: 10, title:"Опыт", placeholder: "Введите ваш опыт", name: "experience",  type: "input"},
    {id: 11, title:"Стаж", placeholder: "Введите ваш стаж", name: "durability",  type: "input"},
    {id: 12, title:"Локация", placeholder: "Введите вашу локацию", name: "location",  type: "input"},
    {id: 13, title:"Цена", placeholder: "Введите вашу стоимость занятия", name: "price",  type: "input"},
]

 

{
    "message": "Доступ разрешён",
    "user": {
        "id": 1,
        "id_author": 1,
        "username": "Tutor",
        "email": "tutor@mail.ru",
        "description": "2123123",
        "rate": "0.00",
        "specialization": "Программирование",
        "english_level": "С1",
        "full_description": "описание",
        "role": "tutor",
        "number_of_students": 11,
        "experience": [
            "3"
        ],
        "work_experience": 11,
        "phone": "3243351",
        "location": "dwfwe",
        "price": "21"
    }
}
    */
/* import styles from "./EditField.module.scss"
interface EditFieldProps {
    item:
    {
        id: number,
        title: string,
        placeholder: string,
        name: string,
        type: string
    },
    handleChange: (e:  React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>)=> void,
    obj: {
        username:  string,
        describtion:   string,
        fulldescribtion:  string,
       email:  string,
       specialization:   string,
       level:   string,
    }
}
const EditField = ({ item , handleChange, obj}: EditFieldProps) => {
    const defaultValue = obj[item.name as keyof typeof obj] || "";
    return (
        <div className={styles.item}>
            <label
                className={styles.item__title}
            >
                {item.title}
            </label>
            {item.type != "textarea" ? (

                <input
                name={item.name}
                className={styles.item__input}
                placeholder={item.placeholder}
                defaultValue={defaultValue}
                onChange={(e)=>handleChange(e)}
                />
            )  : 
            (
                <textarea 
                name={item.name}
                className={styles.item__textarea}
                placeholder={item.placeholder}
                onChange={(e)=>handleChange(e)}
                />
            )
        }
        </div>);
}

export default EditField; */