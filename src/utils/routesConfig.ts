
import { Component } from "react";
import {  CARD_PAGE, CATALOG, MAIN_PAGE, SIGN_IN, SIGN_UP } from "./consts";
import Homepage from "../pages/Homepage";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import CatalogPage from "../pages/CatalogPage";
import CoursePage from "../pages/CoursePage";


export const publicRoutes = [
  {
    path: MAIN_PAGE,
    Component: Homepage
  
  },

  {
    path:SIGN_IN,
    Component: SignInPage
    
  },

  {
    path:SIGN_UP,
    Component: SignUpPage
    
  },

  {
    path: CATALOG,
    Component: CatalogPage
  
  },
   {
    path: CARD_PAGE,
    Component: CoursePage
   }

];