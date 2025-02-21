import styles from "./EditProfile.module.scss"
import { editArray } from "./Consts";
import EditField from "../EditField/EditField";
const EditProfile = () => {
    return (
        <div className={styles.edit}>
            <h1 className={styles.edit__title}>
                Редактировать профиль
            </h1>
            <div className={styles.edit__content}>

                {editArray.map(item => (
                    <EditField
                        item={item}
                    />

                ))}
            </div>
        </div>);
}

export default EditProfile;