import styles from "./PaymentModal.module.scss"
interface BankCardItemProps {
    url: string
}
const BankCardItem = ({url}: BankCardItemProps) => {
    return ( 
<div className={styles.item}>
<img className={styles.item__image} src={url} alt="Card" />
</div>
     );
}
 
export default BankCardItem;