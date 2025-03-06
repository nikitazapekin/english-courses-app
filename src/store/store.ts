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

import CourseModal from "./slices/CourseModal/CourseModal"
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
    CourseModal: CourseModal

});
export const store = configureStore({
    reducer: rootReducer,

});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

