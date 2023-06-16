import { createSlice } from "@reduxjs/toolkit"

const initialState={
    course:{
        currentCourse:null,
        isFetching:false,
        error:false
    }
}
const adminDelCourseSlice=createSlice({
    name:"adminDelCourse",
    initialState:initialState,
    reducers:{
        adminDelCourseStart:(state)=>{
            state.course.isFetching=true
        },
        adminDelCourseSuccess:(state,action)=>{
            return {
                ...state,
                course:{
                    ...state.currentCourse,
                    currentCourse:action.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        adminDelCourseFailure:(state)=>{
            return {
                ...state,
                course:{
                    ...state.currentCourse,
                    isFetching:false,
                    error:true
                }
            }
        }
    }
})

export const {adminDelCourseStart,adminDelCourseSuccess,adminDelCourseFailure}=adminDelCourseSlice.actions
const adminDelCourseReducer=adminDelCourseSlice.reducer
export default adminDelCourseReducer