 
import styles from "./LessonPanel.module.scss"
import Personal from "../../../assets/Personal/Avatar.png"
import { useEffect, useState } from "react"
import CommentsService from "../../../services/Comments"
import { useLocation } from "react-router-dom"
interface User {
 
         id: number,
         email: string,
         auth_date: string,
         user_id: number,
         courses: string,
         phone: string,
         country: string,
         city: string,
         role: string,
         username: string,
         description: string
 
   }
   
interface LessonPanelProps {
    handleAddComment: (text: string)=> void,
    user: User, 
    avatar: string
}


const LessonPanel = ({handleAddComment, user, avatar}: LessonPanelProps ) => {

    
    
    const location = useLocation();
    const lastPathSegment = location.pathname.split("/")
    console.log(lastPathSegment)
const [text, setText] =useState("")
    const handleSend =async ()=> {
       handleAddComment(text)
/* const response = CommentsService.CreateComment(
    //wdq
    {
        lesson_id:1,
        text: ""
        }
        
    )
    */
    }
    const handleChange = (event:  React.ChangeEvent<HTMLTextAreaElement>) => {
setText(event.target.value)
    }
    return (
        <section className={styles.panel}>
            <div className={styles.panel__inner}>
                <div className={styles.panel__preview}>

               
                    <img
                    src={avatar}
                    //src={Personal} 
                    
                    alt="Logo"
                    className={styles.panel__image}
                    />
                    <p className={styles.panel__title}> 
                        Вы <br /> ({user && user.username})
                    </p>
                </div>
                <div className={styles.panel__content}>
                    <textarea placeholder="Оставьте ваш комментарий" 
                    onChange={(event)=>handleChange(event)}
                    className={styles.panel__area}
                    />
                    <div className={styles.panel__btn} onClick={ handleSend}>
                        Отправить
                    </div>
                </div>
            </div>
        </section>);
}

export default LessonPanel;
 