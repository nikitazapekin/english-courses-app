import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import TutorComponent from "../components/Tutor/Tutor";
import styles from "../theme/wrappers.module.scss"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import TutorAdd from "../components/Tutor/TutorAdd/TutorAdd";
import HelpBtn from "../components/HelpBtn/HelpBtn";
import NavigateBtn from "../components/NavigateBtn/NavigateBtn";
import RateModal from "../components/Tutor/RateModal/RateModal";
import { useSelector } from "react-redux";
import { RateSelector } from "../store/selectors/RateSelector";
import { useDispatch } from "react-redux";
import { setOpenRate } from "../store/slices/RateSlice/RateSlice";
const TutorPage = () => {


    useEffect(() => {

        window.scrollTo(0, 0);

    }, []);
    const isOpenSelector = useSelector(RateSelector)


    const dispatch = useDispatch()
const handleClose =() => {
dispatch(setOpenRate(false))
}


    return (<div className={styles.wrapper}>
        <Header />
        <div className={styles.darken} />
        <div className={styles.content}>

            <TutorComponent />
            <HelpBtn />
            <NavigateBtn />
            {isOpenSelector.isOpenRateModal && (

                <RateModal 
                handler={handleClose}
                />
            )}
        </div>
        <Footer />
    </div>);
}

export default TutorPage;