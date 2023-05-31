import { createSlice } from "@reduxjs/toolkit"

const initialState={
    courses:{
        currentCourses:null,
        isFetching:false,
        error:false
    }
}

const getAllCourseByIdTeacherSlices = createSlice({
    name:'getAllCourseByIdTeacher',
    initialState:initialState,
    reducers:{
        getAllCourseByIdTeacherStart:(state)=>{
            state.courses.isFetching=true
        },
        getAllCourseByIdTeacherSuccess:(state,action)=>{
            return {
                ...state,
                courses:{
                    ...state.courses,
                    currentCourses:action.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        getAllCourseByIdTeacherFailure:(state)=>{
            return {
                ...state,
                courses:{
                    ...state.courses,
                    isFetching:false,
                    error:true
                }
            }
        }
    }
})

export const {getAllCourseByIdTeacherStart,getAllCourseByIdTeacherSuccess,getAllCourseByIdTeacherFailure} = getAllCourseByIdTeacherSlices.actions
const getAllCourseByIdTeacherReducer = getAllCourseByIdTeacherSlices.reducer
export default getAllCourseByIdTeacherReducer
