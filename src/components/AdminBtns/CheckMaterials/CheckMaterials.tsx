
import React from 'react';
import styles from "./CheckMaterials.module.scss";
 

import { useDispatch } from "react-redux";
import { setIsOpenAddWarningModal, setIsOpenBanModal, setSelectBanCourse, setSelectWarningCourse } from "../../../store/slices/AddWarningModal/AddWarningModal";
import { useNavigate } from 'react-router-dom';
interface Props {
    logo?: string,
    id: number
}

const CheckMaterialBtn = ({ logo, id}: Props) => {

 const navigate = useNavigate()


 
 
const handleNavigate = ()=> {
    navigate(`/card/lessons/${id}`)
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

export default CheckMaterialBtn;


 