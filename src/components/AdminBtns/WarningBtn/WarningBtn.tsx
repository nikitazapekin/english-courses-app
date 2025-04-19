
import React from 'react';
import styles from "./WarningBtn.module.scss";
import { useNavigate } from 'react-router-dom';
interface Props {
    logo?: string
}

const WarningBtn = ({ logo }: Props) => {

    const handleNavigate = () => {

    }
    return (
        <div className={styles.floatingBtn} onClick={handleNavigate}>

            <div
                className={styles.helpButton}
            >
                {logo && (
                    <img src={logo}
                        alt="logo"
                        className={styles.image}
                    />
                )}
            </div>
        </div>
    );
};

export default WarningBtn;


