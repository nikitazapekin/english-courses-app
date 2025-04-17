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

const PersonalProfile = () => {

    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const [cards, setCards] = useState<CoursesResponse["courses"]>([])

    const [total, setTotal] = useState(0)

    const [page, setPage] = useState(0)
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
        console.log("handle page", page)
        setCurrentPage(page);
    };


    const handleFilterCards = (id: number) => {
        setCards(prev => prev.filter(card => card.id !== id));
    }

    return (
        <section className={styles.personal}>
            <PaymentModal isOpenModal={isOpenModal} handleOpenModal={handleOpenModal} />
            <div className={styles.personal__inner}>
                <PersonalHeader title={"Мой профиль"} />
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

                <PersonalCourses
                    cards={cards}
                    total={total}
                    limit={limit}
                    handlePageChange={handlePageChange}
                    currentPage={Number(currentPage)}
                    handleFilterCards={handleFilterCards}


                />


            </div>
        </section>
    );
}

export default PersonalProfile; 