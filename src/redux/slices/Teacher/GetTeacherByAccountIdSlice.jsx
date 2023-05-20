import { createSlice } from "@reduxjs/toolkit";

const initialState={
    teacher:{
        currentTeacher:null,
        isFetching:false,
        error:false
    }
}
const getTeacherByAccountIdSlice= createSlice({
    name:"getTeacherByAccountId",
    initialState:initialState,
    reducers:{
        getTeacherByAccountIdStart:(state)=>{
            state.teacher.isFetching= true;
        },
        getTeacherByAccountIdSuccess:(state,action)=>{
            return{
                ...state,
                teacher:{
                    ...state.teacher,
                    currentTeacher:action.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        getTeacherByAccountIdFailure: (state)=>{
            return{
                ...state,
                teacher:{
                    ...state.teacher,
                    isFetching:false,
                    error:true
                }
            }
        }
    }
})

export const {getTeacherByAccountIdFailure,getTeacherByAccountIdStart,getTeacherByAccountIdSuccess}= getTeacherByAccountIdSlice.actions
const getTeacherByAccountIdReducer= getTeacherByAccountIdSlice.reducer
export default getTeacherByAccountIdReducer