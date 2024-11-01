
import { Component } from "react";
import {  MAIN_PAGE, SIGN_IN, SIGN_UP } from "./consts";
import Homepage from "../pages/Homepage";
import SignInPage from "../pages/SignIn";
//import ReactHookFormPage from "../pages/ReactHookFormPage";
//import MainPage from "../pages/MainPage";
//import UncontrolledFormPage from "../pages/UncontrolledFormPage";

export const publicRoutes = [
  {
    path: MAIN_PAGE,
    Component: Homepage
    //Component: ReactHookFormPage,
  },

  {
    path:SIGN_IN,
    Component: SignInPage
    //Component: ReactHookFormPage,
  },
  /*
  {
    path: MAIN_PAGE,
   // Component: MainPage,
  },
  {
    path: UNCONTROLLED_FORM,
 //   Component: UncontrolledFormPage,
  }, */
];