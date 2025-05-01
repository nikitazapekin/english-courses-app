import styles from "./PersonalDescribtion.module.scss"
import Discord from "../../../assets/networks/discord.png"
import Vk from "../../../assets/networks/vk.png"
import Google from "../../../assets/networks/google.png"
import Belarus from "../../../assets/Countries/Belarus.png"
import { useSelector } from "react-redux"
import { PersonalSelector } from "../../../store/selectors/Personal.selector"
import { useEffect, useState } from "react"
import PersonalService from "../../../services/Personal"


interface PersonalResponse {

    id: number,
    email: string,
    auth_date: string,
    user_id: number,
    courses: string,
    phone: string,
    country: string,
    city: string,
    role: string,
    username: string,
    describtion: string

}


const PersonalDescribtion = () => {
    const user = useSelector(PersonalSelector)
    const [data, setData] = useState<PersonalResponse>()
    const handleGet = async () => {
        try {
            const resp = await PersonalService.GetUser()
            setData(resp.data.user)

            console.log("resp", resp.data.user)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        handleGet()
    }, [])
    return (
        <div className={styles.describtion}>
            <h3 className={styles.describtion__title}>
                {/*
                {user.username}
                */}
                {data?.username}
            </h3>
            <div className={styles.describtion__country}>
                <div className={styles.describtion__country__text}>
                    <span className={styles.bold}>

                        Ваша локация:
                    </span>
                    {" "}
                    {data?.country} {data?.city}
                    {!data?.country && !data?.city && <p>Не указано</p>}
                </div>


            </div>


            <div className={styles.describtion__country}>
                <div className={styles.describtion__country__text}>
                    <span className={styles.bold}>

                        Ваш телефон:
                    </span>
                    {" "}
                    {data?.phone} 
                    {!data?.phone   && <p>Не указано</p>}
                </div>


            </div>


            <div className={styles.describtion__country}>
                <div className={styles.describtion__country__text}>
                    <span className={styles.bold}>

                        Ваш email:
                    </span>
                    {" "}
                    {data?.email} 
                    {!data?.email   && <p>Не указано</p>}
                </div>


            </div>











            <div className={styles.describtion__country}>
                <div className={styles.describtion__country__text}>
                    <span className={styles.bold}>

                        Описание:
                    </span>
                    {" "}
                    {data?.describtion}
                    
                    {!data?.describtion   && <p>Не указано</p>}
                </div>


            </div>
 

            <p className={styles.describtion__subtitle} style={{ display: "none" }}>
                Привязать аккаунт к социальным сетям:
            </p>
            <div className={styles.describtion__networks} style={{ display: "none" }}>
                <div className={`${styles.describtion__network}  ${styles.describtion__network__purple}`}>
                    <img src={Discord} alt="Discord" className={`${styles.describtion__network__image} `} />
                </div>
                <div className={`${styles.describtion__network}  ${styles.describtion__network__white}`}>
                    <img src={Google} alt="Google" className={`${styles.describtion__network__image}`} />
                </div>
                <div className={`${styles.describtion__network}  ${styles.describtion__network__blue}`}>
                    <img src={Vk} alt="Vk" className={`${styles.describtion__network__image}`} />
                </div>
            </div>
        </div>
    );
}

export default PersonalDescribtion;














