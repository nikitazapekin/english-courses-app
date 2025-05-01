import styles from "./EditField.module.scss";

interface EditFieldProps {
  item: {
    id: number;
    title: string;
    placeholder: string;
    name: string;
    type: string;
  };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  defaultValue: string;
}

const EditField = ({ item, handleChange, defaultValue }: EditFieldProps) => {
  return (
    <div className={styles.item}>
      <label className={styles.item__title}>{item.title}</label>
      {item.type !== "textarea" ? (
        <input
          name={item.name}
          className={styles.item__input}
          placeholder={item.placeholder}
          defaultValue={defaultValue}
          onChange={handleChange}
        />
      ) : (
        <textarea
          name={item.name}
          className={styles.item__textarea}
          placeholder={item.placeholder}
          defaultValue={defaultValue}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default EditField;
/* import styles from "./EditField.module.scss";

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

interface EditFieldProps {
    item: {
        id: number;
        title: string;
        placeholder: string;
        name: keyof FormTypes; 
        type: string;
    };
    handleChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
    defaultValue: string;
}

const EditField = ({ item, handleChange, defaultValue }: EditFieldProps) => {
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
                    defaultValue={defaultValue}
                    onChange={handleChange}
                />
            ) : (
                <textarea
                    name={item.name}
                    className={styles.item__textarea}
                    placeholder={item.placeholder}
                    defaultValue={defaultValue}
                    onChange={handleChange}
                />
            )}
        </div>
    );
};

export default EditField; */
/* 
import styles from "./EditField.module.scss";
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
 
}

const EditField = ({ item, handleChange, 

 }: EditFieldProps) => {
 
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
 
                 
                    onChange={handleChange}
                />
            ) : (
                <textarea
                    name={item.name}
                    className={styles.item__textarea}
                    placeholder={item.placeholder}
      
                    onChange={handleChange}
                />
            )}

     
        </div>
    );
};

export default EditField;
  */