import { createSlice } from "@reduxjs/toolkit"

const initialState={
    courseStudent:{
        currentCourseStudent:null,
        isFetching:false,
        error:false
    }
}

const reportCourseStudentSlice = createSlice({
    name: "reportCourseStudent",
    initialState: initialState,
    reducers:{
        reportCourseStudentStart:(state)=>{
            state.courseStudent.isFetching=true
        },
        reportCourseStudentSuccess:(state,action)=>{
            return {
                ...state,
                courseStudent:{
                    ...state.courseStudent,
                    currentCourseStudent:action.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        reportCourseStudentFail:(state)=>{
            return {
                ...state,
                courseStudent:{
                    ...state.courseStudent,
                    isFetching:false,
                    error:true
                }
            }
        }
    }
})

export const {reportCourseStudentStart,reportCourseStudentSuccess,reportCourseStudentFail} = reportCourseStudentSlice.actions
const reportCourseStudentReducer = reportCourseStudentSlice.reducer
export default reportCourseStudentReducer
