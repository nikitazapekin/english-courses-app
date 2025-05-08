import { useEffect, useState } from "react";
import styles from "./EditField.module.scss"
interface EditFieldProps {
    item:
    {
        id: number,
        title: string,
        placeholder: string,
        name: string,
        type: string
    },
    handleChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void,
    obj: {
        username: string,
        describtion: string,
        fulldescribtion: string,
        email: string,
        specialization: string,
        level: string,
    }
}
const EditField = ({ item, handleChange, obj }: EditFieldProps) => {
    const defaultValue = obj[item.name as keyof typeof obj] || "";
    const [val, setVal] = useState("")  
    useEffect(() => {
        if (item.type == "email") {
            setVal("admin@example.com")
        }
        if (item.type == "tel") {
            setVal("+375297216547")
        }
    }, [item.name])
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
                  
                    defaultValue={
                        item.name === "email" ? "admin@example.com" :
                        item.name === "tel" ? "+375297216547" :
                        obj[item.name as keyof typeof obj] || ""
                    }
                    //  defaultValue={item.name == "email" || item.name=="tel" ? val :  defaultValue}
                    onChange={(e) => handleChange(e)}
                />
            ) :
                (
                    <textarea
                        name={item.name}
                        className={styles.item__textarea}
                        placeholder={item.placeholder}
                        onChange={(e) => handleChange(e)}
                    />
                )
            }
        </div>);
}

export default EditField;