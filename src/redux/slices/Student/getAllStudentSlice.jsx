import { createSlice } from "@reduxjs/toolkit"


const initialState={
    students:{
        allStudents:null,
        isFetching:false,
        error:false
    }
}

const getAllStudentsSlice=createSlice({
    name:"getAllStudents",
    initialState:initialState,
    reducers:{
        getAllStudentsStart:(state)=>{
            state.students.isFetching=true
        },
        getAllStudentsSuccess:(state,action)=>{
            return{
                ...state,
                students:{
                    ...state.students,
                    allStudents:action.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        getAllStudentsFailed:(state)=>{
            return{
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

export const { getAllStudentsStart,getAllStudentsSuccess,getAllStudentsFailed } = getAllStudentsSlice.actions
const getAllStudentsReducer=getAllStudentsSlice.reducer
export default getAllStudentsReducer
