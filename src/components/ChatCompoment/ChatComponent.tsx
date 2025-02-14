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
        username: "Alex",
        logo: Avatar,
        message: "Okay. There is no problem",
        isYourMessage: false,
        isRead: false,
        time: "11:12 12.09.2024"

    },
    {
        id: 2,
        username: "Alex",
        logo: Avatar1,
        message: "Okay. There is no problem",
        isYourMessage: false,
        isRead: false,
        time: "11:12 12.09.2024"

    },
    {
        id: 3,
        username: "Alex",
        logo: Avatar2,
        message: "Okay. There is no problem",
        isYourMessage: false,
        isRead: false,
        time: "11:12 12.09.2024"

    },
    {
        id: 4,
        username: "Alex",
        logo: Avatar,
        message: "Okay. There is no problem",
        isYourMessage: false,
        isRead: false,
        time: "11:12 12.09.2024"

    },
    {
        id: 5,
        username: "Alex",
        logo: Avatar,
        message: "Okay. There is no problem",
        isYourMessage: false,
        isRead: false,
        time: "11:12 12.09.2024"

    },
    {
        id: 6,
        username: "Alex",
        logo: Avatar,
        message: "Okay. There is no problem",
        isYourMessage: false,
        isRead: false,
        time: "11:12 12.09.2024"

    },
    {
        id: 7,
        username: "Alex",
        logo: Avatar,
        message: "Okay. There is no problem",
        isYourMessage: false,
        isRead: false,
        time: "11:12 12.09.2024"

    },
    {
        id: 8,
        username: "Alex",
        logo: Avatar,
        message: "Okay. There is no problem",
        isYourMessage: false,
        isRead: false,
        time: "11:12 12.09.2024"

    },
    {
        id: 9,
        username: "Alex",
        logo: Avatar,
        message: "Okay. There is no problem",
        isYourMessage: false,
        isRead: false,
        time: "11:12 12.09.2024"

    },
    {
        id: 10,
        username: "Alex",
        logo: Avatar,
        message: "Okay. There is no problem",
        isYourMessage: false,
        isRead: false,
        time: "11:12 12.09.2024"

    },


    {
        id: 11,
        username: "Alex",
        logo: Avatar,
        message: "Okay. There is no problem",
        isYourMessage: false,
        isRead: false,
        time: "11:12 12.09.2024"

    },
    {
        id: 12,
        username: "Alex",
        logo: Avatar,
        message: "Okay. There is no problem",
        isYourMessage: false,
        isRead: false,
        time: "11:12 12.09.2024"

    },
    {
        id: 13,
        username: "Alex",
        logo: Avatar,
        message: "Okay. There is no problem",
        isYourMessage: false,
        isRead: false,
        time: "11:12 12.09.2024"

    },
    {
        id: 14,
        username: "Alex",
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
        title: "Alex",
        img: Avatar,


    },


    {
        id: 2,
        title: "Alex",
        img: Avatar,


    },


    {
        id: 3,
        title: "Alex",
        img: Avatar,


    },


    {
        id: 4,
        title: "Alex",
        img: Avatar,


    },

    {
        id: 5,
        title: "Alex",
        img: Avatar,


    },


    {
        id: 6,
        title: "Alex",
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

 