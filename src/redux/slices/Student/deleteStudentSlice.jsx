import { createSlice } from "@reduxjs/toolkit"

const initialState={
    student:{
        currentStudent:null,
        isFetching:false,
        error: false,

    }
}

const deleteStudentSlice= createSlice({
    name: "deleteStudent",
    initialState:initialState,
    reducers:{
        deleteStudentStart:(state,action)=>{
            state.student.isFetching=true
        },
        deleteStudentSuccess:(state,action)=>{
           return {
            ...state,
            student:{
                ...state.student,
                currentStudent:action.payload,
                isFetching:false,
                error: false
            }
           }
        },
        
        deleteStudentFailure:(state,action)=>{
            return {
                ...state,
                student:{
                    ...state.student,
                    isFetching:false,
                    error: true
                }
            }
            }
        }
})

export const { deleteStudentStart,deleteStudentSuccess,deleteStudentFailure } = deleteStudentSlice.actions
const deleteStudentReducer = deleteStudentSlice.reducer
export default deleteStudentReducer