import { useEffect } from "react";
import TutorService from "../../../services/Tutor";

const TutorStudentsComponent = () => {

    useEffect(()=> {
const handleGet = async () => {
    try {

        const response  = await TutorService.GetStudentsCourse()
        console.log(response)
    } catch(err) {
        console.log(err)
    }
}

handleGet()
    }, [])
    return ( <div>



    </div> );
}
 
export default TutorStudentsComponent;