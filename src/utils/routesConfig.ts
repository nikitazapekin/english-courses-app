
import { Component } from "react";
import {  MAIN_PAGE, SIGN_IN, SIGN_UP } from "./consts";
import Homepage from "../pages/Homepage";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";


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

];