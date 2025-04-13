import OtherTutorCard from "./OtherTutorCard";
import styles from "./OtherTutors.module.scss"
import Tutor from "../../../assets/Tutor/tutor.jpeg"
import PersonalDots from "../Dots/Dots";

import Tutor1 from "../../../assets/swiper/tutor1.png"


import Tutor2 from "../../../assets/swiper/tutor2.jpeg"

import Tutor3 from "../../../assets/swiper/tutor3.jpeg"

import { useState } from "react";
import Dots from "../Dots/Dots";
import { useNavigate } from "react-router-dom";
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





interface Props {
    offset: number,
    handlePageOffset: (id: number) => void
 data: {
    tutors:  {

        id: number,
        id_author: number,
    username:  string,
    email: string,
    rate: string,
    specialization: string,
    english_level:  string,
    full_description: string,
    
    
    role: string,
    number_of_students: number,
    experience:  string[],
    work_experience:number,
    phone: string,
    location: string,
    price: number,
    achievements: {
        id: number,
        title: string,
        date: string,
        logo:string
    }[],
    courses: {
        id: number,
        title:  string,
        fulldescription: string,
        course_for: string[],
        course_suitable:string[],
        for_what_reasons: string[],
        about_course: string[],
        tag: string,
        course_rate:number,
        release_date:  string,
        course_logo: string,
    }[],
    
    //[],
    description: string,
    avatar:  string,
}[] ,


    pagination: {
        total: number,
        limit: number,
        offset: number,
        hasMore: boolean
    }

}
}
const OtherTutors = ({data, offset, handlePageOffset} : Props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(tutors.length / ITEMS_PER_PAGE);
  
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
 
  
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };

 
    return (
        <section className={styles.tutors}>
            <h2 className={styles.tutors__title}>
                Другие репетиторы
            </h2>

            <div className={styles.tutors__list}>
                {data.tutors.map((item, index) => (

                    <OtherTutorCard
                        key={index}
                        title={item.username}
                        url={item.avatar}
                     //   description={item.description}
                        id={item.id}
                        rate={Number(item.rate)}
                        rateNumber={Number(item.rate)}
                        describtion={item.description}
                    />
                ))}
            </div>
            {/*
                <Dots  totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange}/>
                */}

<Dots  totalPages={data.pagination.total} currentPage={offset} onPageChange={handlePageOffset}/>
        </section>
    );
}

export default OtherTutors;