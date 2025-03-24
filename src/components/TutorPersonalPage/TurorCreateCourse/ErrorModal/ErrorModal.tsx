import styles from "./ErrorModal.module.scss"
interface ErrorProps {
    message: string,
    handler: ()=>void
}
const ErrorModal = ({ message, handler }: ErrorProps) => {
    return (<div className={styles.modal}>
        <div className={styles.modal__inner}>

            <h3 className={styles.modal__title}>
                Уппс...
            </h3>
            <h4 className={styles.modal__subtitle}>
                {message}
            </h4>
            <button onClick={handler}
            className={styles.modal__btn}
            >
                Ок
            </button>
        </div>

        <div className={styles.modal__overlay}
        onClick={handler}
        />

    </div>);
}

export default ErrorModal;