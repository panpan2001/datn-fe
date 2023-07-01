import { createSlice } from "@reduxjs/toolkit"

const initialState={
    message:{
        currentDemoCourse:null,
        isFetching:false,
        error:false
    }
}

const sendDemoCourseReportMessageSlice = createSlice({
    name: "sendDemoCourseReportMessage",
    initialState: initialState,
    reducers:{
        sendDemoCourseReportMessageStart:(state)=>{
            state.message.isFetching=true
        },
        sendDemoCourseReportMessageSuccess:(state,action)=>{
            return{
                ...state,
                message:{
                    ...state.message,
                    currentDemoCourse:action.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        sendDemoCourseReportMessageFail:(state)=>{
            return {
                ...state,
                message:{
                    ...state.message,
                    isFetching:false,
                    error:true
                }
            }
        }
    }
})

export const {sendDemoCourseReportMessageStart,sendDemoCourseReportMessageSuccess,sendDemoCourseReportMessageFail} = sendDemoCourseReportMessageSlice.actions
const sendDemoCourseReportMessageReducer = sendDemoCourseReportMessageSlice.reducer
export default sendDemoCourseReportMessageReducer