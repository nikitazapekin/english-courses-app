import { useSelector } from "react-redux";
import CourseModal from "./CourseModal/CourseModal";
import { OpenCourseModal } from "../../store/selectors/CourseModal";

const Course = () => {
    const isOpenModal = useSelector(OpenCourseModal)
    return (<div>
        {
            isOpenModal && (


                <CourseModal />
            )
        }
    </div>);
}

export default Course;