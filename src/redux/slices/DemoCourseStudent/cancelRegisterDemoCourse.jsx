import { createSlice } from "@reduxjs/toolkit";

const initialState={
    demoCourse:{
        currentDemoCourse:null,
        isFetching:false,
        error:false
    }
}

const cancelRegisterDemoCourse= createSlice({
    name:"cancelRegisterDemoCourse",
    initialState:initialState,
    reducers:{
        cancelRegisterDemoCourseStart:(state)=>{
            state.demoCourse.isFetching=true
        },
        cancelRegisterDemoCourseSuccess:(state,action)=>{
            return {
                ...state,
                demoCourse:{
                    ...state.demoCourse,
                    currentDemoCourse:action.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        cancelRegisterDemoCourseFailure:(state,action)=>{
            return {
                ...state,
                demoCourse:{
                    ...state.demoCourse,
                    isFetching:false,
                    error:true
                }
            }
        }
    },
    
})

export const {cancelRegisterDemoCourseStart,cancelRegisterDemoCourseSuccess,cancelRegisterDemoCourseFailure} = cancelRegisterDemoCourse.actions
const cancelRegisterDemoCourseReducer=cancelRegisterDemoCourse.reducer
export default cancelRegisterDemoCourseReducer
