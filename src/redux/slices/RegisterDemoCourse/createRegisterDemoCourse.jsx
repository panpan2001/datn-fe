import { createSlice } from "@reduxjs/toolkit"

const initialState={
    demoCourse:{
        currentDemoCourse:null,
        isFetching:false,
        error:true
    }
}

const createRegisterDemoCourse=createSlice({
    name:"createRegisterDemoCourse",
    initialState:initialState,
    reducers:{
        createRegisterDemoCourseStart:(state,action)=>{
            state.demoCourse.isFetching=true
        },
        createRegisterDemoCourseSuccess:(state,action)=>{
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
        createRegisterDemoCourseFailure:(state,action)=>{
            return {
                ...state,
                demoCourse:{
                    ...state.demoCourse,
                    isFetching:false,
                    error:true
                }
            }
        }
    }
})
 
export const {createRegisterDemoCourseStart,createRegisterDemoCourseSuccess,createRegisterDemoCourseFailure}=createRegisterDemoCourse.actions
const createRegisterDemoCourseReducer=createRegisterDemoCourse.reducer
export default createRegisterDemoCourseReducer
