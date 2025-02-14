import { useState, useEffect } from "react";
import styles from "./NavigateBtn.module.scss";

const NavigateBtn = () => {
    const [isVisible, setIsVisible] = useState(false);
    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        setIsVisible(scrollTop > window.innerHeight);  
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const handleNavigate = () => {
        window.scrollTo({ top: 0, behavior: "smooth" }); 
    };
    return isVisible ? (
        <div className={styles.floatingBtn} onClick={handleNavigate}>
            <button className={styles.helpButton}>↑</button>
        </div>
    ) : null;  
};

export default NavigateBtn;
 