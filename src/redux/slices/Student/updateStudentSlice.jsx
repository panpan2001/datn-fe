import { createSlice } from "@reduxjs/toolkit"

const initilalState ={
    student:{
        currentStudent:null,
        isFetching:false,
        error:false
    }
}

const updateStudentSlice= createSlice({
    name :"updateStudent",
    initialState:initilalState,
    reducers:{
        updateStudentStart:(state,action)=>{
            state.student.isFetching=true
        },
        updateStudentSuccess:(state,action)=>{
            return{
                ...state,
                student:{
                    ...state.student,
                    currentStudent:action.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        updateStudentFailure:(state,action)=>{
            return{
                ...state,
                student:{
                    ...state.student,
                    isFetching:false,
                    error:true
                }
            }
        }
    }
})

export const {updateStudentStart,updateStudentSuccess,updateStudentFailure} = updateStudentSlice.actions
const updateStudentReducer = updateStudentSlice.reducer
export default updateStudentReducer