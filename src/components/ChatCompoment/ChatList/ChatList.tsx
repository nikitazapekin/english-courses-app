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

    }[],
    handleSelect: ()=> void
}

const ChatList = ({ data, handleSelect }: ChatListProps) => {
    return (
        <div className={styles.list}>
            {
                data.map(item => (
                    <ChatListCard item={item} 
                    handleSelect={handleSelect}
                    />
                ))
            }

        </div>

    );
}

export default ChatList;