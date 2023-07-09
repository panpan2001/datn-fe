import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    messages:{
        currentMessage:null,
        isFetching:false,
        error:false
    }
}

const deleteCourseReportSlice=createSlice({
    name: "deleteCourseReport",
    initialState:initialState,
    reducers:{
        deleteCourseReportStart:(state)=>{
            state.messages.isFetching=true
        },
        deleteCourseReportSuccess:(state,action)=>{
            return {
                ...state,
                messages:{
                    ...state.messages,
                    currentMessage: action.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        deleteCourseReportFailure:(state)=>{
            return {
                ...state,
                messages:{
                    ...state.messages,
                    isFetching:false,
                    error:true
                }
            }
        }
    }
})

export const {deleteCourseReportStart,deleteCourseReportSuccess,deleteCourseReportFailure}=deleteCourseReportSlice.actions
const deleteCourseReportReducer=deleteCourseReportSlice.reducer
export default deleteCourseReportReducer