import { createSlice } from "@reduxjs/toolkit"

const initialState={
    teacher:{
        currentTeacher:null,
        isFetching:false,
        error:false
    }
}

const updateTeacherSlice=createSlice({
    name:"updateTeacher",
    initialState:initialState,
    reducers:{
        updateTeacherStart:(state)=>{
            state.teacher.isFetching=true
        },
        updateTeacherSuccess:(state,action)=>{
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
        updateTeacherFailure:(state,action)=>{
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

export const {updateTeacherStart,updateTeacherSuccess,updateTeacherFailure}=updateTeacherSlice.actions
const updateTeacherReducer=updateTeacherSlice.reducer
export default updateTeacherReducer
