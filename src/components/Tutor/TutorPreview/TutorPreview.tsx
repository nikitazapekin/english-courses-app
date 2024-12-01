import TutorAvatar from "../TutorAvatar/TutorAvatar";
import styles from "./TutorPreview.module.scss"

import Tutor from "../../../assets/Tutor/tutor.jpeg"
import TutorDescribtion from "../TutorDescribtion/TutorDescribtion";
import Belarus from "../../../assets/Countries/Belarus.png"
const tutor = {
    url: Tutor,
    title: "Кирилл",
    country: Belarus,
    citate: "Самое тяжелое, угнетающее, лишающее сил – это так называемые немотивированные ученики.",
    rate: 4.5,
     level: "C1",
     specialization: "Повседневный разговорный английский. Анлийский для менеджеров "
}
const TutorPreview = () => {
    return (<section className={styles.tutor}>
        <div className={styles.tutor__info}>

            <TutorAvatar url={tutor.url} />
            <TutorDescribtion title={tutor.title} country={tutor.country} citate={tutor.citate} rate={tutor.rate} level={tutor.level} specialization={tutor.specialization} />
        </div>
    </section>);
}

export default TutorPreview;