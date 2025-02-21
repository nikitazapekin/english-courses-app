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
}
const EditField = ({ item }: EditFieldProps) => {
    return (
        <div className={styles.item}>
            <label
                className={styles.item__title}
            >
                {item.title}
            </label>
            <input
                className={styles.item__input}
                placeholder={item.placeholder}
            />
        </div>);
}

export default EditField;