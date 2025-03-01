import { useNavigate } from "react-router-dom";
import AdminComponent from "../components/AdminComponent/AdminComponent";
import CategoriesComponent from "../components/CategoriesComponent/CategotiesComponent";
import CoursesSlider from "../components/CoursesSlider/CouresSlider";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HelpBtn from "../components/HelpBtn/HelpBtn";
import styles from "../theme/wrappers.module.scss"
import { useEffect } from "react";
import adminService from "../services/Admin";
const AdminPage = () => {
  /*   useEffect(() => {

        window.scrollTo(0, 0);

    }, []);
 */


const navigate = useNavigate()

      useEffect(() => {
            window.scrollTo(0, 0)
            const handleGetUser = async () => {
                try {
                    const response = await adminService.getAdmin()
                 //   dispatch(setTutor(response.data.user))
                
                } catch (err) {
                    navigate("/sign-in")
                }
            };
            handleGetUser();  
        
    
    
        }, []);
    
    return (
        <>
            <div className={styles.wrapper}>

                <Header />
                <div className={styles.content}>

                    <AdminComponent />



                </div>
                <Footer />
            </div>
        </>
    );
}

export default AdminPage;