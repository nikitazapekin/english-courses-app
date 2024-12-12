import styles from "./ChatComponent.module.scss"
import ChatList from "./ChatList/ChatList";
import Avatar from "../../assets/avatars/avatar1.png"
import { useState } from "react";
 
const data = [
    {
        id: 1,
        username: "Alexander",
        logo: Avatar,
        message: "Okay. There is no problem",
        isYourMessage: false,
        isRead: false,
        time: "11:12 12.09.2024"

    },
    {
        id: 2,
        username: "Alexander",
        logo: Avatar,
        message: "Okay. There is no problem",
        isYourMessage: false,
        isRead: false,
        time: "11:12 12.09.2024"

    },
    {
        id: 3,
        username: "Alexander",
        logo: Avatar,
        message: "Okay. There is no problem",
        isYourMessage: false,
        isRead: false,
        time: "11:12 12.09.2024"

    },
    {
        id: 4,
        username: "Alexander",
        logo: Avatar,
        message: "Okay. There is no problem",
        isYourMessage: false,
        isRead: false,
        time: "11:12 12.09.2024"

    },
    {
        id: 5,
        username: "Alexander",
        logo: Avatar,
        message: "Okay. There is no problem",
        isYourMessage: false,
        isRead: false,
        time: "11:12 12.09.2024"

    },
    {
        id: 6,
        username: "Alexander",
        logo: Avatar,
        message: "Okay. There is no problem",
        isYourMessage: false,
        isRead: false,
        time: "11:12 12.09.2024"

    },
    {
        id: 7,
        username: "Alexander",
        logo: Avatar,
        message: "Okay. There is no problem",
        isYourMessage: false,
        isRead: false,
        time: "11:12 12.09.2024"

    },
    {
        id: 8,
        username: "Alexander",
        logo: Avatar,
        message: "Okay. There is no problem",
        isYourMessage: false,
        isRead: false,
        time: "11:12 12.09.2024"

    },
    {
        id: 9,
        username: "Alexander",
        logo: Avatar,
        message: "Okay. There is no problem",
        isYourMessage: false,
        isRead: false,
        time: "11:12 12.09.2024"

    },
    {
        id: 10,
        username: "Alexander",
        logo: Avatar,
        message: "Okay. There is no problem",
        isYourMessage: false,
        isRead: false,
        time: "11:12 12.09.2024"

    },


    {
        id: 11,
        username: "Alexander",
        logo: Avatar,
        message: "Okay. There is no problem",
        isYourMessage: false,
        isRead: false,
        time: "11:12 12.09.2024"

    },
    {
        id: 12,
        username: "Alexander",
        logo: Avatar,
        message: "Okay. There is no problem",
        isYourMessage: false,
        isRead: false,
        time: "11:12 12.09.2024"

    },
    {
        id: 13,
        username: "Alexander",
        logo: Avatar,
        message: "Okay. There is no problem",
        isYourMessage: false,
        isRead: false,
        time: "11:12 12.09.2024"

    },
    {
        id: 14,
        username: "Alexander",
        logo: Avatar,
        message: "Okay. There is no problem",
        isYourMessage: false,
        isRead: false,
        time: "11:12 12.09.2024"

    },
]
const ChatComponent = () => {

    const [isSelected, setIsSelected] = useState<boolean>(false)
    return (
    
    <>
    <div className={styles.chat}>

        <div className={styles.chat__panel}>
            <ChatList data={data} />
        </div>
        <div className={`${styles.chat__content} ${!isSelected ?  styles.chat__content__none : ""}`}>


<h2 className={styles.chat__title}>
   Пожалуйста, выберите чат 
</h2>
        </div>
    </div>
 
    </>
    );
}

export default ChatComponent;