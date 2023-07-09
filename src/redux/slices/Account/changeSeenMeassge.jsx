import { createSlice } from "@reduxjs/toolkit"

const initiaState= {
    messages:{
        currentMessage:null,
        isFetching:false,
        error:false
    }
}

const changeSeenMessageSlice= createSlice({
    name:"changeSeenMessage",
    initialState:initiaState,
    reducers:{
        changeSeenMessageStart:(state,action)=>{
            state.messages.isFetching=true
        },
        changeSeenMessageSuccess:(state,action)=>{
            return {
                ...state,
                messages:{
                    ...state.messages,
                    currentMessage:action.payload,
                    isFetching:false,
                    error:false
            }
        }
        },
        changeSeenMessageFailure:(state,action)=>{
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

export const {changeSeenMessageStart,changeSeenMessageSuccess,changeSeenMessageFailure}=changeSeenMessageSlice.actions
const changeSeenMessageReducer=changeSeenMessageSlice.reducer
export default changeSeenMessageReducer