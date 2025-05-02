import TutorAvatar from "../TutorAvatar/TutorAvatar";
import styles from "./TutorPreview.module.scss"

import Tutor from "../../../assets/Tutor/tutor.jpeg"
import TutorDescribtion from "../TutorDescribtion/TutorDescribtion";
import Belarus from "../../../assets/Countries/Belarus.png"
import { useEffect, useState } from "react";
import RatesService from "../../../services/Rates";
import { useLocation } from "react-router-dom";


const tutor = {
    url: Tutor,
    title: "Кирилл",
    country: Belarus,
    citate: "Самое тяжелое, угнетающее, лишающее сил – это так называемые немотивированные ученики.",
    rate: 4.5,
    level: "C1",
    specialization: "Повседневный разговорный английский. Анлийский для менеджеров ",
    descibtion: "Привет! Меня зовут Кирилл, и я репетитор английского языка. В своей работе я нацелен на то, чтобы мои ученики не просто изучали язык, а умели использовать его в реальных ситуациях. Для меня важно, чтобы процесс обучения был не только эффективным, но и увлекательным. Каждый ученик уникален, поэтому я всегда подстраиваю программу под его цели и уровень. Если требуется подготовка к экзамену, мы сосредотачиваемся на грамматике, письме и выполнении экзаменационных заданий. Если цель — свободное общение, то я уделяю максимум времени разговорной практике, постановке произношения и обогащению словарного запаса. Я работаю как с новичками, так и с продвинутыми учениками. Для начинающих я создаю комфортную среду, где не нужно бояться ошибок. Мы изучаем базовые слова, фразы и строим первые предложения, постепенно углубляясь в язык. Для меня главное — это результат. Я убежден, что каждый может выучить английский, если занятия проходят системно и интересно. Использую современные методы: видео, игры, интерактивные задания, чтобы ученики не теряли интерес. Занимаюсь как индивидуально, так и с небольшими группами, в зависимости от предпочтений ученика. Для более сложных целей, например, подготовки к экзамену или изучения делового английского, конечно, лучше индивидуальные уроки. Мой подход — гибкий, но при этом я стараюсь быть требовательным, чтобы ученик чувствовал ответственность за процесс обучения. Главное, чтобы у нас с учеником была одна цель — его успех. Буду рад помочь вам достичь своих целей в изучении английского!"
}


interface Props {
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
        description: string,
        achievements: {
            id: number,
            title: string,
            date: string,
            logo: string
        }[],
        //  achievements: [],
        //     courses: [],

        courses: {
            id: number,
            title: string,
            fulldescription: string,
            course_for: string[],
            course_suitable: string[],
            for_what_reasons: string[],
            about_course: string[],
            tag: string,
            course_rate: number,
            release_date: string,
            course_logo: string,
        }[],
        avatar: string,
    }
}

const TutorPreview = ({ data }: Props) => {
   const location = useLocation();
    const lastPathSegment = location.pathname.split("/").pop();

    const [rate, setRate] = useState(0)
    const handleGet = async () => {
        try {
            const resp = await RatesService.GetMediumRates(Number(lastPathSegment))
            setRate(resp.data.rates.average)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        handleGet()
    }, [])

    return (<section className={styles.tutor}>
        <div className={styles.tutor__info}>

            <TutorAvatar

                url={data.avatar}

            />
            <TutorDescribtion title={data.username} country={data.location} citate={data.description} rate={rate} level={data.english_level} specialization={data.specialization} describtion={""}
            />


        </div>
        <p className={styles.tutor__describtion}>
            {data.full_description}
        </p>
    </section>);
}

export default TutorPreview;