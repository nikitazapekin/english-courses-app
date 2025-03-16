import { useDispatch } from "react-redux"
import styles from "./ResponsePanel.module.scss"
import { setReply } from "../../../store/slices/ReplyTo.slice"
import { useState } from "react"
import CommentsService from "../../../services/Comments"
import { useLocation } from "react-router-dom"
interface ResponsePanelProps {
id: number,
to: string
handleClose: ()=> void
}
const ResponsePanel = ({id, to, handleClose}: ResponsePanelProps) => {



    const location = useLocation();
    const lastPathSegment = location.pathname.split("/")
    console.log(lastPathSegment[lastPathSegment.length - 2])

    
  const [text, setText ] = useState<string>("")
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }
   const dispatch = useDispatch()
   const handleSend =async () => {


    try {
      // ReplyToComment({ lesson_id, text, replyToComment }:
const response = await CommentsService.ReplyToComment({lesson_id: Number(lastPathSegment[lastPathSegment.length - 2]), replyToComment: String(id), text: text })
    } catch {

    }

/* 
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
})) */
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