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

 import Avatar2 from "../../assets/avatars/avatar2.png"
import Avatar3 from "../../assets/avatars/avatar3.png"
import Avatar4 from "../../assets/avatars/avatar4.png"
import { useEffect, useState } from "react";
import TutorService from "../../services/Tutor";
import { useLocation } from "react-router-dom";
import { response } from "express";
import TutorCoursesCarousel from "./TurorCoursesCarousel/TutorCarousel";

 

interface TutorOtherInfoDetails {           
    message:  string,
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
        achievements: {
            id: number,
            title: string,
            date: string,
            logo:string
        }[],
      
        description: string,
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
      //  courses: [],
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
               
                setData(reponse.data)
            } catch (e) {
                console.log(e)
            }
        }
        handleGet()
    }, [lastSegment])






const [offset, setOffset] = useState(0)
    const [anotherTutors, setAnotherTutors] = useState<TutorOtherInfoDetails>({

        message: "",
        data: {
            tutors: [],
            pagination: {
                total: 0,
                limit: 10,
                offset: 0,
                hasMore: false
            }
        }
   
    }
    )
    useEffect(() => {
        const handleGet = async () => {
            try {
                const reponse = await TutorService.getOtherTutorInfo(lastSegment!, offset)
               console.log("ANOT", reponse.data)
                setAnotherTutors(reponse.data)
            } catch (e) {
                console.log(e)
            }
        }
        handleGet()
    }, [lastSegment])
 
const handlePageOffset =(id: number) => {
    setOffset(id)
}
    return (<div className={styles.tutor}>
        <div className={styles.tutor__inner}>
            <TutorAdd />


            <TutorPreview  data={data.data} />
            <TutorCarousel items={data.data.achievements} title={"Достижения"} />
            <TutorCoursesCarousel 
            title="Курсы"
            items={data.data.courses}
            />
       
            <OtherTutors
            offset={offset}
            handlePageOffset={handlePageOffset}
          
           data={anotherTutors.data}
            />

        </div>
    </div>);
}

export default TutorComponent;