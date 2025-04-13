import styles from "./Tutor.module.scss"
import TutorPreview from "./TutorPreview/TutorPreview";
import TurorSwiper from "./TutorSwiper/TutorSwiper";
import Course1 from "../../assets/Tutor/course1.jpeg"
import Course2 from "../../assets/Tutor/course2.png"
import Course3 from "../../assets/Tutor/course3.png"
import Course4 from "../../assets/Tutor/course4.png"

import Prog1 from "../../assets/Tutor/programs/prog1.jpeg"
import Prog2 from "../../assets/Tutor/programs/prog2.jpeg"
import Prog3 from "../../assets/Tutor/programs/prog3.png"
import Prog4 from "../../assets/Tutor/programs/prog4.jpeg"
import OtherTutors from "./OtherTutors/OtherTutors";
import TutorAdd from "./TutorAdd/TutorAdd";
import TutorCarousel from "./TutorCarousel/TutorCarousel";

import Avatar1 from "../../assets/avatars/avatar1.png"
import Avatar2 from "../../assets/avatars/avatar2.png"
import Avatar3 from "../../assets/avatars/avatar3.png"
import Avatar4 from "../../assets/avatars/avatar4.png"
import { useEffect, useState } from "react";
import TutorService from "../../services/Tutor";
import { useLocation } from "react-router-dom";
import { response } from "express";


const items = [

    {
        title: "Rs school B1 (Intermideate) course",
        img: Course1,
        experience: "22.10.2022-20.11.2022",

    },
    {
        title: "Rs school B1 (Intermideate) course",
        img: Course2,
        experience: "22.10.2022-20.11.2022",

    },
    {
        title: "Rs school B1 (Intermideate) course",
        img: Course3,
        experience: "22.10.2022-20.11.2022",

    },

    {
        title: "Rs school B1 (Intermideate) course",
        img: Course4,
        experience: "22.10.2022-20.11.2022",

    },



];


const items1 = [

    {
        title: "Английский для самых маленьких",
        img: Prog1,
        experience: "30 руб",

    },
    {
        title: "Жаргонный английский для поддержания диалогов",
        img: Prog2,
        experience: "45 руб",

    },
    {
        title: "Английский для детей дошкольного возраста",
        img: Prog3,
        experience: "44 руб",

    },

    {
        title: "Английский для инженеров и студентов технических специальностей",
        img: Prog4,
        experience: "50 руб",

    },

    {
        title: "Английский для самых маленьких",
        img: Prog1,
        experience: "30 руб",

    },
    {
        title: "Жаргонный английский для поддержания диалогов",
        img: Prog2,
        experience: "45 руб",

    },
    {
        title: "Английский для детей дошкольного возраста",
        img: Prog3,
        experience: "44 руб",

    },

    {
        title: "Английский для инженеров и студентов технических специальностей",
        img: Prog4,
        experience: "50 руб",

    },



];

const items2 = [

    {
        title: "Кирилл",
        img: Avatar1,
        experience: "Замечательный репетитор с прекрасными курсами, позволяющие освоить сложный материал к короткое время",
        rate: 4.5
    },
    {
        title: "Кирилл",
        img: Avatar2,
        experience: "Замечательный репетитор с прекрасными курсами, позволяющие освоить сложный материал к короткое время",
        rate: 5
    },
    {
        title: "Кирилл",
        img: Avatar3,
        experience: "Замечательный репетитор с прекрасными курсами, позволяющие освоить сложный материал к короткое время",
        rate: 5
    },
    {
        title: "Кирилл",
        img: Avatar4,
        experience: "Замечательный репетитор с прекрасными курсами, позволяющие освоить сложный материал к короткое время",
        rate: 4.5
    },

];


 

export interface TutorInfoDetails {
    message: string,
    data: {
        id: number,
        id_author: number,
        username: string,
        email: string,
        rate: string,
        specialization: string,
        english_level: string,
        full_description: string,
        role: string,
        number_of_students: number,
        experience: string[],
        work_experience: number,
        phone: string,
        location: string,
        price: number,
        achievements: [],
        description: string,
        courses: [],
        avatar: string,
    }
}

const TutorComponent = () => {
    const location = useLocation();
    const lastSegment = location.pathname.split('/').pop();

    const [data, setData] = useState<TutorInfoDetails>({

        message: "",
        data: {
            id: 0,
            id_author: 0,
            username: "",
            email: "",
            rate: "",
            specialization: "",
            english_level: "",
            full_description: "",
            role: "",
            number_of_students: 0,
            experience: [],
            work_experience: 0,
            phone: "",
            location: "",
            description: "",
            price: 0,
            achievements: [],
            courses: [],
            avatar: "",
        }
    }

    )
    useEffect(() => {
        const handleGet = async () => {
            try {
                const reponse = await TutorService.getTutorInfo(lastSegment!)
                console.log(reponse.data)
                setData(reponse.data)
            } catch (e) {
                console.log(e)
            }
        }
        handleGet()
    }, [])



    return (<div className={styles.tutor}>
        <div className={styles.tutor__inner}>
            <TutorAdd />


            <TutorPreview  data={data.data} />


            <TutorCarousel items={items} title={"Курсы и сертификаты"} />
            <TutorCarousel items={items1} title={"Курсы и сертификаты"} />


            <TutorCarousel items={items2} title={"Отзывы о репетиторе"} />
            <OtherTutors />

        </div>
    </div>);
}

export default TutorComponent;