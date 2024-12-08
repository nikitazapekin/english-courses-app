

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
import AuthorithedHeader from "./UnauthorithedHeader/UnuthorithedHeader";


const courses = [
    { id: 1, title: "Курс для программистов" },
    { id: 2, title: "Английский для начинающих" },
    { id: 3, title: "Разговорный английский" },
    { id: 4, title: "Английский для бизнеса" },
    { id: 5, title: "Подготовка к IELTS" },
    { id: 6, title: "Технический английский" },
    { id: 7, title: "Английский для путешествий" },
    { id: 8, title: "Английский для детей" },
    { id: 9, title: "Английский для инженеров" },
];

const Header = () => {
  
    return (

       <>
       <AuthorithedHeader />
       </>
    );
}

export default Header;
