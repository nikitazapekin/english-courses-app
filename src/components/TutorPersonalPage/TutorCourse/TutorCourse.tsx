import { useLocation } from "react-router-dom";
import styles from "./TutorCourse.module.scss"
import TutorPamel from "../TutorPanel/TutorPanel";
import { useSelector } from "react-redux";
import { TutorSelector } from "../../../store/selectors/Tutor.selector";
import TutorEditCourse from "./TutorEditCourse/TutorEditCourse";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import TutorService from "../../../services/Tutor";
import CourseService from "../../../services/Course";
import { setCourse } from "../../../store/slices/OpenCourseDetails/OpenCourseDetails";


const TutorCourse = () => {
    const location = useLocation();
    const lastPathSegment = location.pathname.split("/").pop();
    console.log("segment", lastPathSegment);

    const dispatch = useDispatch()
    useEffect(() => {
        const handleGetUser = async () => {
            try {
                const response = await CourseService.GetCourseInfo(lastPathSegment!)
                dispatch(setCourse(response.data.courses))

            } catch (err) {
                //   navigate("/sign-in")
            }
        };
        handleGetUser();

    })
    const tutor = useSelector(TutorSelector)
    return (
        <section
            className={styles.tutor}>
            <div className={styles.tutor__container}>
                <TutorPamel
                    username={tutor.user.username}
                    email={tutor.user.email}
                />
                <TutorEditCourse />

            </div>
        </section>

    );
}

export default TutorCourse;