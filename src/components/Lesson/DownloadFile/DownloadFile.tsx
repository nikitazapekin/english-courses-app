import styles from "./DownloadFile.module.scss"

interface DownloadFileProps {
    title: string,
    size: string,
    icon: string,
    file: string
}
const DownloadFile = ({ title, size, icon, file }: DownloadFileProps) => {
    return (
        <a href={file} className={styles.file}>
            <img src={icon} alt="Icon" />
            <p className={styles.file__size}>
                {size}
            </p>
            <p className={styles.file__text}>
                {title}
            </p>
        </a>);
}

export default DownloadFile;