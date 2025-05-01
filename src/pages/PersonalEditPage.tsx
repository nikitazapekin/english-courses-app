import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import PersonalEditProfile from "../components/PersonalProfile/PersonalEditProfile/PersonalEditProfile";
import styles from "../theme/wrappers.module.scss"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import PersonalService from "../services/Personal";
import { setPerson } from "../store/slices/PersonalSlice/PersonalSlice";

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
    description: string
}



const PerosnalEditPage = () => {
    const navigate = useNavigate()
    const [data, setData] = useState<PersonalResponse>()
    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0);
        const handleGetUser = async () => {
            try {
                const response = await PersonalService.GetUser();
                dispatch(setPerson(response.data.user))
                setData(response.data.user)
                console.log("DATA", response.data)
            } catch (err) {
                navigate("/sign-in")
                console.log("Something went wrong", err);
            }
        };
        handleGetUser();

    }, []);

    
    return (

        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>
                <PersonalEditProfile 
                dataUser={data!}
                />

            </div>
            <Footer />
        </div>
    );
}

export default PerosnalEditPage;
