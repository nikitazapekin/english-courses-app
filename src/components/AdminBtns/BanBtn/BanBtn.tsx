
import React from 'react';
import styles from "./BanBtn.module.scss";
 

import { useDispatch } from "react-redux";
import { setIsOpenAddWarningModal, setIsOpenBanModal, setSelectBanCourse, setSelectWarningCourse } from "../../../store/slices/AddWarningModal/AddWarningModal";
interface Props {
    logo?: string,
    id: number
}

const BanBtn = ({ logo, id}: Props) => {

 


    const dispatch = useDispatch()

    
    const handleAddWarning = () => {
       
        dispatch(setIsOpenAddWarningModal())
      dispatch(setSelectWarningCourse(id))
    }
 




    const handleAddBan =()=> {
       
        dispatch(setIsOpenBanModal())
        dispatch(setSelectWarningCourse(id))
    }

    return (
        <div className={styles.floatingBtn} onClick={handleAddBan}>
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

export default BanBtn;



/*
import { Link, useNavigate } from "react-router-dom";
import styles from "./Item.module.scss"
import Ban from "../../../assets/admin/courses/warning.png"
import Edit from "../../../assets/admin/courses/pen.png"
import { useDispatch } from "react-redux";
import { setIsOpenAddWarningModal, setIsOpenBanModal, setSelectBanCourse, setSelectWarningCourse } from "../../../store/slices/AddWarningModal/AddWarningModal";
interface ItemProps {
    item: {
        id: number,
        author: string,
        title: string,
        description: string,
        course_for: String[],
        release_date: string,
        course_logo: string,
    }
    isAdmin: boolean
}
const Item = ({ item, isAdmin }: ItemProps) => {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
    };

    const handleAddWarning = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
        dispatch(setIsOpenAddWarningModal())
        dispatch(setSelectWarningCourse(item.id))
    }
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/card/${item.id}`)
    }

    const dispatch = useDispatch()



    const handleAddBan =(e: React.MouseEvent<HTMLDivElement, MouseEvent>)=> {
        e.stopPropagation()
        dispatch(setIsOpenBanModal())
        dispatch(setSelectWarningCourse(item.id))
    }

   
    */