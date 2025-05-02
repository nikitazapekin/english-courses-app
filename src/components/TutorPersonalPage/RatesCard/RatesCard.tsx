import styles from "./RatesCard.module.scss";

interface Props {
    id: number,
    tutor_id: number,
    author_id: number,
    rate: string,
    text: string,
    created_at: string,
    author_username: string,
    author_email: string,
    author_description: string,
    author_avatar_path: string,
    author_avatar: string
}

interface CardProps {
    item: Props
}

const RatesCard = ({ item }: CardProps) => {
   
    const rating = parseFloat(item.rate);
    
   
    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
      
        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <div key={`full-${i}`} className={styles.stars__starContainer}>
                    <div className={styles.stars__star} />
                </div>
            );
        }
        
     
        if (hasHalfStar) {
            stars.push(
                <div key="half" className={styles.stars__starContainer}>
                    <div className={styles.stars__starSliced} />
                </div>
            );
        }
        
        
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <div key={`empty-${i}`} className={styles.stars__starContainer}>
                    <div className={styles.stars__star} style={{ background: '#ccc' }} />
                </div>
            );
        }
        
        return stars;
    };

    return (
        <div className={styles.card}>
            <div className={styles.card__content}>
                <div className={styles.logo}>
                    <img 
                        src={item.author_avatar}
                        alt="logo"
                        className={styles.card__image}
                    />
                </div>

                <div className={styles.card__preview}>
                    <h3 className={styles.card__title}>
                        {item.author_username}, {item.author_email}
                    </h3>
                    <div className={styles.stars}>
                        {renderStars()}
                        <span style={{ marginLeft: '10px', fontSize: '18px' }}>{rating.toFixed(1)}</span>
                    </div>
                    <p className={styles.card__text}>
                        {item.text}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RatesCard; 