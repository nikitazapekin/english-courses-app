
import { Component } from "react";
import { ADMIN_DELETED_COURSES, ADMIN_EDIT_PAGE, ADMIN_PAGE, ADMIN_WARNINGS_COURSES, CARD_PAGE, CATALOG, CATALOG_QUERY, CHAT_PAGE, FOUND_COURSES, HELP_PAGE, LESSONS_EDUCATE_PAGE, LESSONS_PAGE, MAIN_PAGE, PERSONAL_PAGE, PERSONAL_PAGE_EDIT, SEARCH_PAGE, SIGN_IN, SIGN_UP, TESTING_EDUCATE_PAGE, TESTING_PAGE, TUTOR_ACHIEVEMENTS_PAGE, TUTOR_CREATE_COURSES, TUTOR_EDIT, TUTOR_PAGE, TUTOR_PERSONAL_COURSE, TUTOR_PERSONAL_COURSES, TUTOR_PERSONAL_PAGE, TUTOR_PERSONAL_STUDENTS } from "./consts";
import Homepage from "../pages/Homepage";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import CatalogPage from "../pages/CatalogPage";
import CoursePage from "../pages/CoursePage";
import path from "path";
import PersonalPage from "../pages/PersonalPage";
import PersonalEditPage from "../pages/PersonalEditPage";
import CourseLessonsPage from "../pages/CourseLessonsPage";
import LessonPage from "../pages/LessonPage";
import TestingPage from "../pages/TestingPage";
import SearchResultsPage from "../pages/SearchResultsPage";
import NotFoundPage from "../pages/NotFoundPage";
import TutorPage from "../pages/TutorPage";
import HelpPage from "../pages/HelpPage";
import ChatPage from "../pages/ChatPage";
import TutorPersonalPage from "../pages/TutorPersonalPage";
import TutorPersonalCourses from "../pages/TutorPersonalCourses";
import TutorCreateCourse from "../pages/TutorCreateCourse";
import TutorEditProfile from "../pages/TutorEditProfile";
import FoundCoursesPage from "../pages/FoundCoursesPage";

import AdminPage from "../pages/AdminPage";
import TutorPersonalCourse from "../pages/TutorPersonalCourse";
import TutorAchievementsPage from "../pages/TutorAchievements";
import TutorStudentsPage from "../pages/TutorStudents";

export const publicRoutes = [
  {
    path: MAIN_PAGE,
    Component: Homepage

  },

  {
    path: SIGN_IN,
    Component: SignInPage

  },

  {
    path: SIGN_UP,
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

  },

  {
    path: LESSONS_EDUCATE_PAGE,
    Component: LessonPage

  },


  {
    path: TESTING_EDUCATE_PAGE,
    Component: TestingPage

  },

  {
    path: SEARCH_PAGE,
    Component: SearchResultsPage

  },
  {
    path: TUTOR_PAGE,
    Component: TutorPage

  },
  {
    path: HELP_PAGE,
    Component: HelpPage

  },

  {
    path: CHAT_PAGE,
    Component: ChatPage

  },
  {
    path: TUTOR_PERSONAL_PAGE,
    Component: TutorPersonalPage

  },


  {
    path: TUTOR_PERSONAL_COURSES,
    Component: TutorPersonalCourses

  },


  {
    path: TUTOR_CREATE_COURSES,
    Component: TutorCreateCourse

  },

  {

    path: TUTOR_EDIT,
    Component: TutorEditProfile

  },
  {

    path: FOUND_COURSES,
    Component: FoundCoursesPage

  },

  {

    path: ADMIN_PAGE,
    Component: AdminPage
  },



  {

    path: ADMIN_EDIT_PAGE,
    Component: AdminPage
  },

  {
    path: ADMIN_DELETED_COURSES,
    Component: AdminPage
  },

  {
    path: ADMIN_WARNINGS_COURSES,
    Component: AdminPage
  },
 
  {

    path: TUTOR_PERSONAL_COURSE,
    Component: TutorPersonalCourse
  },
  {

    path: TESTING_PAGE,
    Component: TestingPage
  },



  {

    path: TUTOR_ACHIEVEMENTS_PAGE,
    Component: TutorAchievementsPage
  },


  {

    path: TUTOR_PERSONAL_STUDENTS,
    Component: TutorStudentsPage
  },


  {
    path: "*",
    Component: NotFoundPage,
  },

];