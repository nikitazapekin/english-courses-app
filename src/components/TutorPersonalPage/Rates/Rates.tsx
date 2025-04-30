import { useState, ChangeEvent, useEffect } from "react";
import styles from "./Rates.module.scss";

import TutorPamel from "../TutorPanel/TutorPanel";
import { useSelector } from "react-redux";
import { TutorSelector } from "../../../store/selectors/Tutor.selector";
import RatesCard from "../RatesCard/RatesCard";
import RatesService from "../../../services/Rates";


interface FormState {
    name: string;
    description: string;
    for: string;
    logo: string;
    course_for: string[];
    fulldescription: string;
    for_what_reasons: string[];
    about_course: string[];
    tag: string;
}


interface Props {
   
            id: number,
            tutor_id: number,
            author_id:number ,
            rate: string,
            text:string,
            created_at: string, 
            author_username:string,
            author_email: string,
            author_description: string,
            author_avatar_path:  string,
            author_avatar: string
         
     
       
}




let arr = []
for (let i = 0; i < 10; i++) {
    arr.push(i)
}


const RatesComponent: React.FC = () => {
    const tutor = useSelector(TutorSelector);
    const [cards, setCards] = useState<Props[]>([])
    const handleGet = async () => {
        try {
            const resp = await RatesService.GetRates(tutor.user.id)
            console.log(resp.data)
            setCards(resp.data.rates)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        handleGet()
    }, [])
    return (
        <section className={styles.panel}>
            <div className={styles.panel__container}>
                <div className={styles.panel__content}>
                    <div className={styles.panel__header}>
                        <h1 className={styles.panel__header__title}>Отзывы репетитора</h1>
                    </div>
                    <div className={styles.cards}>
                    {cards.map((item, index) => (
                            <RatesCard
                                key={index}
                                item={item}
                                />
                                ))}
                                </div>
                                {/*
                                */}
                </div>
            </div>

        </section>
    );
};

export default RatesComponent;
