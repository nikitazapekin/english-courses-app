import styles from "./ChatComponent.module.scss";
import ChatList from "./ChatList/ChatList";
import Avatar from "../../assets/avatars/avatar1.png";
import { useState } from "react";
import Swiper from "./ChatSwiper/ChatSwiper";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatPanel from "./ChatPanel/ChatPanel";
import ChatMessages from "./ChatMessages/ChatMessages";
import Avatar1 from "../../assets/avatars/avatar2.png"
import Avatar2 from "../../assets/avatars/avatar3.png"
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
        logo: Avatar1,
        message: "Okay. There is no problem",
        isYourMessage: false,
        isRead: false,
        time: "11:12 12.09.2024"

    },
    {
        id: 3,
        username: "Alexander",
        logo: Avatar2,
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

const swiperItems = [

    {
        id: 1,
        title: "Alexander",
        img: Avatar,


    },


    {
        id: 2,
        title: "Alexander",
        img: Avatar,


    },


    {
        id: 3,
        title: "Alexander",
        img: Avatar,


    },


    {
        id: 4,
        title: "Alexander",
        img: Avatar,


    },

    {
        id: 5,
        title: "Alexander",
        img: Avatar,


    },


    {
        id: 6,
        title: "Alexander",
        img: Avatar,


    },
]

const ChatComponent = () => {
    const [isSelected, setIsSelected] = useState<boolean>(false);

    const handleSelect = () => {
        setIsSelected(true);
    };

    return (
        <div className={styles.chat}>
         
            <div className={`
                ${styles.chat__panel} 
                ${isSelected ? styles["chat__panel--hidden"] : ""}
            `}>
                <Swiper items={swiperItems} />
                <ChatList 
                    data={data}
                    handleSelect={handleSelect} 
                />
            </div>
 
            <div className={`
                ${styles.chat__content} 
                ${isSelected ? styles["chat__content--visible"] : styles["chat__content__none"]}
            `}>
                {isSelected ? (
                    <>
                        <ChatHeader username="Alex" />
                        <ChatMessages />
                        <ChatPanel />
                    </>
                ) : (
                    <h2 className={styles.chat__title}>
                        Пожалуйста, выберите чат
                    </h2>
                )}
            </div>
        </div>
    );
};

export default ChatComponent;

 