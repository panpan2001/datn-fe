import { createSlice } from "@reduxjs/toolkit"

const iniltialState= {
    demoCourseStudents:{
        currentDemoCourseStudent: null,
        isFetching:false,
        error:false
    }
}
const  getAllDemoCourseStudentSlice=createSlice({
    name:"getAllDemoCourseStudent",
    initialState: iniltialState,
    reducers:{
        getAllDemoCourseStudentStart:(state,action)=>{
            state.demoCourseStudents.isFetching= true
        },
        getAllDemoCourseStudentSuccess:(state,action)=>{
            return {
                ...state,
                demoCourseStudents:{
                    ...state.demoCourseStudents,
                    currentDemoCourseStudent: action.payload,
                    isFetching: false,
                    error: false
                }
            }
        },
        getAllDemoCourseStudentFailure:(state,action)=>{
            return {
                ...state,
                demoCourseStudents:{
                    ...state.demoCourseStudents,
                    isFetching: false,
                    error: true
                }
            }
        }
    }
})

export const {getAllDemoCourseStudentStart, getAllDemoCourseStudentSuccess, getAllDemoCourseStudentFailure} = getAllDemoCourseStudentSlice.actions
const getAllDemoCourseStudentReducer = getAllDemoCourseStudentSlice.reducer
export default getAllDemoCourseStudentReducer
