 
import React from 'react';
import styles from "./HelpBtn.module.scss";
import { useNavigate } from 'react-router-dom';

const HelpBtn = () => {
    const navigate = useNavigate()
    const handleNavigate = ()=> {
        navigate("/help")
    }
    return (
        <div className={styles.floatingBtn} onClick={handleNavigate}>
            <button className={styles.helpButton}>?</button>
        </div>
    );
};

export default HelpBtn;


 