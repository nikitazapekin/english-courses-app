import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { ThunkAction, Action } from '@reduxjs/toolkit';

import PersonalSlice from "./slices/PersonalSlice/PersonalSlice"

import HomepageSlice from "./slices/Homepage.slice"
import FormSlice from "./slices/Forms.slice"
import ReplyToSlice from "./slices/ReplyTo.slice"
import TutorSlice from "./slices/TutorSlice/TutorSlice"
import CreateFormSlice from "./slices/CreateCourseSlice/CreateCourseSlice"
import CoursesSlice from "./slices/CoursesSlice/CoursesSlice"
import AdminSlice from "./slices/AdminSlice/AdminSlice"
import OpenForm from "./slices/OpenCourseDetails/OpenCourseDetails"
import TestSlice from "./slices/TestSlice/TestSlice"
import CourseModal from "./slices/CourseModal/CourseModal"
import AddAchievementSlice from "./slices/AddAchievementSlice/AddAchievementSlice"
import EditModalLesson from "./slices/EditModalLesson/EditModalLesson"
import  Lessons from "./slices/Lessons/Lessons"
import  Catalog from "./slices/Catalog/Catalog"
import AddWarningModal from "./slices/AddWarningModal/AddWarningModal"
export const rootReducer = combineReducers({
    HomepageSlice: HomepageSlice,
    FormSlice: FormSlice,
    ReplyToSlice: ReplyToSlice,
    PersonalSlice: PersonalSlice,
    TutorSlice: TutorSlice,
    CreateFormSlice: CreateFormSlice,
    CoursesSlice: CoursesSlice,
    AdminSlice:AdminSlice,
    OpenCourse: OpenForm,
    CourseModal: CourseModal,
    TestSlice:  TestSlice,
    AddAchievementSlice: AddAchievementSlice,
    EditModalLesson: EditModalLesson,
    LessonsSlice: Lessons,
    Catalog: Catalog,
    AddWarningModal: AddWarningModal
    

});
export const store = configureStore({
    reducer: rootReducer,

});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

