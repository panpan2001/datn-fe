import { createSlice } from "@reduxjs/toolkit"


const iniltialState= {
    courseStudents:{
        currentCourseStudent: null,
        isFetching:false,
        error:false
    }
}

const getAllCourseStudentSlice=createSlice({
    name:"getAllCourseStudent",
    initialState: iniltialState,
    reducers:{
        getAllCourseStudentStart:(state,action)=>{
            state.courseStudents.isFetching= true
        },
        getAllCourseStudentSuccess:(state,action)=>{
            return {
                ...state,
                courseStudents:{
                    ...state.courseStudents,
                    currentCourseStudent: action.payload,
                    isFetching: false,
                    error: false
                }
            }
        },
        getAllCourseStudentFailure:(state,action)=>{
            return {
                ...state,
                courseStudents:{
                    ...state.courseStudents,
                    isFetching: false,
                    error: true
                }
            }
        }
    }
})

export const {getAllCourseStudentStart, getAllCourseStudentSuccess, getAllCourseStudentFailure} = getAllCourseStudentSlice.actions
const getAllCourseStudentReducer = getAllCourseStudentSlice.reducer
export default getAllCourseStudentReducer
