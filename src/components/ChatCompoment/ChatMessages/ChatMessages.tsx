import ChatMessage from "./ChatMessage";
import styles from "./ChatMessages.module.scss"
import Avatar from "../../../assets/avatars/avatar1.png"
import Avatar1 from "../../../assets/avatars/avatar2.png"
import Avatar2 from "../../../assets/avatars/avatar3.png"
const messages = [
    {
        id: 1,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        username: "Mark",
        time: "11:11 14:12:2024",
        isYourMessage: false,
        logo: Avatar
    },
    {
        id: 2,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        username: "Mark",
        time: "11:11 14:12:2024",
        isYourMessage:  true,
        logo: Avatar2
    },

    {
        id: 3,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        username: "Mark",
        time: "11:11 14:12:2024",
        isYourMessage: false,
        logo: Avatar1
    },
    {
        id: 4,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        username: "Mark",
        time: "11:11 14:12:2024",
        isYourMessage:  true,
        logo: Avatar
    },

    {
        id: 5,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        username: "Mark",
        time: "11:11 14:12:2024",
        isYourMessage: false,
        logo: Avatar
    },
    {
        id: 6,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        username: "Mark",
        time: "11:11 14:12:2024",
        isYourMessage:  true,
        logo: Avatar
    }
]
const ChatMessages = () => {
    return (
        <div className={styles.messages}>
            {messages.map(item => (
                <ChatMessage item={item} key={item.id} />

            ))}
        </div>
    );
}

export default ChatMessages;