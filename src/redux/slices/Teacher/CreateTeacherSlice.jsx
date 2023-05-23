import { createSlice } from "@reduxjs/toolkit"


const initialState={
    teacher:{
        currentTeacher:null,
        isFetching:false,
        error:false
    }
}

const createTeacherSlice=createSlice({
    name:"createTeacher",
    initialState:initialState,
    reducers:{
        createTeacherStart:(state)=>{
            state.teacher.isFetching=true
        },
        createTeacherSuccess:(state,action)=>{
            return {
                ...state,
                teacher:{
                    ...state.teacher,
                    currentTeacher:action.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        createTeacherFailure:(state,action)=>{
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

export const {createTeacherStart,createTeacherSuccess,createTeacherFailure}=createTeacherSlice.actions
const createTeacherReducer=createTeacherSlice.reducer
export default createTeacherReducer