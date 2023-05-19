import { createSlice } from "@reduxjs/toolkit"

const initialState={
    teachers:{
        infoTeacher:null ,
        isFetching:false,
        error:false
    }
}

const getAllTeachersSlice = createSlice({
    name:"getAllTeachers",
    initialState:initialState,
    reducers:{
        getAllTeacherStart: (state)=>{
             state.teachers.isFetching= true
        },
        getAllTeacherSuccess:(state,action)=>{
            return {
                ...state,
                teachers:{
                    ...state.teachers,
                    infoTeacher:action.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        getAllTeacherFailure:(state,action)=>{
            return {
                ...state,
                teachers:{
                    ...state.teachers,
                    isFetching:false,
                    error:true
                }
            }
        }
    }
})

export const {getAllTeacherStart,getAllTeacherSuccess,getAllTeacherFailure}=getAllTeachersSlice.actions
const getAllTeachersReducer=getAllTeachersSlice.reducer
export default getAllTeachersReducer
