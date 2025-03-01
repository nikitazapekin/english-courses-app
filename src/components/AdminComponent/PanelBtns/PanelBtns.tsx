import PanelBtn from "../PanelBtn/PanelBtn";
import { panelBtns } from "./Consts";
import styles from "./PanelBtns.module.scss"
const PanelBtns = () => {
    return (
        <div className={styles.panel}>
            {panelBtns.map(item => (
                <PanelBtn
                    key={item.id}
                    item={item}
                />
            ))}

        </div>);
}

export default PanelBtns;