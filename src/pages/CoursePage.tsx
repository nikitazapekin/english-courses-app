import styles from "../theme/wrappers.module.scss"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CoursePreview from "../components/CoursePreview/CoursePreview";
import ForWhatSection from "../components/ForWhatSection/ForWhatSection";
import AboutCourse from "../components/AboutCourse/AboutCourse";
import CourseCertificate from "../components/CourseCertificate/CourseCertificate";
import AboutAuthor from "../components/AboutAuthor/AboutAuthor";
import CourseFor from "../components/CourseFor/CourseFor";
import CourseConsultation from "../components/CourseConsultation/CourseConsultation";
import { useEffect, useState } from "react";
import TutorAdd from "../components/Tutor/TutorAdd/TutorAdd";
import HelpBtn from "../components/HelpBtn/HelpBtn";
import NavigateBtn from "../components/NavigateBtn/NavigateBtn";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import CourseService from "../services/Course";
import { setCourse } from "../store/slices/OpenCourseDetails/OpenCourseDetails";
import Course from "../components/Course/Course";
import adminService from "../services/Admin";

import Ban from "../assets/admin/courses/warning.png"
import Edit from "../assets/admin/courses/pen.png"
import BanBtn from "../components/AdminBtns/BanBtn/BanBtn";
import WarningBtn from "../components/AdminBtns/WarningBtn/WarningBtn";
const CoursePage = () => {

    const dispatch = useDispatch()

    const location = useLocation();
    const lastPathSegment = location.pathname.split("/").pop();


    useEffect(() => {
        window.scrollTo(0, 0);
        const handleGetUser = async () => {
            try {
                const response = await CourseService.GetCourseInfo(lastPathSegment!)
                dispatch(setCourse(response.data.courses))

            } catch (err) {

                console.log("Something went wrong", err);
            }
        };
        handleGetUser();

    }, []);

    const [isUserAdmin, setIsAdmin] = useState(false)
    useEffect(() => {
        const handleGet = async () => {

            try {
                const resp = await adminService.isAdmin()
                console.log(resp.data.isAdmin)
                setIsAdmin(resp.data.isAdmin)
            } catch (e) {
                console.log(e)
            }
        }

        handleGet()
    }, [])
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>



                <Course />
                <CoursePreview />

                <ForWhatSection />
                <AboutCourse />
                <CourseCertificate />
                <AboutAuthor />
                <CourseFor />
                <CourseConsultation />
                <HelpBtn />
                <NavigateBtn />

                {isUserAdmin && <BanBtn logo={Ban} />}
              {isUserAdmin && <WarningBtn logo={Edit} />}
            </div>

            <Footer />
        </div>
    );
}

export default CoursePage;

/*
import Ban from "../../../assets/admin/courses/warning.png"
import Edit from "../../../assets/admin/courses/pen.png"
*/