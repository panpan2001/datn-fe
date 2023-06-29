import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    demoCourseStudent:{
        currentDemoCourseStudent:null,
        isFetching:false,
        error:false
    }
}

const reportDemoCourseStudent = createSlice({
    name: "reportDemoCourseStudent",
    initialState:initialState,
    reducers: {
       reportDemoCourseStudentStart: (state) => {
           state.demoCourseStudent.isFetching = true
       },
       reportDemoCourseStudentSuccess: (state, action) => {
           return {
               ...state,
               demoCourseStudent:{
                   ...state.demoCourseStudent,
                   currentDemoCourseStudent: action.payload,
                   isFetching: false,
                   error: false
               }
           }
       },
       reportDemoCourseStudentFail: (state, action) => {
           return {
               ...state,
               demoCourseStudent:{
                   ...state.demoCourseStudent,
                   isFetching: false,
                   error: true
               }
           }
       }
    }
})

export const { reportDemoCourseStudentStart, reportDemoCourseStudentSuccess, reportDemoCourseStudentFail } = reportDemoCourseStudent.actions
const reportDemoCourseStudentReducer = reportDemoCourseStudent.reducer
export default reportDemoCourseStudentReducer
