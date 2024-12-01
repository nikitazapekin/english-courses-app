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
const TutorComponent = () => {


    return (<div className={styles.tutor}>
        <div className={styles.tutor__inner}>
            <TutorPreview />

            <TurorSwiper items={items} title={"Курсы и сертификаты"} />

            <TurorSwiper items={items1} title={"Образовательные программы"} />

            <OtherTutors />
        </div>
    </div>);
}

export default TutorComponent;