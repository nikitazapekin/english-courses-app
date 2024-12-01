import styles from "./TutorAvatar.module.scss"
interface TutorAvatarProps {
    url: string
}
const TutorAvatar = ({ url }: TutorAvatarProps) => {
    return (<div className={styles.avatar}>
        <div className={styles.avatar__wrapper}>
            <img src={url} alt="Logo"
                className={styles.avatar__image}
            />
            <div className={styles.avatar__btns}>

                <button className={`${styles.avatar__btn} ${styles.avatar__btn__purple}`}>
                    Написать
                </button>
                <button className={`${styles.avatar__btn} ${styles.avatar__btn__green}`}>
                   Пробное занятие
                </button>
            </div>
        </div>
    </div>);
}

export default TutorAvatar;