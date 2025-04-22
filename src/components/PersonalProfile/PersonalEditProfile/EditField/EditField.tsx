
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
//    obj: FormTypes; 
}

const EditField = ({ item, handleChange, // obj

 }: EditFieldProps) => {
 //   const defaultValue = obj[item.name] || "";  
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
//defaultValue={Array.isArray(defaultValue) ? defaultValue.join(", ") : defaultValue}
                 
                    onChange={handleChange}
                />
            ) : (
                <textarea
                    name={item.name}
                    className={styles.item__textarea}
                    placeholder={item.placeholder}
              //      defaultValue={typeof defaultValue=="string" ? defaultValue : "" }
                    onChange={handleChange}
                />
            )}

     
        </div>
    );
};

export default EditField;
 