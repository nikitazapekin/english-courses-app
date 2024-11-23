
import { Component } from "react";
import {  CARD_PAGE, CATALOG, LESSONS_PAGE, MAIN_PAGE, PERSONAL_PAGE, PERSONAL_PAGE_EDIT, SIGN_IN, SIGN_UP } from "./consts";
import Homepage from "../pages/Homepage";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import CatalogPage from "../pages/CatalogPage";
import CoursePage from "../pages/CoursePage";
import path from "path";
import PersonalPage from "../pages/PersonalPage";
import PersonalEditPage from "../pages/PersonalEditPage";
import CourseLessonsPage from "../pages/CourseLessonsPage";

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
   },
   {
path: PERSONAL_PAGE,
Component: PersonalPage

   },


   {
    path: PERSONAL_PAGE_EDIT,
    Component: PersonalEditPage
    
       },
       {
        path: LESSONS_PAGE,
        Component: CourseLessonsPage
        
           }
    
];