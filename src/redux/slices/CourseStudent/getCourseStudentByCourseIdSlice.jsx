import { createSlice } from "@reduxjs/toolkit"

const initialState= {
    courseStudent:{
        currentCourseStudent:null,
        isFetching:false,
        error:false
        }
}

const getCourseStudentByCourseIdSlice=createSlice({
    name:"getCourseStudentByCourseId",
    initialState:initialState,
    reducers:{
        getCourseStudentByCourseIdStart:(state)=>{
            state.courseStudent.isFetching=true
        },
        getCourseStudentByCourseIdSuccess:(state,action)=>{
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
        getCourseStudentByCourseIdFailure:(state)=>{
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

export const {getCourseStudentByCourseIdStart,getCourseStudentByCourseIdSuccess,getCourseStudentByCourseIdFailure}=getCourseStudentByCourseIdSlice.actions
const  getCourseStudentByCourseIdReducer=getCourseStudentByCourseIdSlice.reducer
export default getCourseStudentByCourseIdReducer