import { createSlice } from "@reduxjs/toolkit"

const initialState={
    sendMessage:{
        currentMessage:null,
        isFetching:false,
        error:false
    }
}

const sendCourseMessageSlice= createSlice({
    name:'sendCourseMessage',
    initialState:initialState,
    reducers:{
        sendCourseMessageStart:(state)=>{
            state.sendMessage.isFetching=true
        },
        sendCourseMessageSuccess:(state,action)=>{
            return {
                ...state,
                sendMessage:{
                    ...state.sendMessage,
                    currentMessage:action.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        sendCourseMessageFailure:(state)=>{
            return {
                ...state,
                sendMessage:{
                    ...state.sendMessage,
                    isFetching:false,
                    error:true
                }
            }
        }
    }
})

export const {sendCourseMessageStart,sendCourseMessageSuccess,sendCourseMessageFailure}=sendCourseMessageSlice.actions
const sendCourseMessageReducer=sendCourseMessageSlice.reducer
export default sendCourseMessageReducer