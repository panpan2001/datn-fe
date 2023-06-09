import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "../slices/Auth/loginSlice";
import registerReducer from "../slices/Auth/registerSlice";
import getAccountReducer from "../slices/Account/GetAccountSlice";
import delAccountReducer from "../slices/Account/DeleteAccountSlice";
import { persistStore } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import { FLUSH,  REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import logoutReducer from "../slices/Auth/logoutSlice";
import createStudentReducer from "../slices/Student/createStudentSlice";
import getStudentByIdReducer from "../slices/Student/getStudentByIdSlice";
import getStudentByAccountIdReducer from "../slices/Student/getStudentByAccountIdSlice";
import getAllTeachersReducer from "../slices/Teacher/GetAllTeachersSlice";
import getTeacherByIdReducer from "../slices/Teacher/GetTeacherByIdSlice";
import getTeacherAcademicReducer from "../slices/TeacherAcademic/getTeacherAcademicSlice";
import getTeacherByAccountIdReducer from "../slices/Teacher/GetTeacherByAccountIdSlice";
import createTeacherReducer from "../slices/Teacher/CreateTeacherSlice";
import createTeacherAcademicReducer from "../slices/TeacherAcademic/createteacherAcademicSlice";
import createTeacherDegreeReducer from "../slices/TeacherDegree/CreateTeacherDegreeSlice";
import getTeacherAcademicByIdReducer from "../slices/TeacherAcademic/getTeacherAcademicByIdSlice";
import getTeacherDegreeByIdReducer from "../slices/TeacherDegree/getTeacherDegreeByIdSlice";
import getCourseCategoryReducer from "../slices/CourseCategory/getCourseCategorySlice";
import createCourseReducer from "../slices/Course/createCourse";
import getAllCourseByIdTeacherReducer from "../slices/Course/getAllCourseByIdTeacher";
import updateTeacherReducer from "../slices/Teacher/UpdateTeacherSlice";
import getCourseCategoryByIdReducer from "../slices/CourseCategory/getCourseCategoryByIdSlice";
import getCourseByIdReducer from "../slices/Course/getCourseById";
import createRegisterDemoCourseReducer from "../slices/DemoCourseStudent/createRegisterDemoCourse";
import getDemoCourseByStudentIdReducer from "../slices/DemoCourseStudent/getDemoCourseByStudentId";
import cancelRegisterDemoCourseReducer from "../slices/DemoCourseStudent/cancelRegisterDemoCourse";
import registerCourseReducer from "../slices/CourseStudent/registerCourse";
import getCourseStudentByStudentIdReducer from "../slices/CourseStudent/getCourseStudentByStudentId";
import cancelRegisterCourseReducer from "../slices/CourseStudent/cancelRegisterCourse";
import deleteCourseReducer from "../slices/Course/deleteCourse";


const persistConfig = {
    key:'root',
    version:1,
    storage

}

const rootReducer= combineReducers({
    login: loginReducer,
    signup: registerReducer,
    getAccount: getAccountReducer,
    delAccount: delAccountReducer,
    logout: logoutReducer,
    createStudent:createStudentReducer,
    getStudentByAccountId: getStudentByAccountIdReducer,
    getStudentById: getStudentByIdReducer,
    getAccountById: getAccountReducer,
    getAllTeachers: getAllTeachersReducer,
    getTeacherById: getTeacherByIdReducer,
    getTeacherByAccountId: getTeacherByAccountIdReducer,
    updateTeacher: updateTeacherReducer,
    getTeacherAcademic: getTeacherAcademicReducer,
    createTeacherAcademic: createTeacherAcademicReducer,
    getTeacherAcademicById: getTeacherAcademicByIdReducer,
    createTeacherDegree: createTeacherDegreeReducer,
    getTeacherDegreeById: getTeacherDegreeByIdReducer,
    createTeacher: createTeacherReducer,
    getCourseCategory: getCourseCategoryReducer,
    getCourseCategoryById: getCourseCategoryByIdReducer,
    createCourse: createCourseReducer,
    getAllCourseByIdTeacher: getAllCourseByIdTeacherReducer,
    getCourseById: getCourseByIdReducer,
    createRegisterDemoCourse:createRegisterDemoCourseReducer,
    getDemoCourseByStudentId:getDemoCourseByStudentIdReducer,
    cancelRegisterDemoCourse:cancelRegisterDemoCourseReducer,
    registerCourse:registerCourseReducer,
    getCourseStudentByStudentId: getCourseStudentByStudentIdReducer,
    cancelRegisterCourse:cancelRegisterCourseReducer,
    deleteCourse:deleteCourseReducer

})
const persistedReducer=persistReducer(persistConfig,rootReducer)

const store= configureStore({
    reducer: persistedReducer,
    middware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: 
        {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        
    })
}
    // reducer
)

export const persistor=persistStore(store)
export default store