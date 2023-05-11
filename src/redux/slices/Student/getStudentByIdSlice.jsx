import { createSlice } from "@reduxjs/toolkit"

const initialState={
    students:{
        infoStudent:null,
        isFetching:false,
        error:false
    }
}

const getStudentByIdSlice=createSlice({
    name:"getStudentById",
    initialState:initialState,
    reducers:{
        getStudentByIdStart:(state)=>{
            state.students.isFetching=true
        },
        getStudentByIdSuccess:(state,action)=>{
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
        getStudentByIdFailure:(state,action)=>{
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

export const {getStudentByIdStart,getStudentByIdSuccess,getStudentByIdFailure}=getStudentByIdSlice.actions
const getStudentByIdReducer=getStudentByIdSlice.reducer
export default getStudentByIdReducer

