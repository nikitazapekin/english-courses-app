
import styles from "./EditField.module.scss";
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
                    defaultValue={typeof defaultValue=="string" ? defaultValue : "" }
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