import styles from "./PaymentModal.module.scss"
import PayPal from "../../assets/BankCards/pngwing.com (56) 1.png"
import Qiwi from "../../assets/BankCards/qiwi.png"
import Prior from "../../assets/BankCards/prior.png"
import Belarusbank from "../../assets/BankCards/belarusbank.png"
import Alpha from "../../assets/BankCards/alpha.png"
import MasterCard from "../../assets/BankCards/mastercard.png"
import BankCardItem from "./BankCardItem"
const cards = [
    {
        icon: PayPal
    },
    {
        icon: Qiwi
    },
    {
        icon: Prior
    },
    {
        icon: Belarusbank
    },
    {
        icon: Alpha
    },
    {
        icon: MasterCard
    },
]
interface PaymentModalProps {
    isOpenModal: boolean,
    handleOpenModal: () => void
}
const PaymentModal = ({isOpenModal, handleOpenModal}: PaymentModalProps) => {
    return (
        <div className={`${styles.modal} ${isOpenModal ? "" : styles.modal__none}`}>
            <div className={styles.modal__inner}>

                <h2 className={styles.modal__title}>
                    Пополнить баланс
                </h2>
                <div className={styles.modal__cards}>

                    {cards.map((item, index) => (
                        <BankCardItem url={item.icon} key={index} />
                    ))}
                </div>
                <p className={styles.modal__or}>
                    У меня есть промокод или
                    сертификат
                </p>
                <div className={styles.modal__btns}>
                    <button className={`${styles.modal__btn} ${styles.modal__btn__purple}`}>
                        Продолжить
                    </button>
                    <button className={`${styles.modal__btn} ${styles.modal__btn__red}`} onClick={handleOpenModal}>
                        Отмена
                    </button>
                </div>
            </div>
            <div className={styles.modal__overlay} />
        </div>);
}

export default PaymentModal;