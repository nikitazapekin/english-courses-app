import styles from "./ChatPanel.module.scss"
import Send from "../../../assets/icons/send.png"
import Happy from "../../../assets/icons/happy.png"
import Clip from "../../../assets/icons/clip.png"
import Microphone from "../../../assets/icons/microphone.png"
const ChatPanel = () => {
    return (
        <div className={styles.panel}>
            <div className={styles.panel__messageBox}>
                <input type="text"
                placeholder="Введите ваше сообщение"
                    className={styles.panel__input}
                />
                      <img className={styles.panel__image} src={Happy} alt="send" />
                      <img className={styles.panel__image} src={Clip} alt="send" />
                      <img className={styles.panel__image} src={Microphone} alt="send" />
            </div>
            
             <img src={Send} alt="send" 
             className={styles.panel__send}
             />
          
        </div>
    );
}

export default ChatPanel;