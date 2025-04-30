import { useState } from "react";
import styles from "./ErrorsModal.module.scss";
import RatesService from "../../../services/Rates";
import { useLocation } from "react-router-dom";
 
interface Props {
    handler: () => void;
}

const RateModal = ({ handler }: Props) => {
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editedText, setEditedText] = useState<string>("");
    const [rating, setRating] = useState<number>(0);
    const [hoverRating, setHoverRating] = useState<number | null>(null);

    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        handler();
    };

    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
    };

    const handleStarClick = (value: number) => {
        setRating(value);
    };

    const handleStarHover = (value: number | null) => {
        setHoverRating(value);
    };

    const handleStarHoverPosition = (e: React.MouseEvent<HTMLSpanElement>, index: number) => {
        const star = e.currentTarget;
        const rect = star.getBoundingClientRect();
        const isLeftHalf = e.clientX - rect.left < rect.width / 2;
        
        if (isLeftHalf) {
            setHoverRating(index + 0.5);
        } else {
            setHoverRating(index + 1);
        }
    };

    const handleStarClickPosition = (e: React.MouseEvent<HTMLSpanElement>, index: number) => {
        const star = e.currentTarget;
        const rect = star.getBoundingClientRect();
        const isLeftHalf = e.clientX - rect.left < rect.width / 2;
        
        if (isLeftHalf) {
            setRating(index + 0.5);
        } else {
            setRating(index + 1);
        }
    };

    const renderStars = () => {
        const stars = [];
        const displayRating = hoverRating !== null ? hoverRating : rating;
        
        for (let i = 0; i < 5; i++) {
            const starValue = i + 1;
            const isFilled = displayRating >= starValue;
            const isHalfFilled = displayRating >= i + 0.5 && displayRating < starValue;
            
            stars.push(
                <span
                    key={i}
                    className={styles.stars__starContainer}
                    onMouseEnter={() => handleStarHover(i + 1)}
                    onMouseLeave={() => handleStarHover(null)}
                    onClick={() => handleStarClick(i + 1)}
                >
                    {isFilled ? (
                        <span className={styles.stars__star} />
                    ) : isHalfFilled ? (
                        <span className={styles.stars__starSliced} />
                    ) : (
                        <span className={styles.stars__star} style={{ backgroundColor: '#ccc' }} />
                    )}
                </span>
            );
        }
        
        return stars;
    };

    const renderPreciseStars = () => {
        const stars = [];
        
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span
                    key={i}
                    className={styles.stars__starContainer}
                    onMouseMove={(e) => handleStarHoverPosition(e, i)}
                    onClick={(e) => handleStarClickPosition(e, i)}
                    onMouseLeave={() => handleStarHover(null)}
                >
                    {hoverRating !== null && hoverRating >= i + 1 ? (
                        <span className={styles.stars__star} />
                    ) : hoverRating !== null && hoverRating >= i + 0.5 ? (
                        <span className={styles.stars__starSliced} />
                    ) : rating >= i + 1 ? (
                        <span className={styles.stars__star} />
                    ) : rating >= i + 0.5 ? (
                        <span className={styles.stars__starSliced} />
                    ) : (
                        <span className={styles.stars__star} style={{ backgroundColor: '#ccc' }} />
                    )}
                </span>
            );
        }
        
        return stars;
    };
    const location = useLocation(); 
    const lastPathSegment = location.pathname.split('/').filter(Boolean).pop();
    const handleAdd = async ()=> {
        try {
await RatesService.CreateRate(Number(lastPathSegment),rating, editedText )
handler();
        } catch(e) {

        }
    }
    return (
        <div className={styles.modal} onClick={handleClose}>
            <div className={styles.modal__content} onClick={handleContentClick}>
                <h1 className={styles.modal__title}>
                    Добавить отзыв репетитору
                </h1>

                <div className={styles.modal__fields}>
                    <div className={styles.stars}>
                        {renderPreciseStars()}
                        <div style={{ marginLeft: '10px' }}>
                            Текущая оценка: {rating.toFixed(1)}
                        </div>
                    </div>
                    <textarea
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                        placeholder="Добавьте отзыв репетитору"
                        className={styles.modal__input}
                    />
                </div>

                <div className={styles.btns}>
                    <button
                        className={`${styles.modal__btn}`}
                        type="button"
                        onClick={handleAdd}
                    >
                        Добавить отзыв
                    </button>

                    <button
                        className={`${styles.modal__btn} ${styles.modal__delete}`}
                        type="button"
                        onClick={handleClose}
                    >
                        Закрыть
                    </button>
                </div>
            </div>
            <div className={styles.modal__overlay} />
        </div>
    );
};

export default RateModal;