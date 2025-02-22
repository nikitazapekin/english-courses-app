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

export default EditField;