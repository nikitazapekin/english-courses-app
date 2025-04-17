import styles from "./WarningsModal.module.scss";

interface Warning {
    id: number,
    warning_text: string,
    warning_date: string,
    is_active: boolean
}

interface Props {
    warnings: Warning[],
    handler: (e: React.MouseEvent) => void
}

const WarningsModal = ({ warnings, handler }: Props) => {
    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        handler(e);
    };

    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className={styles.modal} onClick={handleClose}>
            <div className={styles.modal__content} onClick={handleContentClick}>
                <h1 className={styles.modal__title}>
                    Предупреждения курса:
                </h1>
                {warnings.map(item => (
                    <div key={item.id} className={styles.card}>
                        <p className={styles.card__text}>
                            {item.warning_text}
                        </p>
                        <p className={styles.card__date}>
                            {item.warning_date}
                        </p>
                    </div>
                ))}
            </div>
            <div className={styles.modal__overlay} />

           
        </div>
    );
};

export default WarningsModal;
/* import { useDispatch } from "react-redux";

import styles from "./WarningsModal.module.scss"
import { addAchievement, closeAchievement, setOpenModalAchievements, updateAchievement, } from "../../../../store/slices/AddAchievementSlice/AddAchievementSlice";
import AchievementsService from "../../../../services/Achievements";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AddAchievementSelectorPage } from "../../../../store/selectors/AddAchievementSelector";

interface Warning {
    id: number,
    warning_text: string,
    warning_date: string,
    is_active: boolean
}

interface Props {
    warnings: Warning[],
    handler: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>)=> void
}
const WarningsModal = ({ warnings, handler }: Props) => {
    const dispatch = useDispatch();




    const handleClose = (e:  React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
        handler(e)
       


    }


    return (
        <div className={styles.modal}>
            <div className={styles.modal__content}>
                <h1 className={styles.modal__title}>
                    Предупреждения курса:
                </h1>
                {
                    warnings.map(item => (
                        <div className={styles.card}>
                            <p className={styles.card__text}>
                                {item.warning_text}
                            </p>
                            <p className={styles.card__date}>
                                {item.warning_date}
                            </p>
                        </div>
                    ))
                }
            </div>
            <div className={styles.modal__overlay}
                onClick={(e)=>handleClose(e)}
            />
        </div>
    );
}

export default WarningsModal;








 */