import { createSlice } from "@reduxjs/toolkit"

const initialState={
    students:{
        infoStudent:null,
        isFetching:false,
        error:false
    }
}

const getStudentByAccountIdSlice=createSlice({
    name:"getStudentByAccountId",
    initialState:initialState,
    reducers:{
        getStudentByAccountIdStart:(state)=>{
            state.students.isFetching=true
        },
        getStudentByAccountIdSuccess:(state,action)=>{
            return{
                ...state,
                students:{
                    ...state.students,
                    infoStudent:action.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        getStudentByAccountIdFailure:(state,action)=>{
            return {
                ...state,
                students:{
                    ...state.students,
                    isFetching:false,
                    error:true
                }
            }
        }
    }
})

export const {getStudentByAccountIdStart,getStudentByAccountIdSuccess,getStudentByAccountIdFailure}=getStudentByAccountIdSlice.actions
const getStudentByAccountIdReducer=getStudentByAccountIdSlice.reducer
export default getStudentByAccountIdReducer

