import AvatarComponent from "./AvatarComponent/AvatarComponent";
import PersonalHeader from "./PersonalHeader/PersonalHeader/PersonalHeader";
import styles from "./PersonalProfile.module.scss"
import PersonalDescribtion from "./PersonalDescribtion/PersonalDescribtion";
import PersonalCourses from "./PersonalCourses/PersonalCourses";
import PaymentModal from "../PaymentModal/PaymentModal";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthService from "../../services/Auth";
import PersonalService from "../../services/Personal";
import BanModal from "./BanModal/BanModal";
import WarningsUserService from "../../services/WarningsUser";
import { WarningUser } from "../../services/WarningsUser";
interface CoursesResponse {

    courses: Array<{

        id: number,
        course_id: number,
        author: string,
        title: string,
        description: string,
        fulldescription: string,
        course_for: String[],
        course_suitable: String[],
        for_what_reasons: String[],
        about_course: String[],
        tag: string,
        course_rate: string,
        release_date: string,
        course_logo: string,
    }>
}

interface Ban {


    id: number,
    ban_text: string,
    ban_date: string,
    is_active: true


}

interface Props {
    handleOpen: ()=> void
}

const PersonalProfile = ({handleOpen}: Props) => {

    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const [cards, setCards] = useState<CoursesResponse["courses"]>([])

    const [total, setTotal] = useState(0)


    const [limit, setLimit] = useState(5)

    const handleOpenModal = () => {
        setIsOpenModal(prev => !prev)
    }
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            const response = await AuthService.logout()
            navigate("/sign-in")
        } catch {

        }
    }
    const location = useLocation();

    let lastPathSegment = location.pathname.split("/")
    const [currentPage, setCurrentPage] = useState(isNaN(Number(lastPathSegment)) ? 1 : lastPathSegment);

    useEffect(() => {
        const handleGet = async () => {
            try {

                const response = await PersonalService.GetPersonalCourses(Number(currentPage), 5)
                setCards(response.data.courses.courses)


                setTotal(response.data.courses.total)
            } catch {

            }
        }

        handleGet()
    }, [currentPage])

    useEffect(() => {

        navigate(`/personal/${currentPage}/${limit}`);

    }, [currentPage]);
    const handlePageChange = (page: number) => {
        window.scrollTo(0, 0)
        setCurrentPage(page);
    };


    const handleFilterCards = (id: number) => {
        setCards(prev => prev.filter(card => card.id !== id));
    }
    const [bans, setBans] = useState<Ban[]>([])

    const handleGetPersonalBans = async () => {
        try {
            const resp = await PersonalService.GetUserBans()

            setBans(resp.data.courses)
        } catch (e) {

        }
    }
    useEffect(() => {
        handleGetPersonalBans()
    }, [])

    const [warnings,setWarnings] = useState<WarningUser[]>([])
    const handleGetWarnings = async () => {
        try {
            const resp = await WarningsUserService.GetUserWarnings()
            setWarnings(resp.data)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        handleGetWarnings()
    }, [])
    
    return (
        <section className={styles.personal}>
            <PaymentModal isOpenModal={isOpenModal} handleOpenModal={handleOpenModal} />
            <div className={styles.personal__inner}>
                <PersonalHeader title={"Мой профиль"}
                warnings={warnings}

                handleOpen={handleOpen}
                />
                <div className={styles.personal__info}>
                    <div className={styles.personal__actions}>
                        <AvatarComponent />
                        <div className={styles.personal__preview}>

                            <button className={`${styles.personal__btn} ${styles.personal__btn__red}`} onClick={handleLogout}>
                                Выйти
                            </button>
                        </div>


                    </div>
                    <PersonalDescribtion />

                </div>
                {cards.length > 0 && (

                    <PersonalCourses
                        cards={cards}
                        total={total}
                        limit={limit}
                        handlePageChange={handlePageChange}
                        currentPage={Number(currentPage)}
                        handleFilterCards={handleFilterCards}


                    />
                )}
                {cards.length == 0 && (
                    <p className={styles.none}>
                        У вас еще нету курсов
                    </p>
                )}

            </div>

            {bans.length > 0 && (
                <BanModal

                    ban={bans[0]}
                />
            )}
        </section>
    );
}

export default PersonalProfile;
/*

export interface WarningUser {
    
       
        
            id: number,
            user_id: number,
            warning_text:string,
            is_active: boolean
        
    
}
export interface IsAdminResponse {
    message: string,
    isAdmin: boolean
}
export default class WarningsUserService {
    static async GetWarnings(): Promise<AxiosResponse<AdminResponse>> {
        return $api.get<AdminResponse>('/warningsuser/getWarnings')
    }
    static async GetUserWarnings(): Promise<AxiosResponse<WarningUser>> {
        return $api.get<WarningUser>('/warningsuser/getWarningUser')
    }

  //getUserWarnings

}
  */