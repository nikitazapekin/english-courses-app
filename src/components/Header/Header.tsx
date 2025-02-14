

import styles from "./Header.module.scss"
import Logo from "../../assets/logo.png"
import Search from "../../assets/search.png"
import { Link, useNavigate } from "react-router-dom";
import { btns } from "./consts";
import { useSelector } from "react-redux";
import { HomepageSelector } from "../../store/selectors/Homepage.selector";
import { useDispatch } from "react-redux";
import { setOpenBurger } from "../../store/slices/Homepage.slice";
import BirdPanel from "../../assets/BirdPanel.png"
import { useDebouncedCallback } from "use-debounce";
import { useState, ChangeEvent, useEffect } from "react";
import AuthorithedHeader from "./AuthorithedHeader/AuthorithedHeader";
import UnauthorithedHeader from "./UnauthorithedHeader/UnuthorithedHeader";


const Header = () => {
    const [isAuthorithed, setIsAuthorized] = useState(() => {
        const storedValue = localStorage.getItem("isAuthorized");
        return storedValue ? JSON.parse(storedValue) : false;
    });
    return (
        <>
            {isAuthorithed ? (
                <AuthorithedHeader />
            ) : (
                <UnauthorithedHeader />
            )}
        </>
    );
}
export default Header;
