import { createSlice } from "@reduxjs/toolkit"

const initialState={
    teacher:{
        currentTeacher:null ,
        isFetching:false,
        error:false
    }
}

const getTeacherByIdSlice= createSlice({
    name:"getTeacherById",
    initialState:initialState,
    reducers:{
        getTeacherByIdStart:(state)=>{
            state.teacher.isFetching= true
        },
        getTeacherByIdSuccess:(state,action)=>{
            return {
                ...state,
                teacher:{
                    ...state.teacher,
                    currentTeacher: action.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        getTeacherByIdFailure:(state)=>{
            return {
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

export const { getTeacherByIdStart, getTeacherByIdSuccess,getTeacherByIdFailure}= getTeacherByIdSlice.actions
const getTeacherByIdReducer= getTeacherByIdSlice.reducer
export default getTeacherByIdReducer