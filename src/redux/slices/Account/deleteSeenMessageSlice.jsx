import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    seenMessage:{
        currentMessage:null,
        isFetching:false,
        error:false
    }
}

const deleteSeenMessageSlice=createSlice({
    name: "deleteSeenMessage",
    initialState:initialState,
    reducers:{
        deleteSeenMessageStart:(state)=>{
            state.seenMessage.isFetching=true
        },
        deleteSeenMessageSuccess:(state,action)=>{
            return {
                ...state,
                seenMessage:{
                    ...state.seenMessage,
                    currentMessage: action.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        deleteSeenMessageFailure:(state)=>{
            return {
                ...state,
                seenMessage:{
                    ...state.seenMessage,
                    isFetching:false,
                    error:true
                }
            }
        }
    }
})

export const {deleteSeenMessageStart,deleteSeenMessageSuccess,deleteSeenMessageFailure}=deleteSeenMessageSlice.actions
const deleteSeenMessageReducer=deleteSeenMessageSlice.reducer
export default deleteSeenMessageReducer