import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    reports:{
        currentReport:null,
        isFetching:false,
        error:false
    }
}
 const deleteDemoCourseReportSlice=createSlice({
     name:"deleteDemoCourseReport",
     initialState:initialState,
     reducers:{
         deleteDemoCourseReportStart:(state)=>{
             state.reports.isFetching=true
         },
         deleteDemoCourseReportSuccess:(state,action)=>{
             return {
                 ...state,
                 reports:{
                     ...state.reports,
                     currentReport: action.payload,
                     isFetching:false,
                     error:false
                 }
             }
         },
         deleteDemoCourseReportFailure:(state)=>{
             return {
                 ...state,
                 reports:{
                     ...state.reports,
                     isFetching:false,
                     error:true
                 }
             }
         }
     }
 })

 export const {deleteDemoCourseReportStart,deleteDemoCourseReportSuccess,deleteDemoCourseReportFailure}=deleteDemoCourseReportSlice.actions
 const deleteDemoCourseReportReducer=deleteDemoCourseReportSlice.reducer
 export default deleteDemoCourseReportReducer