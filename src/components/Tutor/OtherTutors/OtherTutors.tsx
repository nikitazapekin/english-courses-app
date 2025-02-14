import OtherTutorCard from "./OtherTutorCard";
import styles from "./OtherTutors.module.scss"
import Tutor from "../../../assets/Tutor/tutor.jpeg"
import PersonalDots from "../Dots/Dots";

import Tutor1 from "../../../assets/swiper/tutor1.png"


import Tutor2 from "../../../assets/swiper/tutor2.jpeg"

import Tutor3 from "../../../assets/swiper/tutor3.jpeg"

import { useState } from "react";
import Dots from "../Dots/Dots";
const tutors = [
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4.5,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor1,

    },
    {
        title: "Виктор",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor1,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor3,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Олег",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },





    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4.5,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Виктор",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Олег",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },

    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4.5,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Виктор",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Олег",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },





    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4.5,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Виктор",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Олег",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },
    {
        title: "Сергей",
        rate: 4,
        describtion: "Всем привет! Я являюсь репетитором англйиского языка ...",
        rateNumber: 100,
        url: Tutor,

    },

]


const ITEMS_PER_PAGE = 8
const OtherTutors = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(tutors.length / ITEMS_PER_PAGE);
  
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentData = tutors.slice(startIndex, endIndex);
  
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
    return (
        <section className={styles.tutors}>
            <h2 className={styles.tutors__title}>
                Другие репетиторы
            </h2>

            <div className={styles.tutors__list}>
                {currentData.map((item, index) => (

                    <OtherTutorCard
                        key={index}
                        title={item.title}
                        url={item.url}
                        rate={item.rate}
                        rateNumber={item.rateNumber}
                        describtion={item.describtion}
                    />
                ))}
            </div>
                <Dots  totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange}/>
        </section>
    );
}

export default OtherTutors;