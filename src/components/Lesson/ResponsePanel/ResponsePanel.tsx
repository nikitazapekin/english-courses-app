import { useDispatch } from "react-redux"
import styles from "./ResponsePanel.module.scss"
import { setReply } from "../../../store/slices/ReplyTo.slice"
import { useState } from "react"
interface ResponsePanelProps {
id: number,
to: string
handleClose: ()=> void
}
const ResponsePanel = ({id, to, handleClose}: ResponsePanelProps) => {

  const [text, setText ] = useState<string>("")
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }
   const dispatch = useDispatch()
   const handleSend = () => {

dispatch(setReply({

    userId: Date.now(),  
  //  username: `Вы пользователю ${to}`, 
  username: "Вы",
    comment: text,  
    date: new Date().toLocaleDateString(), 
    avatar: "", 
    likes: 0, 
    isYourComment: true, 
    to: to,
    commentId: id,
}))
   }
    return (
        <div className={styles.reply}>
            <input type="text" className={styles.reply__input} placeholder="Напишите ваш ответ" 
            onChange={(event)=>handleChange(event)}
            />
            <div className={styles.reply__btns}>
                <div className={styles.reply__btn}
                onClick={handleClose}
                >Отмена</div>
                <div className={`${styles.reply__btn} ${styles.reply__btn__send}`} onClick={handleSend}> Отправить</div>
            </div>
        </div>);
}

export default ResponsePanel;