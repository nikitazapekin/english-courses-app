import { RootState } from '../store';

export const OpenCourseSelector = (state: RootState) => {
    return state.OpenCourse.courses

};