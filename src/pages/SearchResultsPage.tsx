import styles from "../theme/wrappers.module.scss"
import "../theme/normalize.scss"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer";
import SearchResultsComponent from "../components/SearchResults/SearchResultsComponent/SearchResultsPage";

const SearchResultsPage = () => {
    return (
        <div className={styles.wrapper}>

            <Header />
            <div className={styles.content}>
                <SearchResultsComponent />
            </div>
            <Footer />
        </div>
    );
}

export default SearchResultsPage;