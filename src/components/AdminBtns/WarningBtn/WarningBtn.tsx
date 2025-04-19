
import React from 'react';
import styles from "./WarningBtn.module.scss";
import { useNavigate } from 'react-router-dom';



import { useDispatch } from "react-redux";
import { setIsOpenAddWarningModal, setIsOpenBanModal, setSelectBanCourse, setSelectWarningCourse } from "../../../store/slices/AddWarningModal/AddWarningModal";
interface Props {
    logo?: string,
    id: number
}

const WarningBtn = ({ logo, id }: Props) => {

    
    const dispatch = useDispatch()

    
    const handleAddWarning = () => {
       
        dispatch(setIsOpenAddWarningModal())
      dispatch(setSelectWarningCourse(Number(id!)))
    }
 

    return (
        <div className={styles.floatingBtn} onClick={handleAddWarning}>
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


