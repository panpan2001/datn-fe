import { createSlice } from "@reduxjs/toolkit"


const initialState={
   academic:{
        currentAcademic:null,
        isFetching:false,
        error:false
    }}

    const createTeacherAcademicSlice=createSlice({
        name:"createTeacherAcademic",
        initialState:initialState,
        reducers:{
            createTeacherAcademicStart:(state)=>{
                return {
                    ...state,
                    academic:{
                        ...state.academic,
                        isFetching:true,
                        error:false
                }
            }
            },
            createTeacherAcademicSuccess:(state,action)=>{
                return {
                    ...state,
                   academic:{
                        ...state.academic,
                        currentAcademic:action.payload,
                        isFetching:false,
                        error:false
                    }
                }
            },
            createTeacherAcademicFailure:(state)=>{
                return {
                    ...state,
                   academic:{
                        ...state.academic,
                        isFetching:false,
                        error:true
                    }
        }
    }}
    })

export const {createTeacherAcademicFailure,createTeacherAcademicStart,createTeacherAcademicSuccess}= createTeacherAcademicSlice.actions
const createTeacherAcademicReducer= createTeacherAcademicSlice.reducer
export default createTeacherAcademicReducer
