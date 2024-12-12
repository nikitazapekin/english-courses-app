import ChatListCard from "../ChatListCard/ChatListCard";
import styles from "./ChatList.module.scss"
interface ChatListProps {
    data: {
        id: number,
        username: string,
        logo: string,
        message: string,
        isYourMessage: boolean,
        isRead: boolean,
        time: string

    }[]
}

const ChatList = ({ data }: ChatListProps) => {
    return (
        <div className={styles.list}>
            {
                data.map(item => (
                    <ChatListCard item={item} />
                ))
            }

        </div>

    );
}

export default ChatList;