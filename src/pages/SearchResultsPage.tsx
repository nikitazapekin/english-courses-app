import styles from "../theme/wrappers.module.scss"
import "../theme/normalize.scss"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer";
import SearchResultsComponent from "../components/SearchResults/SearchResultsComponent/SearchResultsPage";
import { useEffect } from "react";
import HelpBtn from "../components/HelpBtn/HelpBtn";
const SearchResultsPage = () => {
    useEffect(() => {
       
        window.scrollTo(0, 0);
   
    }, []);
  
    return (
        <div className={styles.wrapper}>

            <Header />
            <div className={styles.content}>
                <SearchResultsComponent />
                <HelpBtn />
            </div>
            <Footer />
        </div>
    );
}

export default SearchResultsPage;